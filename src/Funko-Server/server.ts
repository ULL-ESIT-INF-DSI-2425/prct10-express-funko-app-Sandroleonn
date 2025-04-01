import * as net from 'net';
import * as fs from 'fs/promises';
import * as path from 'path';
import { RequestType, ResponseType, FunkoPop } from './types.js';

const SERVER_PORT = 5000;

const server = net.createServer((socket) => {
  console.log('Cliente conectado.');

  socket.on('data', async (data) => {
    try {
      const request: RequestType = JSON.parse(data.toString());
      console.log(`Solicitud recibida: ${request.type} para ${request.user}`);

      if (!request.user || typeof request.user !== 'string') {
        throw new Error('Usuario inválido.');
      }

      const userDir = path.join(__dirname, 'data', request.user);
      await fs.mkdir(userDir, { recursive: true });

      let response: ResponseType = { success: false, message: 'Operación fallida' };

      switch (request.type) {
        case 'add':
        case 'update':
          if (!request.funko || typeof request.funko.id !== 'number') {
            throw new Error('Datos de Funko inválidos.');
          }
          const funkoFile = path.join(userDir, `${request.funko.id}.json`);

          if (request.type === 'add') {
            try {
              await fs.access(funkoFile);
              response.message = 'Funko ya existe!';
            } catch {
              await fs.writeFile(funkoFile, JSON.stringify(request.funko, null, 2), 'utf8');
              response = { success: true, message: 'Funko añadido!' };
            }
          } else {
            await fs.writeFile(funkoFile, JSON.stringify(request.funko, null, 2), 'utf8');
            response = { success: true, message: 'Funko actualizado!' };
          }
          break;

        case 'remove':
          if (!request.funko || typeof request.funko.id !== 'number') {
            throw new Error('Datos de Funko inválidos.');
          }
          const removeFile = path.join(userDir, `${request.funko.id}.json`);
          try {
            await fs.unlink(removeFile);
            response = { success: true, message: 'Funko eliminado!' };
          } catch {
            response.message = 'Funko no encontrado!';
          }
          break;

        case 'read':
          if (!request.funko || typeof request.funko.id !== 'number') {
            throw new Error('Datos de Funko inválidos.');
          }
          const readFile = path.join(userDir, `${request.funko.id}.json`);
          try {
            const funkoData = await fs.readFile(readFile, 'utf8');
            response = { success: true, message: 'Funko encontrado!', funkos: [JSON.parse(funkoData) as FunkoPop] };
          } catch {
            response.message = 'Funko no encontrado!';
          }
          break;

        case 'list':
          try {
            const files = await fs.readdir(userDir);
            const funkos: FunkoPop[] = await Promise.all(
              files.map(async (file) => {
                const filePath = path.join(userDir, file);
                const content = await fs.readFile(filePath, 'utf8');
                return JSON.parse(content) as FunkoPop;
              })
            );
            response = { success: true, message: 'Lista de Funkos', funkos };
          } catch {
            response.message = 'No se pudo listar los Funkos.';
          }
          break;

        default:
          throw new Error('Tipo de solicitud inválido.');
      }

      socket.write(JSON.stringify(response));
      socket.end();
    } catch (error) {
      let errorMessage = 'Ocurrió un error desconocido';
      
      if (error instanceof Error) {
        errorMessage = error.message;
      }
    
      console.error('Error procesando solicitud:', errorMessage);
      socket.write(JSON.stringify({ success: false, message: errorMessage }));
      socket.end();
    }
  });

  socket.on('error', (err) => {
    console.error('Error en el socket:', err.message);
  });

  socket.on('end', () => {
    console.log('Cliente desconectado.');
  });
});

server.listen(SERVER_PORT, () => {
  console.log(`Servidor escuchando en el puerto ${SERVER_PORT}`);
});

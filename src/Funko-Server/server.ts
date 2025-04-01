import * as net from 'net';
import * as fs from 'fs';
import { RequestType, ResponseType, FunkoPop } from './types.js';

const SERVER_PORT = 5000;

const server = net.createServer((socket) => {
  console.log('Cliente conectado.');

  socket.on('data', (data) => {
    const request: RequestType = JSON.parse(data.toString());
    console.log(`Solicitud recibida: ${request.type} para ${request.user}`);

    const userDir = `./data/${request.user}`;
    if (!fs.existsSync(userDir)) {
      fs.mkdirSync(userDir, { recursive: true });
    }

    let response: ResponseType = { success: false, message: 'Operación fallida' };

    switch (request.type) {
      case 'add':
        if (request.funko) {
          const filePath = `${userDir}/${request.funko.id}.json`;
          if (fs.existsSync(filePath)) {
            response.message = 'Funko ya existe!';
          } else {
            fs.writeFileSync(filePath, JSON.stringify(request.funko, null, 2));
            response = { success: true, message: 'Funko añadido!' };
          }
        }
        break;

      case 'update':
        if (request.funko) {
          const filePath = `${userDir}/${request.funko.id}.json`;
          if (fs.existsSync(filePath)) {
            fs.writeFileSync(filePath, JSON.stringify(request.funko, null, 2));
            response = { success: true, message: 'Funko actualizado!' };
          } else {
            response.message = 'Funko no encontrado!';
          }
        }
        break;

      case 'remove':
        if (request.funko) {
          const filePath = `${userDir}/${request.funko.id}.json`;
          if (fs.existsSync(filePath)) {
            fs.unlinkSync(filePath);
            response = { success: true, message: 'Funko eliminado!' };
          } else {
            response.message = 'Funko no encontrado!';
          }
        }
        break;

      case 'read':
        if (request.funko) {
          const filePath = `${userDir}/${request.funko.id}.json`;
          if (fs.existsSync(filePath)) {
            const funko = JSON.parse(fs.readFileSync(filePath, 'utf8')) as FunkoPop;
            response = { success: true, message: 'Funko encontrado!', funkos: [funko] };
          } else {
            response.message = 'Funko no encontrado!';
          }
        }
        break;

      case 'list':
        const files = fs.readdirSync(userDir);
        const funkos: FunkoPop[] = files.map((file) => JSON.parse(fs.readFileSync(`${userDir}/${file}`, 'utf8')));
        response = { success: true, message: 'Lista de Funkos', funkos };
        break;
    }

    socket.write(JSON.stringify(response));
    socket.end();
  });

  socket.on('end', () => {
    console.log('Cliente desconectado.');
  });
});

server.listen(SERVER_PORT, () => {
  console.log(`Servidor escuchando en el puerto ${SERVER_PORT}`);
});

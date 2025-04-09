import net from 'net';
import { exec } from 'child_process';

const server = net.createServer((socket) => {
  console.log('Cliente conectado');

  socket.on('data', (data) => {
    try {
      const message = JSON.parse(data.toString());
      const command = message.command;

      console.log(`Comando recibido: ${command}`);

      exec(command, (error, stdout, stderr) => {
        const response = error
          ? { success: false, output: stderr }
          : { success: true, output: stdout };
        
        socket.write(JSON.stringify(response));
      });
    } catch (err) {
      socket.write(JSON.stringify({ success: false, output: 'JSON inválido' }));
    }
  });

  socket.on('end', () => {
    console.log('Cliente desconectado');
  });
});

server.listen(8000, () => {
  console.log('Servidor JSON escuchando en el puerto 8000');
});

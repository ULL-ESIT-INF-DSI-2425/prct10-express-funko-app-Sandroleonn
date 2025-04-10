import net from 'net';

net.createServer((connection) => {
  console.log('Cliente conectado');

  connection.on('data', (data) => {
    let command;
    try {
      const parsed = JSON.parse(data.toString());
      command = parsed.command;
    } catch {
      connection.write(JSON.stringify({ error: 'Comando no válido (JSON)' }) + '\n');
      return;
    }
  
    if (command === 'GET_STATUS') {
      connection.write(JSON.stringify({ status: 'ok' }) + '\n');
    } else if (command === 'GET_TIME') {
      const currentTime = new Date().toISOString();
      connection.write(JSON.stringify({ time: currentTime }) + '\n');
    } else if (command === 'GET_ALL') {
      const currentTime = new Date().toISOString();
      connection.write(JSON.stringify({ status: 'ok', time: currentTime }) + '\n');
    } else {
      connection.write(JSON.stringify({ error: 'Comando no reconocido' }) + '\n');
    }
  });
  

  connection.on('close', () => {
    console.log('Cliente desconectado');
  });
}).listen(60300, () => {
  console.log('Esperando conexión de clientes');
});

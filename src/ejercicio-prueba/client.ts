import net from 'net';

const command = process.argv[2];

const client = net.createConnection({ port: 60300 }, () => {
  const message = JSON.stringify({ command });
  client.write(message);
});


client.on('data', (dataJSON) => {
  const message = JSON.parse(dataJSON.toString());

  if (message.status) {
    console.log(`Estado: ${message.status}`);
  }
  if (message.time) {
    console.log(`Hora: ${message.time}`);
  }
  if (message.error) {
    console.log(`Error: ${message.error}`);
  }

  client.end(); // cerrar conexión después de recibir respuesta
});

import net from 'net';

const args = process.argv.slice(2);
const command = args.join(' ');

const client = net.createConnection({ port: 8000 }, () => {
  const message = JSON.stringify({ command });
  client.write(message);
});

client.on('data', (data) => {
  const response = JSON.parse(data.toString());

  if (response.success) {
    console.log(`Salida:\n${response.output}`);
  } else {
    console.error(`Error:\n${response.output}`);
  }

  client.end();
});

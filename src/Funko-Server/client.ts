import * as net from 'net';
import yargs from 'yargs';
import { hideBin } from 'yargs/helpers';
import { RequestType, ResponseType, FunkoPop } from './types.js';
import chalk from 'chalk';

const CLIENT_PORT = 5000;

const sendRequest = (request: RequestType) => {
  const client = net.createConnection({ port: CLIENT_PORT }, () => {
    client.write(JSON.stringify(request));
  });

  client.on('data', (data) => {
    const response: ResponseType = JSON.parse(data.toString());
    if (response.success) {
      console.log(chalk.green(response.message));
      if (response.funkos) {
        response.funkos.forEach((funko) => {
          console.log(chalk.blue(JSON.stringify(funko, null, 2)));
        });
      }
    } else {
      console.log(chalk.red(response.message));
    }
    client.end();
  });

  client.on('end', () => {
    console.log('Desconectado del servidor.');
  });
};

yargs(hideBin(process.argv))
  .command(
    'add',
    'Añadir un Funko',
    (yargs) =>
      yargs
        .option('user', { type: 'string', demandOption: true })
        .option('id', { type: 'number', demandOption: true })
        .option('name', { type: 'string', demandOption: true })
        .option('description', { type: 'string', demandOption: true })
        .option('type', { type: 'string', demandOption: true })
        .option('genre', { type: 'string', demandOption: true })
        .option('franchise', { type: 'string', demandOption: true })
        .option('number', { type: 'number', demandOption: true })
        .option('exclusive', { type: 'boolean', demandOption: true })
        .option('specialFeatures', { type: 'string', demandOption: true })
        .option('marketValue', { type: 'number', demandOption: true }),
    (argv) => {
      const funko: FunkoPop = {
        id: argv.id,
        name: argv.name,
        description: argv.description,
        type: argv.type as any,
        genre: argv.genre as any,
        franchise: argv.franchise,
        number: argv.number,
        exclusive: argv.exclusive,
        specialFeatures: argv.specialFeatures,
        marketValue: argv.marketValue,
      };

      sendRequest({ type: 'add', user: argv.user, funko });
    }
  )
  .command('list', 'Listar Funkos', (yargs) =>
    yargs.option('user', { type: 'string', demandOption: true }), (argv) => {
      sendRequest({ type: 'list', user: argv.user });
    }
  )
  .help()
  .argv;

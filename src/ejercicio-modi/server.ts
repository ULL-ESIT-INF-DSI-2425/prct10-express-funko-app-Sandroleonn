import * as net from 'net';
import * as fs from 'fs';

/**
 * Servidor TCP que recibe una ruta de archivo de un cliente, verifica su existencia y envía su contenido.
 * Si el archivo no existe o hay un error al leerlo, se envía un mensaje de error al cliente.
 * @listens {number} 60300 - Escucha en el puerto 60300.
 * @throws {Error} Si el archivo no existe o hay un error al leerlo.
 */

net.createServer((connection) => {
    console.log('Cliente conectado');

    connection.on('data', (data) => {
        const filePath = data.toString().trim();
        /**
         * Esta funcion de gestión de ficheros verifica si tiene acceso a un archivo o no
         * @param filePath - Ruta del archivo a comprobar
         * @param fs.constants.F_OK - Constantes propias de la función
         * @param err - Manejador que contiene los posibles errores durante la comprobación
         */
        fs.access(filePath, fs.constants.F_OK, (err) => {
            if (err) {
                connection.write(`Error: El fichero ${filePath} no existe o no se ha encontrado: ${err.message}`);
                return;
            }

            const inputStream = fs.createReadStream(filePath);

            inputStream.on('data', (piece) => {
                connection.write(piece);
            });

            inputStream.on('close', () => {
                console.log('Archivo enviado');
                connection.end();
            });

            inputStream.on('error', (err) => {
                connection.write(`Error al leer el archivo: ${err.message}`);
                connection.end();
            });
        });
    });

    connection.on('end', () => {
        console.log('Cliente desconectado');
    });
}).listen(60300, () => {
    console.log('Servidor a la espera de clientes.');
});

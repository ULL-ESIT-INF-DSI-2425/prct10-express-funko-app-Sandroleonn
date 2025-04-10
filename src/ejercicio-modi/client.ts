import * as net from 'net';
import * as fs from 'fs';



if (process.argv.length !== 4) {
    console.log('Falta algún argumento');
} else {
    const filePath = process.argv[2];
    const outputFilePath = process.argv[3];

    /**
     * Función que permite a un cliente conectarse a un puerto.
     * @param port - Variable que contiene el puerto a conectarse.
     */
    const client = net.connect({ port: 60300 }, () => {
        console.log('Conectado al servidor');
        client.write(filePath);
    });
    /**
     * Función on que ejecuta una serie de datos para su lectura o escritura.
     * @param data - Manejador que contiene los datos enviados a través de la conexión.
     */
    client.on('data', (data) => {
        const message = data.toString().trim();
        if (message.startsWith('Error:')) {
            console.error(message);
            process.exit(-1);
        } else {
            console.log('Archivo recibido');

            const outputStream = fs.createWriteStream(outputFilePath);

            outputStream.write(data);

            outputStream.on('error', (err) => {
                console.error('Error al escribir el archivo:', err.message);
            });

            outputStream.end();
        }
    });

    client.on('end', () => {
        console.log('El fichero ha sido transferido');
        console.log ('Desconectado del servidor');
    });
    client.on('error', (err) => {
        console.error('Error de conexión:', err.message);
    });
}

import fs from 'fs';
import path from 'path';

interface LogCounterOptions {
    filePath: string;
    keyword: string;
}

function countKeywordInLogs(options: LogCounterOptions, callback: (error: Error | null, count?: number) => void): void {
    fs.readFile(options.filePath, 'utf8', (err, data) => {
        if (err) {
            return callback(new Error(`Error al leer el archivo: ${err.message}`));
        }

        if (!data) {
            return callback(new Error('El archivo está vacío'));
        }

        const lines = data.split('\n');
        let count = 0;
        const keyword = options.keyword.toUpperCase();

        lines.forEach(line => {
            const upperLine = line.toUpperCase();
            const matches = upperLine.split(keyword).length - 1;
            count += matches;
        });

        callback(null, count);
    });
}

// Uso desde línea de comandos
const args = process.argv.slice(2);
if (args.length < 2) {
    console.error('Uso: node countKeywords.js <ruta_archivo_logs> <palabra_clave>');
    process.exit(1);
}

const options: LogCounterOptions = {
    filePath: path.resolve(args[0]),
    keyword: args[1]
};

countKeywordInLogs(options, (err, count) => {
    if (err) {
        console.error(err.message);
        process.exit(1);
    }
    console.log(`La palabra clave "${options.keyword}" aparece ${count} veces en el archivo.`);
});
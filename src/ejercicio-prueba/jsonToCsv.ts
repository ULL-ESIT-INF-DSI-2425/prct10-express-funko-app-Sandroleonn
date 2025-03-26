import fs from 'fs';
import path from 'path';

interface WeatherData {
    fecha: string;
    ubicacion: string;
    temperatura: number;
    humedad: number;
    precipitacion: number;
    viento_kmh: number;
}

function convertJsonToCsv(inputPath: string, outputPath: string, callback: (error: Error | null) => void): void {
    fs.readFile(inputPath, 'utf8', (err, data) => {
        if (err) {
            return callback(new Error(`Error al leer el archivo JSON: ${err.message}`));
        }

        if (!data) {
            return callback(new Error('El archivo JSON está vacío'));
        }

        let weatherData: WeatherData[];
        try {
            weatherData = JSON.parse(data);
        } catch (error) {
            // Ahora manejamos correctamente el error de tipo unknown
            const parseError = error instanceof Error ? error : new Error('Error desconocido al parsear JSON');
            return callback(new Error(`Error al parsear el JSON: ${parseError.message}`));
        }

        if (!Array.isArray(weatherData)) {
            return callback(new Error('El JSON no contiene un array de datos'));
        }

        if (weatherData.length === 0) {
            return callback(new Error('El array de datos meteorológicos está vacío'));
        }

        // Verificar la estructura de los datos
        const requiredKeys: (keyof WeatherData)[] = [
            'fecha', 'ubicacion', 'temperatura', 'humedad', 'precipitacion', 'viento_kmh'
        ];

        for (const item of weatherData) {
            for (const key of requiredKeys) {
                if (!(key in item)) {
                    return callback(new Error(`El objeto no tiene la propiedad requerida: ${key}`));
                }
            }
        }

        // Crear encabezados CSV
        const headers = requiredKeys.join(',');
        const csvRows = [headers];

        // Convertir cada objeto a línea CSV
        weatherData.forEach(item => {
            const row = requiredKeys
                .map(key => {
                    const value = item[key];
                    return typeof value === 'string' ? `"${value}"` : String(value);
                })
                .join(',');
            csvRows.push(row);
        });

        const csvContent = csvRows.join('\n');

        fs.writeFile(outputPath, csvContent, 'utf8', (writeErr) => {
            if (writeErr) {
                return callback(new Error(`Error al escribir el archivo CSV: ${writeErr.message}`));
            }
            callback(null);
        });
    });
}

// Uso desde línea de comandos
const args = process.argv.slice(2);
if (args.length < 2) {
    console.error('Uso: node jsonToCsv.js <ruta_archivo_json> <ruta_archivo_csv_salida>');
    process.exit(1);
}

const inputPath = path.resolve(args[0]);
const outputPath = path.resolve(args[1]);

convertJsonToCsv(inputPath, outputPath, (err) => {
    if (err) {
        console.error(err.message);
        process.exit(1);
    }
    console.log(`Archivo CSV generado exitosamente en: ${outputPath}`);
});
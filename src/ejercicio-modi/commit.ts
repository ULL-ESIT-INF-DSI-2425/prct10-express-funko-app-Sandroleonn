import * as fs from 'fs';
import * as path from 'path';

/**
 * Función que realiza una copia de seguridad de los archivos modificados
 * @param directory - Contiene la ruta al directorio donde se ha modificado el archivo
 * @param backupDirectory - Contiene la ruta donde está o se va a crear el directorio de copias de seguridad
 * @param filename - Contiene el archivo modificado
 */
export function commit(directory: string, backupDirectory: string, filename: string ): void {
    const filePath = path.join(directory, filename);
    const backupFilePath = path.join(backupDirectory, `${filename}.${Date.now()}.bak`);

    /**
     * Función que realiza una copia de seguridad de los archivos modificados
     * @param filePath - Contiene la ruta completo del directorio y el archivo modificado
     * @param err - Contiene información sobre posibles errores
     * @param data - Contiene la información dentro del archivo
     */
    fs.readFile(filePath, (err, data) => {
        if (err) {
            console.error(`Error al leer el archivo ${filename}: ${err}`);
            return;
        }
        /**
         * Función que realiza una copia de seguridad de los archivos modificados
         * @param backupFilePath - Contiene la ruta completo del directorio de seguridad
         * @param err - Contiene información sobre posibles errores
         * @param data - Contiene la información dentro del archivo a escribir
         */
        fs.writeFile(backupFilePath, data, (err) => {
            if (err) {
                console.error(`Error al escribir el archivo de backup para ${filename}: ${err}`);
                return;
            }
            console.log(`Backup creado para ${filename}: ${backupFilePath}`);
        });
    });
}


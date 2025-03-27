import * as fs from 'fs';
import { commit } from './commit.js';
/**
 * Función que monitorea los cambios producidos en un los archivos de un directorio
 * @param directory - Contiene la ruta al directorio a monitorear
 * @param backupDirectory - Contiene la ruta donde está o se va a crear el directorio de copias de seguridad
 */
export function watchMonitor(directory: string, backupDirectory: string): void {
    /**
     *  Función que comprueba si el directorio a monitorear existe
     * @param directory -Contiene la ruta al directorio a comprobar
     * @param err - Primer Argumento del callback que contiene información sobre un posible error
     * @param stats - Contiene información sobre la existencia del directorio
     */
    fs.stat(directory, (err, stats) => {
        if (err && err.code === 'ENOENT') {
            console.error(`Error: No se ha encontrado el directorio: ${err}`);
            return;
        }
        else {
            /**
             *  Función que monitorea los cambios producidos en un los archivos de un directorio
             * @param directory-Contiene la ruta al directorio a comprobar
             * @param eventType - Primer Argumento del callback que contiene un tipo de evento
             * @param filename - Contiene información sobre un archivo asociado a ciertos eventos.
             */
            fs.watch(directory, (eventType, filename) => {
                if (filename && eventType === 'change') {
                    console.log(`Archivo modificado: ${filename}`);
                    commit(directory, backupDirectory, filename);
                }
            });
        }
    });
    /**
     *  Función que comprueba si el directorio de copias de seguridad existe
     * @param backupDirectory-Contiene la ruta al directorio a comprobar
     * @param err - Primer Argumento del callback que contiene información sobre un posible error
     * @param stats - Contiene información sobre la existencia del directorio
     */
    fs.stat(backupDirectory, (err, stats) => {
        if (err && err.code === 'ENOENT') {
            fs.mkdir(backupDirectory, { recursive: true }, (err) => {
                if (err) {
                    console.error(`Error al crear el directorio de backups: ${err}`);
                    return;
                }
            });
        }
    });
}
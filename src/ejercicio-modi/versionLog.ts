import * as fs from 'fs';
/**
 * Funcion que muestra las versiones de un archivo
 * @param filename Contiene el archivo a mostrar
 */
export function log(filename: string): void {
    const versionsDir = './directorio_backup'
    /**
     * Funcion que lee un directorio
     * @param versionsDir - Contiene el directorio con las distintas versiones del archivo
     * @param err - Contiene informacion sobre posibles errores
     * @param files - Contiene información sobre todos los archivos del directorio
     */
    fs.readdir(versionsDir, (err, files) => {
        if (err) {
            console.error('Error al leer el directorio de versiones:', err);
            return;
        }
        const versionedFiles = files.filter(file => file.startsWith(filename));

        if (versionedFiles.length === 0) {
            console.log(`No se encontraron versiones para el archivo: ${filename}`);
            return;
        }

        console.log(`Versiones para el archivo "${filename}":`);
        versionedFiles.forEach(file => {
            console.log(`- ${file}`);
        });
    });
}

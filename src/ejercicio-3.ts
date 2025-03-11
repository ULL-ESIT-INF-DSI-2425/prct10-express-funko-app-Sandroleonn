import * as fs from "fs";

/**
 * Interface para la lectura de archivos.
 * Define el contrato para las clases que implementen la lectura de archivos.
 * 
 * @interface IFileReader
 */
interface IFileReader {
  /**
   * Lee el contenido de un archivo.
   * 
   * @param filePath - La ruta del archivo que se quiere leer.
   * @returns El contenido del archivo como una cadena de texto.
   */
  read(filePath: string): string;
}

/**
 * Interface para la escritura de archivos.
 * Define el contrato para las clases que implementen la escritura de archivos.
 * 
 * @interface IFileWriter
 */
interface IFileWriter {
  /**
   * Escribe datos en un archivo.
   * 
   * @param filePath - La ruta del archivo donde se escribirán los datos.
   * @param data - Los datos a escribir en el archivo.
   */
  write(filePath: string, data: string): void;
}

/**
 * Implementación de la interfaz IFileReader utilizando el módulo 'fs' de Node.js.
 * Esta clase lee archivos desde el sistema de archivos local.
 * 
 * @class FsFileReader
 * @implements {IFileReader}
 */
export class FsFileReader implements IFileReader {
  /**
   * Lee el contenido de un archivo dado su path.
   * 
   * @param filePath - La ruta del archivo que se quiere leer.
   * @returns El contenido del archivo como una cadena de texto.
   */
  public read(filePath: string): string {
    try {
      return fs.readFileSync(filePath, "utf-8");
    } catch (error) {
      console.error("Error al leer el archivo");
      return "";
    }
  }
}

/**
 * Implementación de la interfaz IFileWriter utilizando el módulo 'fs' de Node.js.
 * Esta clase escribe datos en archivos en el sistema de archivos local.
 * 
 * @class FsFileWriter
 * @implements {IFileWriter}
 */
export class FsFileWriter implements IFileWriter {
  /**
   * Escribe datos en un archivo dado su path.
   * 
   * @param filePath - La ruta del archivo donde se escriben los datos.
   * @param data - Los datos que se escribirán en el archivo.
   */
  public write(filePath: string, data: string): void {
    try {
      fs.writeFileSync(filePath, data, "utf-8");
      console.log("Archivo escrito exitosamente.");
    } catch (error) {
      console.error("Error al escribir en el archivo");
    }
  }
}

/**
 * Clase para gestionar la lectura y escritura de archivos.
 * Dependiendo de las interfaces IFileReader e IFileWriter para realizar las operaciones de archivo.
 * 
 * @class FileManager
 */
export class FileManager {
  /**
   * Crea una instancia de FileManager para gestionar la lectura y escritura de un archivo.
   * 
   * @param filePath - La ruta del archivo que será gestionado.
   * @param fileReader - Instancia que implementa la lectura de archivos.
   * @param fileWriter - Instancia que implementa la escritura de archivos.
   */
  constructor(
    private filePath: string,
    private fileReader: IFileReader,
    private fileWriter: IFileWriter
  ) {}

  /**
   * Lee el contenido del archivo especificado por filePath.
   * 
   * @returns El contenido del archivo como una cadena de texto.
   */
  public readFile(): string {
    try {
      return this.fileReader.read(this.filePath);
    } catch (error) {
      console.error("Error al leer el archivo:", error);
      return ''; // O un valor predeterminado en caso de error
    }
  }

  /**
   * Escribe datos en el archivo especificado por filePath.
   * 
   * @param data - Los datos que se escribirán en el archivo.
   */
  public writeFile(data: string): void {
    try {
      this.fileWriter.write(this.filePath, data);
    } catch (error) {
      console.error("Error al escribir en el archivo:", error);
    }
  }
}

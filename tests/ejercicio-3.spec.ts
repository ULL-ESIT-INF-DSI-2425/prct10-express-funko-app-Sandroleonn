import { describe, expect, test, vi, afterEach } from "vitest";
import { FsFileReader, FsFileWriter, FileManager } from "../src/ejercicio-3"; // Ajusta la importación si es necesario
import * as fs from "fs";

// Mockear el módulo fs
vi.mock("fs", () => ({
  readFileSync: vi.fn(),
  writeFileSync: vi.fn(),
}));

// Restaurar todos los mocks después de cada prueba
afterEach(() => {
  vi.restoreAllMocks();
});

// Pruebas para la clase FsFileReader
describe("FsFileReader", () => {
  const filePath = "test.txt";
  const fileContent = "Hello, World!";
  const reader = new FsFileReader();

  test("debe leer el contenido de un archivo correctamente", () => {
    // Mock de fs.readFileSync para simular la lectura exitosa
    vi.mocked(fs.readFileSync).mockReturnValue(fileContent);

    const result = reader.read(filePath);

    expect(result).toBe(fileContent);
    expect(fs.readFileSync).toHaveBeenCalledWith(filePath, "utf-8");
  });

  test("debe manejar errores al leer un archivo", () => {
    // Mock de fs.readFileSync para simular un error
    vi.mocked(fs.readFileSync).mockImplementation(() => {
      throw new Error("Error al leer el archivo");
    });

    const result = reader.read(filePath);

    expect(result).toBe("");
    expect(fs.readFileSync).toHaveBeenCalledWith(filePath, "utf-8");
  });
});

// Pruebas para la clase FsFileWriter
describe("FsFileWriter", () => {
  const filePath = "test.txt";
  const data = "Hello, World!";
  const writer = new FsFileWriter();

  test("debe escribir datos en un archivo correctamente", () => {
    // Mock de fs.writeFileSync para simular la escritura exitosa
    vi.mocked(fs.writeFileSync).mockReturnValue(undefined);

    writer.write(filePath, data);

    expect(fs.writeFileSync).toHaveBeenCalledWith(filePath, data, "utf-8");
  });

  test("debe manejar errores al escribir en un archivo", () => {
    // Mock de fs.writeFileSync para simular un error
    vi.mocked(fs.writeFileSync).mockImplementation(() => {
      throw new Error("Error al escribir en el archivo");
    });

    writer.write(filePath, data);

    expect(fs.writeFileSync).toHaveBeenCalledWith(filePath, data, "utf-8");
  });
});

// Pruebas para la clase FileManager
describe("FileManager", () => {
  const filePath = "test.txt";
  const fileContent = "Hello, World!";
  const fileReader = new FsFileReader();
  const fileWriter = new FsFileWriter();
  const fileManager = new FileManager(filePath, fileReader, fileWriter);

  test("debe leer el contenido de un archivo correctamente", () => {
    vi.spyOn(fileReader, "read").mockReturnValue(fileContent);

    const result = fileManager.readFile();

    expect(result).toBe(fileContent);
    expect(fileReader.read).toHaveBeenCalledWith(filePath);
  });

  test("debe manejar errores al leer un archivo", () => {
    vi.spyOn(fileReader, "read").mockImplementation(() => {
      throw new Error("Error al leer el archivo");
    });

    const result = fileManager.readFile();

    expect(result).toBe("");
  });

  test("debe escribir datos en un archivo correctamente", () => {
    const writeSpy = vi.spyOn(fileWriter, "write");

    fileManager.writeFile(fileContent);

    expect(writeSpy).toHaveBeenCalledWith(filePath, fileContent);
  });

  test("debe manejar errores al escribir en un archivo", () => {
    vi.spyOn(fileWriter, "write").mockImplementation(() => {
      throw new Error("Error al escribir en el archivo");
    });

    fileManager.writeFile(fileContent);

    // Verifica que el error se maneja correctamente
    expect(fileWriter.write).toHaveBeenCalledWith(filePath, fileContent);
  });
});
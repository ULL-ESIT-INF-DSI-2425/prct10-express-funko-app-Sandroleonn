import { describe, expect, test } from "vitest";
import { Printer, Scanner, PrinterScanner } from "../src/ejercicio-4"; // Ajusta la importación según la ubicación del código

// Pruebas para la clase Printer
describe("Printer", () => {
  test("debe imprimir correctamente", () => {
    const printer = new Printer();
    expect(() => printer.print()).not.toThrow();
  });
});

// Pruebas para la clase Scanner
describe("Scanner", () => {
  test("debe escanear correctamente", () => {
    const scanner = new Scanner();
    expect(() => scanner.scan()).not.toThrow();
  });
});

// Pruebas para la clase PrinterScanner
describe("PrinterScanner", () => {
  test("debe imprimir correctamente", () => {
    const printerScanner = new PrinterScanner();
    expect(() => printerScanner.print()).not.toThrow();
  });

  test("debe escanear correctamente", () => {
    const printerScanner = new PrinterScanner();
    expect(() => printerScanner.scan()).not.toThrow();
  });
});

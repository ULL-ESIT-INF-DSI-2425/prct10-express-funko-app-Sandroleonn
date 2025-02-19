import { describe, expect, test } from "vitest";
import { decodeResistor } from "../src/ejercicio-2"; // Asegúrate de que la ruta sea correcta

describe("decodeResistor function tests", () => {
  test("decodeResistor(['Marrón', 'Verde']) returns 15", () => {
    expect(decodeResistor(["Marrón", "Verde"])).toBe(15);
  });

  test("decodeResistor(['Rojo', 'Naranja']) returns 23", () => {
    expect(decodeResistor(["Rojo", "Naranja"])).toBe(23);
  });

  test("decodeResistor(['Azul', 'Amarillo']) returns 64", () => {
    expect(decodeResistor(["Azul", "Amarillo"])).toBe(64);
  });

  test("decodeResistor(['Rojo', 'Naranja', 'Azul']) ignores third color and returns 23", () => {
    expect(decodeResistor(["Rojo", "Naranja", "Azul"])).toBe(23); // Ignora 'Azul'
  });

  test("decodeResistor(['Azul']) returns message for insufficient colors", () => {
    expect(decodeResistor(["Azul"])).toBe("Se requieren al menos dos colores para decodificar la resistencia.");
  });

  test("decodeResistor(['Negro', 'Dorado']) returns message for invalid color", () => {
    expect(decodeResistor(["Negro", "Dorado"])).toBe("Uno o más colores no son válidos.");
  });
});


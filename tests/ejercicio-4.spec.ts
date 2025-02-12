import { describe, expect, test } from "vitest";
import { collatz } from "../src/ejercicio-4"; // Asegúrate de ajustar la ruta si es necesario

describe("collatz function tests", () => {
    test("collatz(10) returns 6", () => {
        expect(collatz(10)).toBe(6);
    });

    test("collatz(5) returns 5", () => {
        expect(collatz(5)).toBe(5);
    });

    test("collatz(1) returns 0", () => {
        expect(collatz(1)).toBe(0); // No hay iteraciones porque ya es 1
    });

    test("collatz(-10) returns undefined", () => {
        expect(collatz(-10)).toBeUndefined(); // Número negativo
    });

    test("collatz(0) returns undefined", () => {
        expect(collatz(0)).toBeUndefined(); // Número cero
    });

    test("collatz(3.5) returns undefined", () => {
        expect(collatz(3.5)).toBeUndefined(); // Número decimal
    });

    test("collatz(16) returns 4", () => {
        expect(collatz(16)).toBe(4); // Proceso para el número 16
    });

    test("collatz(3) returns 7", () => {
        expect(collatz(3)).toBe(7); // Comprobación del número 3
    });

    test("collatz(2) returns 1", () => {
        expect(collatz(2)).toBe(1); // Proceso para el número 2
    });
});

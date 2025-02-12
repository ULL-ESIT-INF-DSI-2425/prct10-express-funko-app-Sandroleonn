import { describe, expect, test } from "vitest";
import { applyOperation } from "../src/ejercicio-10"; // Asegúrate de poner la ruta correcta

describe("applyOperation function tests", () => {
    test("applyOperation(3, 8, (x, y) => x + y) returns 11", () => {
        expect(applyOperation(3, 8, (x, y) => x + y)).toBe(11);  // Suma
    });

    test("applyOperation(3, 8, (x, y) => x - y) returns -5", () => {
        expect(applyOperation(3, 8, (x, y) => x - y)).toBe(-5); // Resta
    });

    test("applyOperation(3, 8, (x, y) => x * y) returns 24", () => {
        expect(applyOperation(3, 8, (x, y) => x * y)).toBe(24); // Multiplicación
    });

    test("applyOperation(3, 8, (x, y) => x / y) returns 0.375", () => {
        expect(applyOperation(3, 8, (x, y) => x / y)).toBe(0.375); // División
    });
});

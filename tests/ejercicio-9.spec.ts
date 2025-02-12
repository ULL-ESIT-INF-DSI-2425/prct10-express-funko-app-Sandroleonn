import { describe, expect, test } from "vitest";
import { addRational, subRational, multRational, divRational } from "../src/ejercicio-9"; // Asegúrate de poner la ruta correcta

describe("Rational Number Operations Tests", () => {
    
    // Test para la función addRational
    test("addRational('1', '4', '1', '2') returns '3/4'", () => {
        expect(addRational('1', '4', '1', '2')).toBe("3/4"); // Sumar 1/4 + 1/2
    });

    test("addRational(1, 4, 1, 2) returns 0.75", () => {
        expect(addRational(1, 4, 1, 2)).toBe(0.75); // Sumar 1/4 + 1/2
    });

    // Test para la función subRational
    test("subRational('1', '4', '1', '2') returns '-1/4'", () => {
        expect(subRational('1', '4', '1', '2')).toBe("-1/4"); // Restar 1/4 - 1/2
    });

    test("subRational(1, 4, 1, 2) returns -0.25", () => {
        expect(subRational(1, 4, 1, 2)).toBe(-0.25); // Restar 1/4 - 1/2
    });

    // Test para la función multRational
    test("multRational('1', '4', '1', '2') returns '1/8'", () => {
        expect(multRational('1', '4', '1', '2')).toBe("1/8"); // Multiplicar 1/4 * 1/2
    });

    test("multRational(1, 4, 1, 2) returns 0.125", () => {
        expect(multRational(1, 4, 1, 2)).toBe(0.125); // Multiplicar 1/4 * 1/2
    });

    // Test para la función divRational
    test("divRational('1', '4', '1', '2') returns '1/2'", () => {
        expect(divRational('1', '4', '1', '2')).toBe("1/2"); // Dividir 1/4 / 1/2
    });

    test("divRational(1, 4, 1, 2) returns 0.5", () => {
        expect(divRational(1, 4, 1, 2)).toBe(0.5); // Dividir 1/4 / 1/2
    });

    // Casos con denominadores cero o entradas inválidas
    test("addRational('1', '0', '1', '2') returns undefined", () => {
        expect(addRational('1', '0', '1', '2')).toBeUndefined(); // Denominador cero
    });

    test("subRational('1', '4', 'a', '2') returns undefined", () => {
        expect(subRational('1', '4', 'a', '2')).toBeUndefined(); // Entrada no válida
    });

    test("multRational(1, 4, 'a', '2') returns undefined", () => {
        expect(multRational(1, 4, 0, 2)).toBeUndefined(); // Entrada no válida
    });

    test("divRational(1, 4, 0, 2) returns undefined", () => {
        expect(divRational(1, 4, 0, 2)).toBeUndefined(); // Denominador cero
    });
});

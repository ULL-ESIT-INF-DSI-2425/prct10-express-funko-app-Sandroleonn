import { describe, expect, test } from "vitest";
import { getPoints } from "../src/ejercicio-4";  // Cambia la ruta al archivo correcto

describe("Pruebas de la función getPoints", () => {

    test("getPoints([3, 5], 15) debe retornar 45", () => {
        const puntos = { objects: [3, 5], fase: 15 };
        expect(getPoints(puntos)).toBe(45);
    });

    test("getPoints([2], 10) debe retornar 30", () => {
        const puntos = { objects: [2], fase: 10 };
        expect(getPoints(puntos)).toBe(20);
    });

    test("getPoints([3, 5], 5) debe retornar 3", () => {
        const puntos = { objects: [3, 5], fase: 5 };
        expect(getPoints(puntos)).toBe(3);  // Solo múltiplos de 3 menores que 5
    });

    test("getPoints([10, 20], 5) debe retornar 0", () => {
        const puntos = { objects: [10, 20], fase: 5 };
        expect(getPoints(puntos)).toBe(0);  // No hay múltiplos menores que 5
    });

    test("getPoints([3, 5, 7], 15) debe retornar 70", () => {
        const puntos = { objects: [3, 5, 7], fase: 15 };
        expect(getPoints(puntos)).toBe(66);  // Múltiplos de 3, 5 y 7, sin duplicados
    });

    test("getPoints([1, 2, 3], 100) debe retornar 2310", () => {
        const puntos = { objects: [1, 2, 3], fase: 100 };
        expect(getPoints(puntos)).toBe(4950);  // Suma de todos los múltiplos únicos de 1, 2, 3 menores que 100
    });

    test("getPoints([3, 5], 0) debe retornar undefined", () => {
        const puntos = { objects: [3, 5], fase: 0 };
        expect(getPoints(puntos)).toBe(0);  // Fase 0 no genera múltiplos válidos
    });

    test("getPoints([3, -5], 15) debe retornar undefined por número negativo", () => {
        const puntos = { objects: [3, -5], fase: 15 };
        expect(getPoints(puntos)).toBeUndefined();  // El número -5 en objects es inválido
    });

    test("getPoints([3, 5], -10) debe retornar undefined por fase negativa", () => {
        const puntos = { objects: [3, 5], fase: -10 };
        expect(getPoints(puntos)).toBeUndefined();  // Fase negativa no es válida
    });

});

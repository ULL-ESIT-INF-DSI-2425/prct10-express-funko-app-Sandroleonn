import { describe, expect, test } from "vitest";
import { getScore } from "../src/ejercicio-3"; // Asegúrate de que la ruta es correcta

describe("getScore function tests", () => {
    test("getScore([]) returns an empty array", () => {
        expect(getScore([])).toEqual([]);
    });

    test("getScore(['kilo', 'almendras', 'llano', 'wenceslao', 'ratón']) returns correct scores", () => {
        expect(getScore(['kilo', 'almendras', 'llano', 'wenceslao', 'ratón'])).toEqual([undefined, 12, 11, undefined, 5]);
    });

    test("getScore(['chico', 'zapato']) returns correct scores for 'chico' and 'zapato'", () => {
        expect(getScore(['chico', 'zapato'])).toEqual([10, 17]); // 'chico' -> 13, 'zapato' -> 7
    });

    test("getScore(['mesa', 'ratón']) returns correct scores for valid words", () => {
        expect(getScore(['mesa', 'ratón'])).toEqual([6, 5]);
    });

    test("getScore(['café', 'pescado']) returns correct scores with accent replacements", () => {
        expect(getScore(['café', 'pescado'])).toEqual([9, 12]); // 'café' -> 'cafe' -> 6, 'pescado' -> 8
    });

    test("getScore(['wenceslao', 'kilo']) returns 'undefined' for invalid words", () => {
        expect(getScore(['wenceslao', 'kilo'])).toEqual([undefined, undefined]); // 'wenceslao' contains 'w', 'kilo' contains 'k'
    });
});

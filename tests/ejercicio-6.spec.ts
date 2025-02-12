import { describe, expect, test } from "vitest";
import { romanToDecimal, decimalToRoman } from "../src/ejercicio-6"; // Ajusta la ruta según la ubicación de tus funciones

describe("romanToDecimal function tests", () => {
    test('romanToDecimal("MCMXCV") returns 1995', () => {
        expect(romanToDecimal("MCMXCV")).toBe(1995);
    });

    test('romanToDecimal("MMXIV") returns 2014', () => {
        expect(romanToDecimal("MMXIV")).toBe(2014);
    });

    test('romanToDecimal("XIIII") returns undefined', () => {
        expect(romanToDecimal("XIIII")).toBeUndefined();
    });

    test('romanToDecimal("invalid") returns undefined', () => {
        expect(romanToDecimal("invalid")).toBeUndefined();
    });

    test('romanToDecimal("MCMXC") returns 1990', () => {
        expect(romanToDecimal("MCMXC")).toBe(1990);
    });
});

describe("decimalToRoman function tests", () => {
    test('decimalToRoman(1995) returns "MCMXCV"', () => {
        expect(decimalToRoman(1995)).toBe("MCMXCV");
    });

    test('decimalToRoman(2014) returns "MMXIV"', () => {
        expect(decimalToRoman(2014)).toBe("MMXIV");
    });

    test('decimalToRoman(-1995) returns undefined', () => {
        expect(decimalToRoman(-1995)).toBeUndefined();
    });

    test('decimalToRoman(0) returns undefined', () => {
        expect(decimalToRoman(0)).toBeUndefined();
    });

    test('decimalToRoman(1) returns "I"', () => {
        expect(decimalToRoman(1)).toBe("I");
    });
});

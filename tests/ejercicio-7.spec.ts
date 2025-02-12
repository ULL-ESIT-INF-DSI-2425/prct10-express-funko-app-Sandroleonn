import { describe, expect, test } from "vitest";
import { getTypeTriangle } from "../src/ejercicio-7";

describe("getTypeTriangle function tests", () => {
    test("getTypeTriangle(7, 7, 7) returns 'Equilátero'", () => {
        expect(getTypeTriangle(7, 7, 7)).toBe("Equilátero");
    });

    test("getTypeTriangle(5, 5, 9.5) returns 'Isósceles'", () => {
        expect(getTypeTriangle(5, 5, 9.5)).toBe("Isósceles");
    });

    test("getTypeTriangle(5, 6, 7) returns 'Escaleno'", () => {
        expect(getTypeTriangle(5, 6, 7)).toBe("Escaleno");
    });

    test("getTypeTriangle(3, 1, 1) returns undefined", () => {
        expect(getTypeTriangle(3, 1, 1)).toBeUndefined();
    });

    test("getTypeTriangle(-3, 1, 1) returns undefined", () => {
        expect(getTypeTriangle(-3, 1, 1)).toBeUndefined();
    });

    test("getTypeTriangle(0, 1, 1) returns undefined", () => {
        expect(getTypeTriangle(0, 1, 1)).toBeUndefined();
    });

    test("getTypeTriangle(1, 1, 1) returns 'Equilátero'", () => {
        expect(getTypeTriangle(1, 1, 1)).toBe("Equilátero");
    });

    test("getTypeTriangle(2, 3, 6) returns undefined", () => {
        expect(getTypeTriangle(2, 3, 6)).toBeUndefined();
    });
});

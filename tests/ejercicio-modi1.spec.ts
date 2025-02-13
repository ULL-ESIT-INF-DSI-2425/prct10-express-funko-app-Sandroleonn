import { describe, expect, test } from "vitest";
import { isPalindrome } from "../src/ejercicio-modi1"; // Asegúrate de poner la ruta correcta

describe("isPalindrome function tests", () => {
    test("isPalindrome('363') returns 'true'", () => {
        expect(isPalindrome('363')).toBe("true"); // Caso con una tripleta válida
    });
});
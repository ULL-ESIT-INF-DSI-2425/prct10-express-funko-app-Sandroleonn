import { describe, expect, test } from "vitest";
import { getTriplets } from "../src/ejercicio-5"; // Asegúrate de poner la ruta correcta

describe("getTriplets function tests", () => {
    test("getTriplets(1000) returns '(200, 375, 425)'", () => {
        expect(getTriplets(1000)).toBe("(200, 375, 425)"); // Caso con una tripleta válida
    });

    test("getTriplets(-153) returns undefined", () => {
        expect(getTriplets(-153)).toBeUndefined(); // Caso con un número negativo
    });

    test("getTriplets(3) returns undefined", () => {
        expect(getTriplets(3)).toBeUndefined(); // Caso con un número pequeño sin tripletas válidas
    });
});


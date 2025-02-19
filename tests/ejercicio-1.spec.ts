import { describe, expect, test } from "vitest";
import { add, sub, prod, conj, abs } from "../src/ejercicio-1";
import type { NumeroComplejo } from "../src/ejercicio-1";

describe("Funciones de números complejos", () => {
    const complejo1: NumeroComplejo = { real: 3, imaginario: 4 };
    const complejo2: NumeroComplejo = { real: 1, imaginario: -2 };

    test("add(complejo1, complejo2) retorna { real: 4, imaginario: 2 }", () => {
        expect(add(complejo1, complejo2)).toEqual({ real: 4, imaginario: 2 });
    });

    test("sub(complejo1, complejo2) retorna { real: 2, imaginario: 6 }", () => {
        expect(sub(complejo1, complejo2)).toEqual({ real: 2, imaginario: 6 });
    });

    test("prod(complejo1, 2) retorna { real: 6, imaginario: 8 }", () => {
        expect(prod(complejo1, 2)).toEqual({ real: 6, imaginario: 8 });
    });

    test("conj(complejo1) retorna { real: 3, imaginario: -4 }", () => {
        expect(conj(complejo1)).toEqual({ real: 3, imaginario: -4 });
    });

    test("abs(complejo1) retorna 5", () => {
        expect(abs(complejo1)).toBe(5);
    });
});

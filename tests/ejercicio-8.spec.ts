import { describe, expect, test } from "vitest";
import { squareEncoding } from "../src/ejercicio-8"; // Ajusta la ruta a tu archivo

describe("squareEncoding function tests", () => {
    test("squareEncoding('A Eduardo, el profesor de Desarrollo de Sistemas Informáticos, no le gusta el plagio.') returns 'aldlemlp epelmael drdoatga uoedsiug afseicsi reasnoto dsrifsa  oorsone  erotrol '", () => {
        const inputText = "A Eduardo, el profesor de Desarrollo de Sistemas Informáticos, no le gusta el plagio.";
        const expectedOutput = "aldlemlp epelmael drdoatga uoedsiug afseicsi reasnoto dsrifsa  oorsone  erotrol ";
        expect(squareEncoding(inputText)).toBe(expectedOutput);
    });
});

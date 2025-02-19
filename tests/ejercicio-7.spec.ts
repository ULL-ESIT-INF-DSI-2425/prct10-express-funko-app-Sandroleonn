import { describe, expect, test } from "vitest";
import { checkAttack } from "../src/ejercicio-7";
import type { ChessBoard } from "../src/ejercicio-7";

describe("checkAttack function tests", () => {
    test("Reinas en la misma fila pueden atacarse", () => {
        const board: ChessBoard = [
            ["-", "-", "-", "-", "-", "-", "-", "-"],
            ["-", "N", "-", "B", "-", "-", "-", "-"],
            ["-", "-", "-", "-", "-", "-", "-", "-"],
            ["-", "-", "-", "-", "-", "-", "-", "-"],
            ["-", "-", "-", "-", "-", "-", "-", "-"],
            ["-", "-", "-", "-", "-", "-", "-", "-"],
            ["-", "-", "-", "-", "-", "-", "-", "-"],
            ["-", "-", "-", "-", "-", "-", "-", "-"],
        ];
        expect(checkAttack(board)).toBe(true);
    });

    test("Reinas en la misma columna pueden atacarse", () => {
        const board: ChessBoard = [
            ["-", "-", "-", "-", "-", "-", "-", "-"],
            ["-", "-", "-", "N", "-", "-", "-", "-"],
            ["-", "-", "-", "-", "-", "-", "-", "-"],
            ["-", "-", "-", "B", "-", "-", "-", "-"],
            ["-", "-", "-", "-", "-", "-", "-", "-"],
            ["-", "-", "-", "-", "-", "-", "-", "-"],
            ["-", "-", "-", "-", "-", "-", "-", "-"],
            ["-", "-", "-", "-", "-", "-", "-", "-"],
        ];
        expect(checkAttack(board)).toBe(true);
    });

    test("Reinas en la misma diagonal pueden atacarse", () => {
        const board: ChessBoard = [
            ["-", "-", "-", "N", "-", "-", "-", "-"],
            ["-", "-", "-", "-", "B", "-", "-", "-"],
            ["-", "-", "-", "-", "-", "-", "-", "-"],
            ["-", "-", "-", "-", "-", "-", "-", "-"],
            ["-", "-", "-", "-", "-", "-", "-", "-"],
            ["-", "-", "-", "-", "-", "-", "-", "-"],
            ["-", "-", "-", "-", "-", "-", "-", "-"],
            ["-", "-", "-", "-", "-", "-", "-", "-"],
        ];
        expect(checkAttack(board)).toBe(true);
    });

    test("Reinas en posiciones seguras no pueden atacarse", () => {
        const board: ChessBoard = [
            ["-", "-", "-", "-", "-", "-", "-", "-"],
            ["-", "-", "-", "N", "-", "-", "-", "-"],
            ["-", "-", "-", "-", "-", "-", "-", "-"],
            ["-", "-", "-", "-", "-", "-", "-", "-"],
            ["-", "-", "-", "-", "-", "-", "-", "-"],
            ["-", "-", "-", "-", "B", "-", "-", "-"],
            ["-", "-", "-", "-", "-", "-", "-", "-"],
            ["-", "-", "-", "-", "-", "-", "-", "-"],
        ];
        expect(checkAttack(board)).toBe(false);
    });

    test("Tablero inválido devuelve undefined", () => {
        const invalidBoard = [
            ["-", "-", "-", "N", "-", "-", "-"], // Solo 7 columnas en esta fila
            ["-", "-", "-", "-", "B", "-", "-", "-"],
            ["-", "-", "-", "-", "-", "-", "-", "-"],
            ["-", "-", "-", "-", "-", "-", "-", "-"],
            ["-", "-", "-", "-", "-", "-", "-", "-"],
            ["-", "-", "-", "-", "-", "-", "-", "-"],
            ["-", "-", "-", "-", "-", "-", "-", "-"],
            ["-", "-", "-", "-", "-", "-", "-", "-"],
        ] as any; // Forzamos un tablero inválido para probar el comportamiento

        expect(checkAttack(invalidBoard)).toBeUndefined();
    });
});

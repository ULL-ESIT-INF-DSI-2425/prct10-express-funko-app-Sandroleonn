import { describe, expect, test } from "vitest";
import { Color, Carta, agregarCarta, buscarCartasPorColor } from "../src/ejercicio-2-modi";

const carta1: Carta[] = [1, 'Carta1', 'rojo', 5];
const carta2: Carta[] = [3, 'Carta2', 'rojo', 2];

let inventario: Carta[] = [];

describe("agregarCarta function tests", () => {
    test("Debe agregar una nueva carta al inventario", () => {
        agregarCarta(carta1);
        expect(inventario).toEqual([carta1]);
    });
});

describe("buscarCartasPorColor function tests", () => {
    test("Debe devolver las cartas del color 'rojo'", () => {
        agregarCarta(carta2);
        const resultado: Color = buscarCartasPorColor('Rojo');
        expect(resultado).toEqual([carta1, carta2]);
    });
});



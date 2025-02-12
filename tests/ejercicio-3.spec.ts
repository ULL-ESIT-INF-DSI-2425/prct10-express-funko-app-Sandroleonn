import { describe, expect, test } from "vitest";
import { fromIntToActions } from "../src/ejercicio-3";

describe("fromIntToActions function tests", () => {
    test("fromIntToActions(19) returns 'Parpadear, Parpadear dos veces, Saltar'", () => {
        expect(fromIntToActions(19)).toBe("Parpadear, Parpadear dos veces, Saltar");
    });

    test("fromIntToActions(10) returns 'Parpadear dos veces, Levantar las cejas'", () => {
        expect(fromIntToActions(10)).toBe("Parpadear dos veces, Levantar las cejas");
    });

    test("fromIntToActions(4) returns 'Mover la nariz'", () => {
        expect(fromIntToActions(4)).toBe("Mover la nariz");
    });

    test("fromIntToActions(0) returns undefined", () => {
        expect(fromIntToActions(0)).toBeUndefined();
    });

    test("fromIntToActions(32) returns undefined", () => {
        expect(fromIntToActions(32)).toBeUndefined();
    });

    test("fromIntToActions(1) returns 'Parpadear'", () => {
        expect(fromIntToActions(1)).toBe("Parpadear");
    });

    test("fromIntToActions(31) returns 'Parpadear, Parpadear dos veces, Mover la nariz, Levantar las cejas, Saltar'", () => {
        expect(fromIntToActions(31)).toBe("Parpadear, Parpadear dos veces, Mover la nariz, Levantar las cejas, Saltar");
    });

    test("fromIntToActions(16) returns 'Saltar'", () => {
        expect(fromIntToActions(16)).toBe("Saltar");
    });

    test("fromIntToActions(3) returns 'Parpadear, Parpadear dos veces'", () => {
        expect(fromIntToActions(3)).toBe("Parpadear, Parpadear dos veces");
    });
});

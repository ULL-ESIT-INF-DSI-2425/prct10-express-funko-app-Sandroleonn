import { describe, expect, test } from "vitest";
import { onePunch } from "../src/ejercicio-1";

describe("onePunch function tests", () => {
    test("onePunch('Beard', 'Jeans', 'Hairbrush', 'Knuckleduster', 'Sand') returns 'Brd Hirbrush Jns Knuckldustr Snd'", () => {
        expect(onePunch('Beard', 'Jeans', 'Hairbrush', 'Knuckleduster', 'Sand')).toBe('Brd Hirbrush Jns Knuckldustr Snd');
    });

    test("onePunch('Sock', 'Beard', 'Vest', 'Lady', 'Sage') returns 'Brd Ldy Sg Sock Vst'", () => {
        expect(onePunch('Sock', 'Beard', 'Vest', 'Lady', 'Sage')).toBe('Brd Ldy Sg Sock Vst');
    });

    test("onePunch('Beard', 'Sack', 'Gun', 'Parachute', 'Face-Kicking-Shoes') returns 'Brd Fc-Kicking-Shos Gun Prchut Sck'", () => {
        expect(onePunch('Beard', 'Sack', 'Gun', 'Parachute', 'Face-Kicking-Shoes')).toBe('Brd Fc-Kicking-Shos Gun Prchut Sck');
    });

    test("onePunch() returns 'Broken!'", () => {
        expect(onePunch()).toBe('Broken!');
    });

    test("onePunch('') returns 'Broken!'", () => {
        expect(onePunch('')).toBe('Broken!');
    });

    test("onePunch('', '') returns 'Broken!'", () => {
        expect(onePunch('', '')).toBe('Broken!');
    });
});


import { describe, expect, test } from "vitest";
import { checkCreditCard } from "../src/ejercicio-2";

describe("checkCreditCard function tests", () => {
    test("Valid credit card with spaces returns 'valid'", () => {
        expect(checkCreditCard("4539 3195 0343 6467")).toBe("valid");
    });

    test("Valid credit card as number returns 'valid'", () => {
        expect(checkCreditCard(4539319503436467)).toBe("valid");
    });

    test("Invalid credit card returns 'notValid'", () => {
        expect(checkCreditCard("8273 1232 7352 0569")).toBe("notValid");
    });

    test("Invalid credit card as number returns 'notValid'", () => {
        expect(checkCreditCard(8273123273520569)).toBe("notValid");
    });

    test("Credit card with extra digits returns undefined", () => {
        expect(checkCreditCard("8273 1232 7352 0569 0123")).toBeUndefined();
    });

    test("Credit card with too few digits returns undefined", () => {
        expect(checkCreditCard("8273 0569")).toBeUndefined();
    });

    test("Credit card without spaces but too short returns undefined", () => {
        expect(checkCreditCard("82730569")).toBeUndefined();
    });

    test("Credit card with non-numeric characters returns undefined", () => {
        expect(checkCreditCard("4539 3195 0343 abcd")).toBeUndefined();
    });

    test("Empty input returns undefined", () => {
        expect(checkCreditCard("")).toBeUndefined();
    });

    test("Non-numeric string returns undefined", () => {
        expect(checkCreditCard("abcd efgh ijkl mnop")).toBeUndefined();
    });

    test("Credit card with only spaces returns undefined", () => {
        expect(checkCreditCard("    ")).toBeUndefined();
    });
});
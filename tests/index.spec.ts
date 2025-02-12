import { describe, expect, test } from "vitest";
import { add } from "../src/index";

describe("add function tests", () => {
    test("add(1, 8) returns the value 9", () => {
        expect(add(1, 8)).toBe(9);
    });

    test("add(-9, 7) returns the value -2", () => {
        expect(add(-9, 7)).toBe(-2);
    })
});
import { describe, expect, test } from "vitest";
import { myMap } from "../src/ejercicio-6";

describe("myMap function tests", () => {
    test("myMap([0, 1, 2, 3, 4], (item) => item * item) returns [0, 1, 4, 9, 16]", () => {
        expect(myMap([0, 1, 2, 3, 4], (item) => item * item)).toEqual([0, 1, 4, 9, 16]);
    });

    test("myMap(['a', 'b', 'c'], (item) => item.toUpperCase()) returns ['A', 'B', 'C']", () => {
        expect(myMap(['a', 'b', 'c'], (item) => item.toUpperCase())).toEqual(['A', 'B', 'C']);
    });

    test("myMap([true, false, true], (item) => !item) returns [false, true, false]", () => {
        expect(myMap([true, false, true], (item) => !item)).toEqual([false, true, false]);
    });

    test("myMap([{ id: 1 }, { id: 2 }], (obj) => obj.id * 10) returns [10, 20]", () => {
        expect(myMap([{ id: 1 }, { id: 2 }], (obj) => obj.id * 10)).toEqual([10, 20]);
    });

    test("myMap([], (item) => item) returns []", () => {
        expect(myMap([], (item) => item)).toEqual([]);
    });
});

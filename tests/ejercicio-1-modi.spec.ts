import { describe, expect, test } from "vitest";
import { encodeMessage, decodeMessage } from "../src/ejercicio-1-modi";

describe("encodeMessage function tests", () => {
    test("encodeMessage(`abcdefghijklmnopqrstuvwxyz`) returns the value [ 'zyxwv', 'utsrq', 'ponml', 'kjihg', 'fedcb', 'a' ]", () => {
        expect(encodeMessage("abcdefghijklmnopqrstuvwxyz")).toEqual([ 'zyxwv', 'utsrq', 'ponml', 'kjihg', 'fedcb', 'a' ]);
    });

    test("encodeMessage(abcdefghijklm678nopqrstuvwxyz) returns the value undefined", () => {
        expect(encodeMessage("abcdefghijklm678ñnopqrstuvwxy")).toBeUndefined();
    })
    test("encodeMessage(`abcdefghijklmnopqrstuvwxyz`) returns the value [ 'zyxwv', 'utsrq', 'ponml', 'kjihg', 'fedcb', 'a' ]", () => {
        expect(decodeMessage(['zyxwv', 'utsrq', 'ponml', 'kjihg', 'fedcb', 'edcba' ])).toEqual("abcdebcdefghijklmnopqrstuvwxyz");
    });

    test("encodeMessage(abcdefghijklm678nopqrstuvwxyz) returns the value undefined", () => {
        expect(decodeMessage(['zyxwv', 'utsrq', 'ponml', 'kjihg', 'fedcb', 'e' ])).toBeUndefined();
    })
});

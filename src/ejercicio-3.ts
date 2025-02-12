/**
 * Converts a number to a sequence of actions based on its binary representation.
 * The function maps binary digits to specific actions from a predefined list.
 * If the number is outside the valid range (less than 1 or greater than 31), it returns `undefined`.
 * @param signs - A number between 1 and 31 representing a series of binary-encoded actions.
 * @returns - A string with a list of actions based on the binary representation of `signs`, or `undefined` if the number is invalid.
 * ```typescript
 * fromIntToActions(5)   = 'Parpadear, Mover la nariz, Saltar'
 * fromIntToActions(18)  = 'Parpadear dos veces, Levantar las cejas'
 * fromIntToActions(0)   = undefined
 * fromIntToActions(32)  = undefined
 * ```
 */
export function fromIntToActions(signs: number): string | undefined {
    if (signs < 1 || signs > 31) {
        return undefined;
    }
    let binary = "";
    while (signs > 0) {
        binary = (signs % 2) + binary;
        signs = Math.floor(signs / 2);
    }
    const actions = ["Parpadear", "Parpadear dos veces", "Mover la nariz", "Levantar las cejas", "Saltar"];
    let result: string[] = [];
    let reversedBinary = binary.split("").reverse().join("");
    for (let i = 0; i < reversedBinary.length; i++) {
        if (reversedBinary[i] === "1") {
            result.push(actions[i]);
        }
    }

    return result.join(", ");
}
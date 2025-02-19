export type Colours = [string, number];

export const ColoursCombinations: Colours[] = [
    ["Negro", 0],
    ["Marrón", 1],
    ["Rojo", 2],
    ["Naranja", 3],
    ["Amarillo", 4],
    ["Verde", 5],
    ["Azul", 6],
    ["Violeta", 7],
    ["Gris", 8],
    ["Blanco", 9]
];

/**
 * Decode the value of a resistor based on its color bands.
 * @param colours - An array of color names representing the resistor bands.
 * @returns - The numerical value of the resistor or an error message if invalid input is provided.
 * ```typescript
 * decodeResistor(["red", "blue"]) 
 * // Returns the corresponding resistor value
 * 
 * decodeResistor(["green"]) 
 * // Returns "Se requieren al menos dos colores para decodificar la resistencia."
 * 
 * decodeResistor(["black", "invalidColor"]) 
 * // Returns "Uno o más colores no son válidos."
 * ```
 */
export function decodeResistor(colours: string[]): number | string {
    if (colours.length < 2) {
        return "Se requieren al menos dos colores para decodificar la resistencia.";
    }
    const firstColor: string = colours[0];
    const secondColor: string = colours[1];

    const first = ColoursCombinations.find(([color]) => color === firstColor);
    const second = ColoursCombinations.find(([color]) => color === secondColor);

    if (!first || !second) {
        return "Uno o más colores no son válidos.";
    }

    const [, firstValue] = first;
    const [, secondValue] = second;

    return firstValue * 10 + secondValue;
}





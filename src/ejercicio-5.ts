/**
 * Finds all Pythagorean triplets for a given number.
 * A Pythagorean triplet consists of three positive integers `a`, `b`, and `c`, such that:
 * - a² + b² = c²
 * The function returns all valid triplets where the sum of `a`, `b`, and `c` is equal to the given number.
 * If no valid triplets are found or the input number is invalid, the function returns `undefined`.
 * @param numero - A positive integer to find Pythagorean triplets whose sum equals this number.
 * @returns - A string containing all the found triplets in the format '(a, b, c)', separated by semicolons, or `undefined` if no valid triplets are found or the input is invalid.
 * ```typescript
 * getTriplets(12) = '(3, 4, 5)'
 * getTriplets(1000) = '(200, 375, 425); (375, 500, 625); (200, 399, 401)'
 * getTriplets(5) = undefined
 * getTriplets(0) = undefined
 * getTriplets(-1) = undefined
 * ```
 */
export function getTriplets(numero: number): string | undefined {
    if (numero <= 0 || !Number.isInteger(numero)) {
        return undefined;
    }
    let triplets: string[] = [];
    for (let a = 1; a < numero; a++) {
        for (let b = a + 1; b < numero; b++) {
            let c = numero - a - b; // c es determinado por la suma total N
            if (c > b && a * a + b * b === c * c) { // Verificamos la propiedad de Pitágoras
                triplets.push(`(${a}, ${b}, ${c})`);
            }
        }
    }

    // Si encontramos tripletas, las retornamos en el formato adecuado
    return triplets.length > 0 ? triplets.join('; ') : undefined;
}
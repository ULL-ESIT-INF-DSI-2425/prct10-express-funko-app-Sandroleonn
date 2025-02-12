/**
 * Determines the type of a triangle based on the lengths of its sides.
 * The function checks if the provided side lengths form a valid triangle and classifies it as one of three types:
 * 1. "Equilátero" (All sides equal)
 * 2. "Isósceles" (Two sides equal)
 * 3. "Escaleno" (All sides different)
 * If the side lengths do not form a valid triangle, the function returns `undefined`.
 * 
 * The validity of the triangle is checked using the triangle inequality theorem, which states that the sum of the lengths of any two sides must be greater than the length of the remaining side.
 * 
 * @param lado1 - The length of the first side of the triangle.
 * @param lado2 - The length of the second side of the triangle.
 * @param lado3 - The length of the third side of the triangle.
 * @returns - A string representing the type of the triangle: "Equilátero", "Isósceles", or "Escaleno", or `undefined` if the input does not form a valid triangle.
 * 
 * ```typescript
 * getTypeTriangle(3, 3, 3) = "Equilátero"
 * getTypeTriangle(3, 4, 5) = "Escaleno"
 * getTypeTriangle(4, 4, 5) = "Isósceles"
 * getTypeTriangle(1, 1, 2) = undefined
 * ```
 */
export function getTypeTriangle(lado1: number, lado2: number, lado3: number): string | undefined {
    if (lado1 <= 0 || lado2 <= 0 || lado3 <= 0 || lado1 + lado2 <= lado3 || lado2 + lado3 <= lado1 || lado1 + lado3 <= lado2) {
        return undefined;
    }
    else if (lado1 == lado2 && lado1 == lado3 && lado2 == lado3) {
        return "Equilátero";
    }
    else if (lado1 == lado2 || lado1 == lado3 || lado2 == lado3) {
        return "Isósceles";
    }
    else {
        return "Escaleno";
    }
}
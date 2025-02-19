export type Points = { objects: number[], fase: number };

/**
 * Calculate the sum of unique multiples of collected objects up to the completed phase.
 * @param puntos - An object containing:
 *   - `objects`: An array of numbers representing collected objects.
 *   - `fase`: A number representing the completed phase.
 * @returns - The sum of unique multiples of the objects up to `fase`, or `undefined` if any value is negative.
 * ```typescript
 * getPoints({ objects: [3, 5], fase: 10 }) 
 * // Returns 23 (3, 5, 6, 9 multiples combined and summed)
 * 
 * getPoints({ objects: [1, 2, 3], fase: 6 }) 
 * // Returns 8 (1, 2, 3, 4, 5 combined and summed)
 * 
 * getPoints({ objects: [-1, 2], fase: 10 }) 
 * // Returns undefined (invalid input)
 * ```
 */
export function getPoints(puntos: Points): number | undefined {
    for (let i = 0; i < puntos.objects.length; i++) {
        if (puntos.objects[i] < 0) {
            return undefined;
        }
    }
    if (puntos.fase < 0) {
        return undefined;
    }

    let multiplesLists: number[][] = [];
    for (const obj of puntos.objects) {
        let multiples: number[] = [];

        for (let i = obj; i < puntos.fase; i += obj) {
            multiples.push(i);
        }

        multiplesLists.push(multiples);
    }

    let allMultiples = multiplesLists.flat();

    const uniqueMultiples = [...new Set(allMultiples)];

    const sum = uniqueMultiples.reduce((acc, val) => acc + val, 0);

    return sum;
}

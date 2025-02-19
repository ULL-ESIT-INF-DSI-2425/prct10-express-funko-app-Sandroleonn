/**
 * Creates a new array populated with the results of calling a provided function on every element in the given array.
 * @param array - The array to iterate over.
 * @param callback - A function to be executed on each element in the array. It receives three arguments:
 *   - `item`: The current element being processed.
 *   - `index`: The index of the current element being processed.
 *   - `arr`: The original array being processed.
 * @returns - A new array with the results of applying the `callback` function to each element of the input array.
 * ```typescript
 * myMap([1, 2, 3], (item) => item * 2)
 * // Returns [2, 4, 6]
 * 
 * myMap(['a', 'b', 'c'], (item) => item.toUpperCase())
 * // Returns ['A', 'B', 'C']
 * ```
 */
export function myMap<T, U>(array: T[], callback: (item: T, index: number, arr: T[]) => U): U[] {
    let result: U[] = [];
    
    for (let i = 0; i < array.length; i++) {
        result.push(callback(array[i], i, array));
    }

    return result;
}


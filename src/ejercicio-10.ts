/**
 * Converts an array of consecutive numbers into a string representing ranges.
 * @param lista - The array of numbers to be converted into ranges.
 * @returns - A string representing the ranges, with individual numbers or ranges separated by commas.
 * 
 * ```typescript
 * fromArrayToRanges([1, 2, 3, 5, 6, 7, 10]) // Returns '1_3, 5_7, 10'
 * fromArrayToRanges([1, 3, 5, 7, 8, 9, 10]) // Returns '1, 3, 5, 7_10'
 * fromArrayToRanges([]) // Returns ''
 * ```
 */
export function fromArrayToRanges(lista: number[]): string {
    if (lista.length === 0) {
        return "";
    }
    let result: string[] = [];
    let start = lista[0];
    let end = lista[0];

    for (let i = 1; i < lista.length; i++) {
        if (lista[i] === end + 1) {
            end = lista[i];
        }
        else {
            if (start === end) {
                result.push(`${start}`);
            }
            else {
                result.push(`${start}_${end}`)
            }
            start = lista[i];
            end = lista[i];
        }
    }
    if (start === end) {
        result.push(`${start}`);
    } else {
        result.push(`${start}_${end}`);
    }

    return result.join(", ");
}


/**
 * Converts a string representing ranges into an array of numbers.
 * @param rangos - A string representing ranges or individual numbers, with ranges separated by commas and using "_" to indicate a range.
 * @returns - An array of numbers corresponding to the ranges or individual numbers in the input string.
 * 
 * ```typescript
 * fromRangesToArray('1_3, 5_7, 10') // Returns [1, 2, 3, 5, 6, 7, 10]
 * fromRangesToArray('1, 3, 5, 7_10') // Returns [1, 3, 5, 7, 8, 9, 10]
 * fromRangesToArray('4_6, 8') // Returns [4, 5, 6, 8]
 * ```
 */
export function fromRangesToArray(rangos: string): number[] {
    const resultado: number[] = [];
    const partes = rangos.split(','); 
    
    for (const parte of partes) {
        if (parte.includes('_')) {
            const [start, end] = parte.split('_').map(Number); 
            for (let i = start; i <= end; i++) {
                resultado.push(i); 
            }
        } else {
            resultado.push(Number(parte));
        }
    }
    
    return resultado;
}


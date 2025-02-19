/**
 * Appends all elements of `lista2` to `lista1`.
 * @param lista1 - The first list (either of numbers or strings) to which the elements of `lista2` will be added.
 * @param lista2 - The second list (either of numbers or strings) whose elements will be appended to `lista1`.
 * @returns - A new list containing all elements from `lista1` followed by all elements from `lista2`.
 * 
 * ```typescript
 * append([1, 2], [3, 4]) // Returns [1, 2, 3, 4]
 * append(['a', 'b'], ['c', 'd']) // Returns ['a', 'b', 'c', 'd']
 * ```
 */
export function append(lista1: number[] | string[], lista2: number[] | string[]): number[] | string[] {
    let i = 0;
    while (i < lista2.length) {
        lista1[lista1.length] = lista2[i];
        i++;
    }
    return lista1;
}

/**
 * Concatenates multiple lists (arrays) into a single list (array).
 * @param listas - One or more arrays (of either numbers or strings) to be concatenated.
 * @returns - A single array that contains all elements of the input arrays, in order.
 * 
 * ```typescript
 * concatenate([1, 2], [3, 4], [5, 6]) // Returns [1, 2, 3, 4, 5, 6]
 * concatenate(['a', 'b'], ['c', 'd'], ['e', 'f']) // Returns ['a', 'b', 'c', 'd', 'e', 'f']
 * ```
 */
export function concatenate(...listas: number[][] | string[][]): (number | string)[] {
    return [].concat(...listas);
}


/**
 * Filters the elements of a list based on a predicate function.
 * @param lista - The list (array) of elements to be filtered.
 * @param pred - A predicate function that tests each element. If it returns `true`, the element is included in the result.
 * @returns - A new list containing only the elements that satisfy the predicate function.
 * 
 * ```typescript
 * filter([1, 2, 3, 4], (x) => x > 2) // Returns [3, 4]
 * filter(['apple', 'banana', 'cherry'], (x) => x.startsWith('b')) // Returns ['banana']
 * ```
 */
export function filter<T>(lista: T[], pred: (item: T) => boolean): T[] {
    const resultado: T[] = [];
    for (let i = 0; i < lista.length; i++) {
      if (pred(lista[i])) {
        resultado.push(lista[i]);
      }
    }
    return resultado;
}


/**
 * Calculates the length of a list (array).
 * @param lista - The list (array) whose length is to be calculated.
 * @returns - The number of elements in the list.
 * 
 * ```typescript
 * length([1, 2, 3]) // Returns 3
 * length(['a', 'b', 'c', 'd']) // Returns 4
 * ```
 */
export function length<T>(lista: T[]): number {
    let contador = 0;
    for (let i = 0; lista[i] !== undefined; i++) {
      contador++;
    }
    return contador;
}

/**
 * Transforms each element of the list using a given function.
 * @param lista - The list (array) of elements to be transformed.
 * @param func - A function that takes an element of the list and returns a transformed value.
 * @returns - A new list with the transformed elements.
 * 
 * ```typescript
 * map([1, 2, 3], (x) => x * 2) // Returns [2, 4, 6]
 * map(['apple', 'banana'], (x) => x.toUpperCase()) // Returns ['APPLE', 'BANANA']
 * ```
 */
export function map<T, U>(lista: T[], func: (item: T) => U): U[] {
    let resultado: U[] = [];
    for (let i = 0; i < lista.length; i++) {
        resultado = [...resultado, func(lista[i])];
    }
    return resultado;
}

/**
 * Reduces the list to a single value by applying a function that accumulates the result.
 * @param lista - The list (array) of elements to be reduced.
 * @param func - A function that takes the accumulator and an element, and returns the new accumulator.
 * @param accum - The initial value of the accumulator.
 * @returns - The final accumulated value after processing all elements in the list.
 * 
 * ```typescript
 * reduce([1, 2, 3], (acc, x) => acc + x, 0) // Returns 6
 * reduce([1, 2, 3], (acc, x) => acc * x, 1) // Returns 6
 * ```
 */
export function reduce<T, U>(lista: T[], func: (accum: U, item: T) => U, accum: U): U {
    for (let i = 0; i < lista.length; i++) {
        accum = func(accum, lista[i]);
    }
    return accum;
}

/**
 * Reverses the elements of the list (array).
 * @param lista - The list (array) to be reversed.
 * @returns - A new list with the elements in reverse order.
 * 
 * ```typescript
 * reverse([1, 2, 3]) // Returns [3, 2, 1]
 * reverse(['a', 'b', 'c']) // Returns ['c', 'b', 'a']
 * ```
 */
export function reverse<T>(lista: T[]): T[] {
    let resultado: T[] = [];
    let j = 0;
    for (let i = lista.length - 1; i >= 0; i--) {
        resultado[j] = lista[i];
        j++; 
    }
    return resultado;
}

  
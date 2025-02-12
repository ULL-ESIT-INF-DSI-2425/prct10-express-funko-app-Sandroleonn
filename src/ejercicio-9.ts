/**
 * Adds two fractions.
 * 
 * The function receives two fractions represented by numerators and denominators,
 * and returns their sum as a simplified fraction or as a number if the parameters
 * are of type `number`. If the parameters are of type `string`, the result is returned 
 * as a string.
 * 
 * The function performs the following operations:
 * - Converts `string` inputs to `number` if necessary.
 * - Adds the fractions using a common denominator.
 * - Simplifies the result using the greatest common divisor (GCD).
 * 
 * @param num1 - The numerator of the first fraction (can be of type `number` or `string`).
 * @param den1 - The denominator of the first fraction (can be of type `number` or `string`).
 * @param num2 - The numerator of the second fraction (can be of type `number` or `string`).
 * @param den2 - The denominator of the second fraction (can be of type `number` or `string`).
 * @returns - The result of the fraction addition as a number or string, or `undefined` if there is a conversion error or zero denominator.
 * 
 * ```typescript
 * addRational(1, 2, 1, 3) = 5/6
 * addRational("1", "2", "1", "3") = "5/6"
 * addRational(1, 3, 2, 3) = 1
 * addRational("2", "3", "1", "3") = "3/3"
 * ```
 */

// Sobrecarga de la función: se definen diferentes combinaciones de parámetros.
export function addRational(num1: number, den1: number, num2: number, den2: number): number;
export function addRational(num1: string, den1: string, num2: string, den2: string): string;
export function addRational(num1: number | string, den1: number | string, num2: number | string, den2: number | string): number | string | undefined {
    // Convertir todos los parámetros a números
    const n1 = typeof num1 === 'string' ? parseFloat(num1) : num1;
    const d1 = typeof den1 === 'string' ? parseFloat(den1) : den1;
    const n2 = typeof num2 === 'string' ? parseFloat(num2) : num2;
    const d2 = typeof den2 === 'string' ? parseFloat(den2) : den2;

    // Comprobamos si la conversión a número es válida
    if (isNaN(n1) || isNaN(d1) || isNaN(n2) || isNaN(d2) || d1 === 0 || d2 === 0) {
        return undefined;  // Retornamos undefined si hay un error de conversión o denominador cero
    }

    // Realizamos la suma de fracciones: (num1/den1) + (num2/den2)
    const numerator = (n1 * d2) + (n2 * d1);
    const denominator = d1 * d2;

    const divisor = mcd(numerator, denominator);
    let numSimplificado = numerator / divisor;
    let denSimplificado = denominator / divisor;

    if (denSimplificado < 0) {
        numSimplificado = -numSimplificado;
        denSimplificado = -denSimplificado;
    }

    // Dependiendo de los tipos de entrada, retornamos el resultado como número o cadena
    if (typeof num1 === 'string' || typeof num2 === 'string') {
        return `${numSimplificado}/${denSimplificado}`;  // Retornamos como cadena
    } else {
        return numerator / denominator;  // Retornamos como número
    }
}

/**
 * Subtracts two fractions.
 * 
 * The function receives two fractions represented by numerators and denominators,
 * and returns their difference as a simplified fraction or as a number if the parameters
 * are of type `number`. If the parameters are of type `string`, the result is returned 
 * as a string.
 * 
 * The function performs the following operations:
 * - Converts `string` inputs to `number` if necessary.
 * - Subtracts the fractions using a common denominator.
 * - Simplifies the result using the greatest common divisor (GCD).
 * 
 * @param num1 - The numerator of the first fraction (can be of type `number` or `string`).
 * @param den1 - The denominator of the first fraction (can be of type `number` or `string`).
 * @param num2 - The numerator of the second fraction (can be of type `number` or `string`).
 * @param den2 - The denominator of the second fraction (can be of type `number` or `string`).
 * @returns - The result of the fraction subtraction as a number or string, or `undefined` if there is a conversion error or zero denominator.
 * 
 * ```typescript
 * subRational(3, 4, 1, 2) = 1/4
 * subRational("3", "4", "1", "2") = "1/4"
 * subRational(5, 6, 2, 3) = 1/6
 * subRational("5", "6", "2", "3") = "1/6"
 * ```
 */

export function subRational(num1: number, den1: number, num2: number, den2: number): number;
export function subRational(num1: string, den1: string, num2: string, den2: string): string;
export function subRational(num1: number | string, den1: number | string, num2: number | string, den2: number | string): number | string | undefined {
    // Convertir todos los parámetros a números
    const n1 = typeof num1 === 'string' ? parseFloat(num1) : num1;
    const d1 = typeof den1 === 'string' ? parseFloat(den1) : den1;
    const n2 = typeof num2 === 'string' ? parseFloat(num2) : num2;
    const d2 = typeof den2 === 'string' ? parseFloat(den2) : den2;

    // Comprobamos si la conversión a número es válida
    if (isNaN(n1) || isNaN(d1) || isNaN(n2) || isNaN(d2) || d1 === 0 || d2 === 0) {
        return undefined;  // Retornamos undefined si hay un error de conversión o denominador cero
    }

    // Realizamos la suma de fracciones: (num1/den1) + (num2/den2)
    const numerator = (n1 * d2) - (n2 * d1);
    const denominator = d1 * d2;

    const divisor = mcd(numerator, denominator);
    let numSimplificado = numerator / divisor;
    let denSimplificado = denominator / divisor;

    if (denSimplificado < 0) {
        numSimplificado = -numSimplificado;
        denSimplificado = -denSimplificado;
    }
    // Dependiendo de los tipos de entrada, retornamos el resultado como número o cadena
    if (typeof num1 === 'string' || typeof num2 === 'string') {
        return `${numSimplificado}/${denSimplificado}`;  // Retornamos como cadena
    } else {
        return numerator / denominator;  // Retornamos como número
    }
}

/**
 * Multiplies two fractions.
 * 
 * The function receives two fractions represented by numerators and denominators,
 * and returns their product as a simplified fraction or as a number if the parameters
 * are of type `number`. If the parameters are of type `string`, the result is returned 
 * as a string.
 * 
 * The function performs the following operations:
 * - Converts `string` inputs to `number` if necessary.
 * - Multiplies the fractions.
 * - Simplifies the result using the greatest common divisor (GCD).
 * 
 * @param num1 - The numerator of the first fraction (can be of type `number` or `string`).
 * @param den1 - The denominator of the first fraction (can be of type `number` or `string`).
 * @param num2 - The numerator of the second fraction (can be of type `number` or `string`).
 * @param den2 - The denominator of the second fraction (can be of type `number` or `string`).
 * @returns - The result of the fraction multiplication as a number or string, or `undefined` if there is a conversion error or zero denominator.
 * 
 * ```typescript
 * multRational(2, 3, 3, 4) = 6/12
 * multRational("2", "3", "3", "4") = "6/12"
 * multRational(5, 6, 2, 3) = 10/18
 * multRational("5", "6", "2", "3") = "10/18"
 * ```
 */

export function multRational(num1: number, den1: number, num2: number, den2: number): number;
export function multRational(num1: string, den1: string, num2: string, den2: string): string;
export function multRational(num1: number | string, den1: number | string, num2: number | string, den2: number | string): number | string | undefined {
    // Convertir todos los parámetros a números
    const n1 = typeof num1 === 'string' ? parseFloat(num1) : num1;
    const d1 = typeof den1 === 'string' ? parseFloat(den1) : den1;
    const n2 = typeof num2 === 'string' ? parseFloat(num2) : num2;
    const d2 = typeof den2 === 'string' ? parseFloat(den2) : den2;

    // Comprobamos si la conversión a número es válida
    if (isNaN(n1) || isNaN(d1) || isNaN(n2) || isNaN(d2) || d1 === 0 || d2 === 0) {
        return undefined;  // Retornamos undefined si hay un error de conversión o denominador cero
    }

    // Realizamos la suma de fracciones: (num1/den1) + (num2/den2)
    const numerator = n1 * n2;
    const denominator = d1 * d2;

    if (numerator === 0 || denominator === 0) {
        return undefined;  // Devolvemos undefined para evitar resultados no válidos
    }

    const divisor = mcd(numerator, denominator);
    const numSimplificado = numerator / divisor;
    const denSimplificado = denominator / divisor;

    // Dependiendo de los tipos de entrada, retornamos el resultado como número o cadena
    if (typeof num1 === 'string' || typeof num2 === 'string') {
        return `${numSimplificado}/${denSimplificado}`;  // Retornamos como cadena
    } else {
        return numerator / denominator;  // Retornamos como número
    }
}

/**
 * Divides two fractions.
 * 
 * The function receives two fractions represented by numerators and denominators,
 * and returns their division as a simplified fraction or as a number if the parameters
 * are of type `number`. If the parameters are of type `string`, the result is returned 
 * as a string.
 * 
 * The function performs the following operations:
 * - Converts `string` inputs to `number` if necessary.
 * - Divides the fractions using the rule of inverting the second fraction.
 * - Simplifies the result using the greatest common divisor (GCD).
 * 
 * @param num1 - The numerator of the first fraction (can be of type `number` or `string`).
 * @param den1 - The denominator of the first fraction (can be of type `number` or `string`).
 * @param num2 - The numerator of the second fraction (can be of type `number` or `string`).
 * @param den2 - The denominator of the second fraction (can be of type `number` or `string`).
 * @returns - The result of the fraction division as a number or string, or `undefined` if there is a conversion error or zero denominator.
 * 
 * ```typescript
 * divRational(2, 3, 4, 5) = 10/12
 * divRational("2", "3", "4", "5") = "10/12"
 * divRational(7, 8, 1, 2) = 14/8
 * divRational("7", "8", "1", "2") = "14/8"
 * ```
 */

export function divRational(num1: number, den1: number, num2: number, den2: number): number;
export function divRational(num1: string, den1: string, num2: string, den2: string): string;
export function divRational(num1: number | string, den1: number | string, num2: number | string, den2: number | string): number | string | undefined {
    // Convertir todos los parámetros a números
    const n1 = typeof num1 === 'string' ? parseFloat(num1) : num1;
    const d1 = typeof den1 === 'string' ? parseFloat(den1) : den1;
    const n2 = typeof num2 === 'string' ? parseFloat(num2) : num2;
    const d2 = typeof den2 === 'string' ? parseFloat(den2) : den2;

    // Comprobamos si la conversión a número es válida
    if (isNaN(n1) || isNaN(d1) || isNaN(n2) || isNaN(d2) || d1 === 0 || d2 === 0) {
        return undefined;  // Retornamos undefined si hay un error de conversión o denominador cero
    }

    if (n2 === 0) {
        return undefined; // No se puede dividir por cero
    }

    // Realizamos la suma de fracciones: (num1/den1) + (num2/den2)
    const numerator = n1 * d2;
    const denominator = n2 * d1;

    const divisor = mcd(numerator, denominator);
    const numSimplificado = numerator / divisor;
    const denSimplificado = denominator / divisor;

    // Dependiendo de los tipos de entrada, retornamos el resultado como número o cadena
    if (typeof num1 === 'string' || typeof num2 === 'string') {
        return `${numSimplificado}/${denSimplificado}`;  // Retornamos como cadena
    } else {
        return numerator / denominator;  // Retornamos como número
    }
}

function mcd(a: number, b: number): number {
    while (b !== 0) {
        const resto = a % b;
        a = b;
        b = resto;
    }
    return a;
}
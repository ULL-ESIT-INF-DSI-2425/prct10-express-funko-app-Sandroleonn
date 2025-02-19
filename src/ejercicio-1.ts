export type NumeroComplejo = { real: number, imaginario: number};

/**
 * Add two complex numbers __NumeroComplejo__
 * @param complejo1 - Consists of the first complex number
 * @param complejo2 - Consists of the second complex number
 * @returns - The addition of the two complex numbers
 * ```typescript
 * add({ real: 3, imaginario: 4 }, { real: 1, imaginario: -2 }) 
 * // Returns { real: 4, imaginario: 2 }
 * ```
 */
export function add(complejo1: NumeroComplejo, complejo2: NumeroComplejo): NumeroComplejo {
    return {
        real: complejo1.real + complejo2.real,
        imaginario: complejo1.imaginario + complejo2.imaginario
    };
}

/**
 * Subtract two complex numbers __NumeroComplejo__
 * @param complejo1 - Consists of the first complex number
 * @param complejo2 - Consists of the second complex number
 * @returns - The subtraction result of the two complex numbers
 * ```typescript
 * sub({ real: 3, imaginario: 4 }, { real: 1, imaginario: -2 }) 
 * // Returns { real: 2, imaginario: 6 }
 * ```
 */
export function sub(complejo1: NumeroComplejo, complejo2: NumeroComplejo): NumeroComplejo {
    return {
        real: complejo1.real - complejo2.real,
        imaginario: complejo1.imaginario - complejo2.imaginario
    };
}

/**
 * Multiply a complex number by a scalar __NumeroComplejo__
 * @param complejo1 - The complex number to be multiplied
 * @param escalar - The scalar value to multiply the complex number by
 * @returns - The resulting complex number after multiplication
 * ```typescript
 * prod({ real: 3, imaginario: 4 }, 2) 
 * // Returns { real: 6, imaginario: 8 }
 * ```
 */
export function prod(complejo1: NumeroComplejo, escalar: number): NumeroComplejo {
    return {
        real: complejo1.real * escalar,
        imaginario: complejo1.imaginario * escalar
    };
}

/**
 * Get the conjugate of a complex number __NumeroComplejo__
 * @param complejo - The complex number
 * @returns - The conjugate of the complex number
 * ```typescript
 * conj({ real: 3, imaginario: 4 }) 
 * // Returns { real: 3, imaginario: -4 }
 * ```
 */
export function conj(complejo: NumeroComplejo): NumeroComplejo {
    return {
        real: complejo.real,
        imaginario: -(complejo.imaginario)
    };
}

/**
 * Get the absolute value (modulus) of a complex number __NumeroComplejo__
 * @param complejo - The complex number
 * @returns - The absolute value (modulus) of the complex number
 * ```typescript
 * abs({ real: 3, imaginario: 4 }) 
 * // Returns 5
 * ```
 */
export function abs(complejo: NumeroComplejo): number {
    return Math.sqrt(complejo.real ** 2 + complejo.imaginario ** 2);
}



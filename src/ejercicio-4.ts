/**
 * Calculates the number of steps in the Collatz sequence for a given number.
 * The Collatz sequence is a sequence of numbers where:
 * - If the current number is even, divide it by 2.
 * - If the current number is odd, multiply it by 3 and add 1.
 * This process is repeated until the number becomes 1.
 * If the input number is less than or equal to 0 or not an integer, the function returns `undefined`.
 * @param numero - A positive integer to calculate the Collatz sequence.
 * @returns - The number of steps taken to reach 1, or `undefined` if the input is invalid.
 * ```typescript
 * collatz(6)   = 8
 * collatz(19)  = 20
 * collatz(1)   = 0
 * collatz(0)   = undefined
 * collatz(-5)  = undefined
 * ```
 */
export function collatz(numero: number):number | undefined {
    if (numero <= 0 || !Number.isInteger(numero)) {
        return undefined;
    }
    let contador = 0;
    while (numero !== 1) {
        if (numero % 2 == 0) {
            numero = numero / 2;
            contador++;
        }
        else {
            numero = 3 * numero + 1;
            contador++;
        }
    }
    return contador;
}
/**
 * Converts a Roman numeral string to its decimal (integer) equivalent.
 * The function validates the Roman numeral using a regular expression and converts it
 * by iterating over the string from right to left, adding or subtracting values based on the numeral order.
 * If the Roman numeral is invalid, the function returns `undefined`.
 * @param roman - A string representing the Roman numeral to be converted.
 * @returns - The corresponding decimal value of the Roman numeral, or `undefined` if the input is invalid.
 * 
 * ```typescript
 * romanToDecimal("XII") = 12
 * romanToDecimal("IV") = 4
 * romanToDecimal("MMXXI") = 2021
 * romanToDecimal("IIII") = undefined
 * romanToDecimal("ABCD") = undefined
 * ```
 */
export function romanToDecimal(roman: string): number | undefined {
    // Patrón para validar los números romanos correctos
    const validRomanRegex = /^(M{0,4})(CM|CD|D?C{0,3})(XC|XL|L?X{0,3})(IX|IV|V?I{0,3})$/;
    
    // Comprobar si la cadena no cumple con el patrón
    if (!validRomanRegex.test(roman)) {
        return undefined;
    }

    const romanToDecimalMap: { [key: string]: number } = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    };

    let decimalValue = 0;
    let prevValue = 0;

    // Recorrer el número romano de derecha a izquierda
    for (let i = roman.length - 1; i >= 0; i--) {
        const currentValue = romanToDecimalMap[roman[i]];

        // Si el valor actual es menor que el valor anterior, restamos el valor actual
        if (currentValue < prevValue) {
            decimalValue -= currentValue;
        } else {
            decimalValue += currentValue;
        }

        prevValue = currentValue;
    }

    return decimalValue;
}


/**
 * Converts a decimal (integer) number to its Roman numeral representation.
 * The function iterates through predefined Roman numeral values, subtracting the largest possible
 * value from the given number and appending the corresponding Roman numeral symbol to the result.
 * If the input number is not a positive integer, the function returns `undefined`.
 * @param num - A positive integer representing the decimal number to be converted.
 * @returns - The corresponding Roman numeral string, or `undefined` if the input is invalid.
 * 
 * ```typescript
 * decimalToRoman(12) = "XII"
 * decimalToRoman(4) = "IV"
 * decimalToRoman(2021) = "MMXXI"
 * decimalToRoman(0) = undefined
 * decimalToRoman(-5) = undefined
 * ```
 */
// Función para convertir números decimales a números romanos
export function decimalToRoman(num: number): string | undefined {
    if (num <= 0 || !Number.isInteger(num)) {
        return undefined;  // Validamos que el número sea positivo y entero
    }

    const romanNumerals: [number, string][] = [
        [1000, 'M'],
        [900, 'CM'],
        [500, 'D'],
        [400, 'CD'],
        [100, 'C'],
        [90, 'XC'],
        [50, 'L'],
        [40, 'XL'],
        [10, 'X'],
        [9, 'IX'],
        [5, 'V'],
        [4, 'IV'],
        [1, 'I']
    ];

    let result = '';
    for (let [value, symbol] of romanNumerals) {
        while (num >= value) {
            result += symbol;
            num -= value;
        }
    }

    return result;
}

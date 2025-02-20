/**
 * Codifica de manera inversa y dividido en un array de cadenas de cinco de longitud una cadena de entrada con el abecedario.
 * @param cadena - Cadena con el abecedario.
 * @returns - Un array de cadenas con el abecedario inverso
 * ```typescript
 * encodeMessage("abcdefghijklmnopqrstuvwxyz") 
 * // Returns [ 'zyxwv', 'utsrq', 'ponml', 'kjihg', 'fedcb', 'a' ]
 * encodeMessage("abcdefghijklmn67ñopqrstuvwxyz") 
 * // Returns undefined
 * ```
 */
export function encodeMessage(cadena: string): string[] | undefined {
    for (let i = 0; i < cadena.length; i++) {
        if (!(/[a-z]/.test(cadena[i]))) {
            return undefined;
        }
    }
    let cadenaInversa: string = "";
    for (let i = cadena.length - 1; i >= 0; i--) {
        cadenaInversa += cadena[i];
    }
    let alfabetoArray: string[] = [];
    for (let i = 0; i < cadenaInversa.length; i += 5) {
        alfabetoArray.push(cadenaInversa.substring(i, i + 5));
    }
    return alfabetoArray;
}

/**
 * Decodifica un array de cadenas de longitud cinco haciendo la operacion inversa que encodeMessage
 * @param array - array de cadenas de longitud cinco
 * @returns - Un cadena con el abecedario sin espacios.
 * ```typescript
 * decodeMessage([ 'zyxwv', 'utsrq', 'ponml', 'kjihg', 'fedcb', 'edcba' ]) 
 * // Returns "abcdebcdefghijklmnopqrstuvwxyz"
 * encodeMessage([ 'zyxwv', 'utsrq', 'ponml', 'kjiñhg', 'fedcb', 'edcba' ]) 
 * // Returns undefined
 * ```
 */
export function decodeMessage(array: string[]): string | undefined {
    for (let i = 0; i < array.length; i++) {
        if (array[i].length !== 5 || !(/[a-z]+/.test(array[i]))) {
            return undefined;
        }
    }
    let cadena: string = "";
    for (let i = 0; i < array.length; i++) {
        cadena += array[i];
    }

    let cadenaOriginal: string = "";
    for (let i = cadena.length - 1; i >= 0; i--) {
        cadenaOriginal += cadena[i];
    }
    return cadenaOriginal;
    
}



/**
 * Esta función comprueba si una cadena es palíndroma o no.
 * @param str - Variable string que contiene la cadena a comprobar
 * @returns - Retorna un valor booleano según si la cadena es palíndroma o no.
 * ```typescript
 * isPalindrome('364') = 'false';
 * isPalindrome('hola aloh') = 'true';
 * ```
 */
function isPalindrome(str: string): boolean {
    const cadena = str.replace(/\s+/g, '').toLowerCase();
  
    const cadenaInversa = cadena.split('').reverse().join('');
  
    return cadena === cadenaInversa;
}

console.log(isPalindrome('364'));
console.log(isPalindrome('hola aloh'))

/**
 * Encodes a string into a square grid-based format, removing non-alphanumeric characters 
 * and handling accents, spaces, and punctuation. The encoded string is then returned in 
 * a form of columns, where each column represents a part of the original string's encoding.
 * If the string cannot fit into a valid square grid (rows and columns), it returns `undefined`.
 * 
 * The function performs the following operations:
 * - Converts the input string to lowercase.
 * - Removes accents and diacritical marks.
 * - Strips non-alphanumeric characters and spaces.
 * - Computes the number of rows and columns for the grid.
 * - Returns a string with the columns of the grid as a single space-separated string.
 * 
 * @param cadena - The input string to encode.
 * @returns - A string representing the encoded text in the column grid format, or `undefined` 
 *            if the string cannot be properly encoded into a square grid.
 * 
 * ```typescript
 * squareEncoding('Hello World') = "Hoo lWr el l"
 * squareEncoding('Chuck Norris') = "CkN hosir uc "
 * squareEncoding('Squares are fun') = "Sae qfu rus "
 * ```
 */
export function squareEncoding(cadena: string): string | undefined {
    let cadenaresultante = cadena.toLowerCase();
    cadenaresultante =cadenaresultante.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    cadenaresultante = cadenaresultante.replace(/[^\w\s]|_/g, "").replace(/\s+/g, "");

    // Calcular las dimensiones f y c
    const totalLength = cadenaresultante.length;
    const f = Math.floor(Math.sqrt(totalLength)); // Número de filas
    const c = Math.ceil(totalLength / f); // Número de columnas (c >= f y c - f <= 1)

    if (c - f > 1) {
        return undefined;
    }

    const paddedText = cadenaresultante.padEnd(f * c, ' ');
    let grid: string[] = [];
    for (let i = 0; i < f; i++) {
        grid.push(paddedText.slice(i * c, (i + 1) * c));
    }
    let encodedText: string[] = [];
    for (let col = 0; col < c; col++) {
        let columnText = '';
        for (let row = 0; row < f; row++) {
            columnText += grid[row][col];
        }
        if (columnText.length < f) {
            columnText += " ";  // Añadir un espacio si el fragmento es más corto que f
        }

        // Añadir el texto de la columna y un espacio entre los trozos
        encodedText.push(columnText);
    }
    return encodedText.join(" ");
}
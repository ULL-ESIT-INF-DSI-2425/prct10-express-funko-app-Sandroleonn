enum Puntuacion {
    PUNTOS_1 = 1,
    PUNTOS_2 = 2,
    PUNTOS_3 = 3,
    PUNTOS_4 = 4,
    PUNTOS_5 = 5,
    PUNTOS_8 = 8,
    PUNTOS_10 = 10
}

const puntajes: { [key: string]: Puntuacion } = {
    'a': Puntuacion.PUNTOS_1, 'e': Puntuacion.PUNTOS_1, 'i': Puntuacion.PUNTOS_1, 'o': Puntuacion.PUNTOS_1,
    'u': Puntuacion.PUNTOS_1, 'l': Puntuacion.PUNTOS_1, 'n': Puntuacion.PUNTOS_1, 'r': Puntuacion.PUNTOS_1,
    's': Puntuacion.PUNTOS_1, 't': Puntuacion.PUNTOS_1,
    'd': Puntuacion.PUNTOS_2, 'g': Puntuacion.PUNTOS_2,
    'b': Puntuacion.PUNTOS_3, 'c': Puntuacion.PUNTOS_3, 'm': Puntuacion.PUNTOS_3, 'p': Puntuacion.PUNTOS_3,
    'f': Puntuacion.PUNTOS_4, 'h': Puntuacion.PUNTOS_4, 'v': Puntuacion.PUNTOS_4, 'y': Puntuacion.PUNTOS_4,
    'ch': Puntuacion.PUNTOS_5, 'q': Puntuacion.PUNTOS_5,
    'j': Puntuacion.PUNTOS_8, 'll': Puntuacion.PUNTOS_8, 'ñ': Puntuacion.PUNTOS_8, 'rr': Puntuacion.PUNTOS_8,
    'x': Puntuacion.PUNTOS_8,
    'z': Puntuacion.PUNTOS_10
};

/**
 * Calculate the score of each word based on letter values.
 * @param palabras - An array of words to be scored.
 * @returns - An array of scores for each word, or `undefined` if a word contains 'k' or 'w'.
 * ```typescript
 * getScore(["hola", "queso", "kiwi"]) 
 * // Returns [puntuación de "hola", puntuación de "queso", undefined]
 * 
 * getScore(["chico", "llave", "perro"]) 
 * // Returns [puntuación de "chico", puntuación de "llave", puntuación de "perro"]
 * ```
 */
export function getScore(palabras: string[]): (number | undefined)[] {
    const puntuaciones: (number | undefined)[] = [];
    for (const palabra of palabras) {
        let palabraNormalizada = palabra.toLowerCase().replace(/[áéíóú]/g, (match) => {
            const acentos: { [key: string]: string } = {'á': 'a', 'é': 'e', 'í': 'i', 'ó': 'o', 'ú': 'u'};
            return acentos[match];
        });

        if (palabraNormalizada.includes('k') || palabraNormalizada.includes('w')) {
            puntuaciones.push(undefined);
            continue;
        }

        let puntuacionTotal = 0;
        let i = 0;

        while (i < palabraNormalizada.length) {
            if (i + 1 < palabraNormalizada.length && puntajes[palabraNormalizada[i] + palabraNormalizada[i + 1]]) {
                puntuacionTotal += puntajes[palabraNormalizada[i] + palabraNormalizada[i + 1]];
                i += 2;
            } else if (puntajes[palabraNormalizada[i]]) {
                puntuacionTotal += puntajes[palabraNormalizada[i]];
                i += 1;
            } else {
                i += 1;
            }
        }

        puntuaciones.push(puntuacionTotal);
    }

    return puntuaciones;
}



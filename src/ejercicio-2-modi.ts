export enum Color {
    Blanco = "Blanco",
    Azul = "Azul",
    Negro = "Negro",
    Rojo = "Rojo",
    Verde = "Verde",
    Incoloro = "Incoloro",
    Multicolor = "Multicolor"
}

export type Carta = [
    id: string,
    datos: [
        nombre: string,
        precio: number
    ],
    color: Color,
    cantidad: number
];

let inventario: Carta[] = [];

/**
 * Añade una Carta al inventario, si ya está en el inventario, aumentamos la cantidad de cartas.
 * @param carta - Es una variable de tipo carta que guarda los valores de la carta
 * @returns - No retorna nada, (función void)
 */
export function agregarCarta(carta: Carta): void {
    const cartaExistente = inventario.find(c => c[0] === carta[0]);
    if (cartaExistente) {
        cartaExistente[3] += carta[3];
    } else {
        inventario.push(carta);
    }
}

/**
 * Busca las cartas en el inventario según el color que coincida,
 * @param color - Es una variable de tipo color contiene el color a filtrar en el inventario.
 * @returns - Retorna un array de tipo Carta con los valores de Cartas que cumplan con el color pasado como parámetro
 */

export function buscarCartasPorColor(color: Color): Carta[] {
    return inventario.filter(carta => carta[2] === color);
}


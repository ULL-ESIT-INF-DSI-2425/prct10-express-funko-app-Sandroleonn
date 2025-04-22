/**
 * Representa los diferentes tipos de figuras Funko disponibles.
 * 
 * @enum
 * @property {string} Pop - Figura Pop! estándar
 * @property {string} PopRides - Figura Pop! con vehículo
 * @property {string} VynilSoda - Figura de vinilo con forma de refresco
 * @property {string} VynilGold - Figura de vinilo edición dorada
 * 
 * ```typescript
 * const myFunkoType = FunkoType.Pop;
 * ```
 */
export enum FunkoType {
    Pop = "Pop!",
    PopRides = "Pop! Rides",
    VynilSoda = "Vynil Soda",
    VynilGold = "Vynil Gold",
}

/**
 * Representa los géneros temáticos de las figuras Funko.
 * 
 * @enum
 * @property {string} Animation - Género de animación
 * @property {string} MoviesTV - Género de películas y televisión
 * @property {string} Videogames - Género de videojuegos
 * @property {string} Sports - Género deportivo
 * @property {string} Music - Género musical
 * @property {string} Anime - Género de anime
 * 
 * ```typescript
 * const myFunkoGenre = FunkoGenre.Animation;
 * ```
 */
export enum FunkoGenre {
    Animation = "Animación",
    MoviesTV = "Películas y TV",
    Videogames = "Videojuegos",
    Sports = "Deportes",
    Music = "Música",
    Anime = "Ánime",
}

/**
 * Representa una figura Funko con todas sus propiedades características.
 * 
 * @interface
 * @param {number} id - Identificador único del Funko
 * @param {string} name - Nombre del Funko
 * @param {string} description - Descripción del Funko
 * @param {FunkoType} type - Tipo de figura Funko
 * @param {FunkoGenre} genre - Género temático del Funko
 * @param {string} franchise - Franquicia a la que pertenece
 * @param {number} number - Número en la colección
 * @param {boolean} exclusive - Indica si es una edición exclusiva
 * @param {string} specialFeatures - Características especiales
 * @param {number} marketValue - Valor de mercado en euros
 * 
 * ```typescript
 * const myFunko: Funko = {
 *   id: 1,
 *   name: "Batman",
 *   description: "The Dark Knight",
 *   type: FunkoType.Pop,
 *   genre: FunkoGenre.MoviesTV,
 *   franchise: "DC Comics",
 *   number: 23,
 *   exclusive: true,
 *   specialFeatures: "Brilla en la oscuridad",
 *   marketValue: 45
 * };
 * ```
 */
export interface Funko {
    id: number;
    name: string;
    description: string;
    type: FunkoType;
    genre: FunkoGenre;
    franchise: string;
    number: number;
    exclusive: boolean;
    specialFeatures: string;
    marketValue: number;
}
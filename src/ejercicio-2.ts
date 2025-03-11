/**
 * Representa una canción con sus propiedades.
 *
 * @param nombre - El nombre de la canción.
 * @param duracion - La duración de la canción en segundos.
 * @param generos - Los géneros de la canción, representados como un arreglo de cadenas.
 * @param reproducciones - El número de reproducciones de la canción.
 * @param single - Indica si la canción es un single.
 */
export class Cancion {
    constructor(
        public nombre: string,
        public duracion: number,
        public generos: string[],
        public reproducciones: number,
        public single: boolean
    ) {}
}

/**
 * Representa un disco con sus propiedades.
 *
 * @param nombre - El nombre del disco.
 * @param año - El año de publicación del disco.
 * @param canciones - Las canciones que pertenecen a este disco.
 */
export class Disco {
    constructor(
        public nombre: string,
        public año: number,
        public canciones: Cancion[]
    ) {}
}

/**
 * Representa un single, que generalmente contiene una única canción.
 *
 * @param nombre - El nombre del single.
 * @param año - El año de publicación del single.
 * @param cancion - La única canción que pertenece al single.
 */
export class Single {
    constructor(
        public nombre: string,
        public año: number,
        public cancion: Cancion
    ) {}
}

/**
 * Clase genérica para representar la discografía de un artista.
 * Puede contener discos, singles o una combinación de ambos.
 *
 * @type T - Puede ser `Disco`, `Single` o ambos.
 */
export class Discografia<T extends Disco | Single> {
    constructor(public items: T[]) {}

    agregarItem(item: T): void {
        this.items.push(item);
    }

    obtenerItems(): T[] {
        return this.items;
    }
}

/**
 * Representa un artista o grupo musical.
 *
 * @param nombre - El nombre del artista o grupo musical.
 * @param oyentes - El número de oyentes mensuales del artista.
 * @param discografia - La discografía del artista.
 */
export class Artista<T extends Disco | Single> {
    constructor(
        public nombre: string,
        public oyentes: number,
        public discografia: Discografia<T>
    ) {}
}

/**
 * Representa una biblioteca musical que almacena una colección de artistas.
 */
export class BibliotecaMusical<T extends Disco | Single> {
    constructor(public artistas: Artista<T>[]) {}

    /**
     * Agrega un nuevo artista a la biblioteca.
     */
    agregarArtista(artista: Artista<T>): void {
        this.artistas.push(artista);
    }

    /**
     * Busca un artista por su nombre.
     */
    buscarArtista(nombre: string): void {
        const resultado = this.artistas.filter(artista =>
            artista.nombre.toLowerCase().includes(nombre.toLowerCase())
        );

        if (resultado.length === 0) {
            console.log("No se encontraron artistas con ese nombre.");
            return;
        }

        console.table(resultado.map(artista => ({
            Nombre: artista.nombre,
            "Oyentes Mensuales": artista.oyentes,
            "N° de Lanzamientos": artista.discografia.items.length
        })));
    }

    /**
     * Busca un disco o single por su nombre.
     */
    buscarLanzamiento(nombre: string): void {
        const lanzamientosEncontrados: { Artista: string; Nombre: string; Año: number }[] = [];

        this.artistas.forEach(artista => {
            artista.discografia.items.forEach(lanzamiento => {
                if (lanzamiento.nombre.toLowerCase().includes(nombre.toLowerCase())) {
                    lanzamientosEncontrados.push({
                        Artista: artista.nombre,
                        Nombre: lanzamiento.nombre,
                        Año: lanzamiento.año
                    });
                }
            });
        });

        if (lanzamientosEncontrados.length === 0) {
            console.log("No se encontraron lanzamientos con ese nombre.");
            return;
        }

        console.table(lanzamientosEncontrados);
    }

    /**
     * Busca una canción por su nombre en toda la biblioteca.
     */
    buscarCancion(nombre: string): void {
        const cancionesEncontradas: {
            Artista: string;
            Lanzamiento: string;
            Nombre: string;
            Duración: number;
            Géneros: string[];
            Reproducciones: number;
            Single: boolean;
        }[] = [];

        this.artistas.forEach(artista => {
            artista.discografia.items.forEach(lanzamiento => {
                if (lanzamiento instanceof Disco) {
                    lanzamiento.canciones.forEach(cancion => {
                        if (cancion.nombre.toLowerCase().includes(nombre.toLowerCase())) {
                            cancionesEncontradas.push({
                                Artista: artista.nombre,
                                Lanzamiento: lanzamiento.nombre,
                                Nombre: cancion.nombre,
                                Duración: cancion.duracion,
                                Géneros: cancion.generos,
                                Reproducciones: cancion.reproducciones,
                                Single: cancion.single
                            });
                        }
                    });
                } else if (lanzamiento instanceof Single) {
                    if (lanzamiento.cancion.nombre.toLowerCase().includes(nombre.toLowerCase())) {
                        cancionesEncontradas.push({
                            Artista: artista.nombre,
                            Lanzamiento: lanzamiento.nombre,
                            Nombre: lanzamiento.cancion.nombre,
                            Duración: lanzamiento.cancion.duracion,
                            Géneros: lanzamiento.cancion.generos,
                            Reproducciones: lanzamiento.cancion.reproducciones,
                            Single: lanzamiento.cancion.single
                        });
                    }
                }
            });
        });

        if (cancionesEncontradas.length === 0) {
            console.log("No se encontraron canciones con ese nombre.");
            return;
        }

        console.table(
            cancionesEncontradas.map(cancion => ({
                ...cancion,
                Géneros: cancion.Géneros.join(", ")
            }))
        );
    }
}

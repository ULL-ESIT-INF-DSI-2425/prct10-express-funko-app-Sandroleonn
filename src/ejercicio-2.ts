/**
 * Representa una canción con sus propiedades.
 * 
 * @param nombre - El nombre de la canción.
 * @param duracion - La duración de la canción en segundos.
 * @param generos - Los géneros de la canción, representados como un arreglo de cadenas.
 * @param single - Indica si la canción fue lanzada como un single.
 * @param reproducciones - El número de reproducciones de la canción.
 * 
 * ```typescript
 * const cancion = new Cancion("Song Name", 180, ["pop", "dance"], true, 1000);
 * ```
 */
export interface Cancion {
    nombre: string;
    duracion: number; 
    generos: string[];
    single: boolean;
    reproducciones: number;
}

/**
 * Representa un disco con sus propiedades.
 * 
 * @param nombre - El nombre del disco.
 * @param año - El año de publicación del disco.
 * @param canciones - Las canciones que pertenecen a este disco, representadas como un arreglo de objetos `Cancion`.
 * 
 * ```typescript
 * const disco = new Disco("Album Name", 2022, [cancion1, cancion2]);
 * ```
 */
export interface Disco {
    nombre: string;
    año: number;
    canciones: Cancion[];
}

/**
 * Representa un artista o grupo musical.
 * 
 * @param nombre - El nombre del artista o grupo musical.
 * @param oyentes - El número de oyentes mensuales del artista.
 * @param discografia - La discografía del artista, representada como un arreglo de objetos `Disco`.
 * 
 * ```typescript
 * const artista = new Artista("Artist Name", 5000000, [disco1, disco2]);
 * ```
 */
export class Artista {
    constructor(
        public nombre: string,
        public oyentes: number,
        public discografia: Disco[]
    ) {}
}

/**
 * Representa una biblioteca musical que almacena una colección de artistas y sus discos.
 * 
 * @param artistas - El arreglo de artistas que pertenecen a la biblioteca.
 * 
 * ```typescript
 * const biblioteca = new BibliotecaMusical([artista1, artista2]);
 * ```
 */
export class BibliotecaMusical {
    constructor(public artistas: Artista[]) {}

    /**
     * Agrega un nuevo artista a la biblioteca musical.
     * 
     * @param artista - El artista que se desea agregar a la biblioteca.
     * 
     * ```typescript
     * biblioteca.agregarArtista(artista);
     * ```
     */
    agregarArtista(artista: Artista): void {
        this.artistas.push(artista);
    }

    /**
     * Obtiene el arreglo de todos los artistas en la biblioteca.
     * 
     * @returns Un arreglo de objetos `Artista`.
     * 
     * ```typescript
     * const artistas = biblioteca.obtenerArtistas();
     * ```
     */
    obtenerArtistas(): Artista[] {
        return this.artistas;
    }

    /**
     * Muestra la información de la biblioteca musical en formato tabla.
     * 
     * ```typescript
     * biblioteca.mostrarBiblioteca();
     * ```
     */
    mostrarBiblioteca(): void {
        const datos = this.artistas.map(artista => ({
            Nombre: artista.nombre,
            "Oyentes Mensuales": artista.oyentes,
            "N° de Álbumes": artista.discografia.length
        }));
        console.table(datos);
    }

    /**
     * Busca un artista por su nombre.
     * 
     * @param nombre - El nombre del artista a buscar.
     * 
     * ```typescript
     * biblioteca.buscarArtista("Artist Name");
     * ```
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
            "N° de Álbumes": artista.discografia.length
        })));
    }

    /**
     * Busca un disco por su nombre.
     * 
     * @param nombre - El nombre del disco a buscar.
     * 
     * ```typescript
     * biblioteca.buscarDisco("Album Name");
     * ```
     */
    buscarDisco(nombre: string): void {
        const discosEncontrados: { Artista: string; Nombre: string; Año: number }[] = [];

        this.artistas.forEach(artista => {
            artista.discografia.forEach(disco => {
                if (disco.nombre.toLowerCase().includes(nombre.toLowerCase())) {
                    discosEncontrados.push({
                        Artista: artista.nombre,
                        Nombre: disco.nombre,
                        Año: disco.año
                    });
                }
            });
        });

        if (discosEncontrados.length === 0) {
            console.log("No se encontraron discos con ese nombre.");
            return;
        }

        console.table(discosEncontrados);
    }

    /**
     * Busca una canción por su nombre.
     * 
     * @param nombre - El nombre de la canción a buscar.
     * 
     * ```typescript
     * biblioteca.buscarCancion("Song Name");
     * ```
     */
    buscarCancion(nombre: string): void {
        const cancionesEncontradas: {
            Artista: string;
            Disco: string;
            Nombre: string;
            Duración: number;
            Géneros: string[];
            Single: boolean;
            Reproducciones: number;
        }[] = [];

        this.artistas.forEach(artista => {
            artista.discografia.forEach(disco => {
                disco.canciones.forEach(cancion => {
                    if (cancion.nombre.toLowerCase().includes(nombre.toLowerCase())) {
                        cancionesEncontradas.push({
                            Artista: artista.nombre,
                            Disco: disco.nombre,
                            Nombre: cancion.nombre,
                            Duración: cancion.duracion,
                            Géneros: cancion.generos, 
                            Single: cancion.single,  
                            Reproducciones: cancion.reproducciones 
                        });
                    }
                });
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

    /**
     * Calcula el número de canciones de un disco determinado.
     * 
     * @param discoNombre - El nombre del disco para el cual se calculará el número de canciones.
     * @returns El número total de canciones del disco.
     * 
     * ```typescript
     * const totalCanciones = biblioteca.numeroCanciones("Album Name");
     * ```
     */
    numeroCanciones(discoNombre: string): number {
        let totalCanciones = 0;
        this.artistas.forEach(artista => {
            artista.discografia.forEach(disco => {
                if (disco.nombre.toLowerCase() === discoNombre.toLowerCase()) {
                    totalCanciones = disco.canciones.length;
                }
            });
        });
        return totalCanciones;
    }

    /**
     * Calcula la duración total de un disco, sumando la duración de todas sus canciones.
     * 
     * @param discoNombre - El nombre del disco para el cual se calculará la duración total.
     * @returns La duración total del disco en segundos.
     * 
     * ```typescript
     * const duracionTotal = biblioteca.duracionDisco("Album Name");
     * ```
     */
    duracionDisco(discoNombre: string): number {
        let totalDuracion = 0;
        this.artistas.forEach(artista => {
            artista.discografia.forEach(disco => {
                if (disco.nombre.toLowerCase() === discoNombre.toLowerCase()) {
                    disco.canciones.forEach(cancion => {
                        totalDuracion += cancion.duracion;
                    });
                }
            });
        });
        return totalDuracion;
    }

    /**
     * Calcula el número total de reproducciones de un disco, sumando las reproducciones de todas sus canciones.
     * 
     * @param discoNombre - El nombre del disco para el cual se calcularán las reproducciones totales.
     * @returns El número total de reproducciones del disco.
     * 
     * ```typescript
     * const totalReproducciones = biblioteca.reproduccionesDisco("Album Name");
     * ```
     */
    reproduccionesDisco(discoNombre: string): number {
        let totalReproducciones = 0;
        this.artistas.forEach(artista => {
            artista.discografia.forEach(disco => {
                if (disco.nombre.toLowerCase() === discoNombre.toLowerCase()) {
                    disco.canciones.forEach(cancion => {
                        totalReproducciones += cancion.reproducciones;
                    });
                }
            });
        });
        return totalReproducciones;
    }
}

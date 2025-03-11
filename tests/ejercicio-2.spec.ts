import { describe, expect, test, beforeEach } from "vitest";
import { Cancion, Disco, Single, Discografia, Artista, BibliotecaMusical } from "../src/ejercicio-2";

// Pruebas para la clase Cancion
describe("Cancion", () => {
  test("debe crear una canción correctamente", () => {
    const song = new Cancion("Bohemian Rhapsody", 354, ["Rock"], 1000000, false);
    expect(song.nombre).toBe("Bohemian Rhapsody");
    expect(song.duracion).toBe(354);
    expect(song.generos).toEqual(["Rock"]);
    expect(song.reproducciones).toBe(1000000);
    expect(song.single).toBe(false);
  });
});

// Pruebas para la clase Disco
describe("Disco", () => {
  test("debe crear un disco correctamente", () => {
    const song = new Cancion("Song1", 200, ["Pop"], 50000, false);
    const album = new Disco("Best Album", 2010, [song]);
    expect(album.nombre).toBe("Best Album");
    expect(album.año).toBe(2010);
    expect(album.canciones).toContain(song);
  });
});

// Pruebas para la clase Single
describe("Single", () => {
  test("debe crear un single correctamente", () => {
    const song = new Cancion("Hit Single", 180, ["Pop"], 100000, true);
    const single = new Single("Hit Single", 2022, song);
    expect(single.nombre).toBe("Hit Single");
    expect(single.año).toBe(2022);
    expect(single.cancion).toBe(song);
  });
});

// Pruebas para la clase Discografia
describe("Discografia", () => {
  test("debe agregar y obtener discos/singles", () => {
    const song = new Cancion("Rock Song", 220, ["Rock"], 80000, false);
    const album = new Disco("Rock Album", 2015, [song]);
    const single = new Single("Solo Hit", 2019, song);

    const discografia = new Discografia<Disco | Single>([]);
    discografia.agregarItem(album);
    discografia.agregarItem(single);

    expect(discografia.obtenerItems()).toContain(album);
    expect(discografia.obtenerItems()).toContain(single);
  });
});

// Pruebas para la clase Artista
describe("Artista", () => {
  test("debe crear un artista con su discografía", () => {
    const discografia = new Discografia<Disco | Single>([]);
    const artista = new Artista("Queen", 50000000, discografia);

    expect(artista.nombre).toBe("Queen");
    expect(artista.oyentes).toBe(50000000);
    expect(artista.discografia).toBe(discografia);
  });
});

// Pruebas para la clase BibliotecaMusical
describe("BibliotecaMusical", () => {
  let biblioteca: BibliotecaMusical<Disco | Single>;
  let artista: Artista<Disco | Single>;
  let disco: Disco;
  let single: Single;
  let cancion: Cancion;

  beforeEach(() => {
    cancion = new Cancion("Test Song", 200, ["Rock"], 5000, false);
    disco = new Disco("Test Album", 2021, [cancion]);
    single = new Single("Test Single", 2022, cancion);
    artista = new Artista("Test Artist", 1000000, new Discografia<Disco | Single>([disco, single]));
    biblioteca = new BibliotecaMusical([artista]);
  });

  test("debe agregar un artista", () => {
    const nuevoArtista = new Artista("New Artist", 200000, new Discografia<Disco | Single>([]));
    biblioteca.agregarArtista(nuevoArtista);
    expect(biblioteca.artistas).toContain(nuevoArtista);
  });

  test("debe buscar un artista por nombre", () => {
    const logOutput: string[] = [];
    const originalConsoleLog = console.log;
    console.log = (message: string) => logOutput.push(message);

    biblioteca.buscarArtista("Test Artist");

    // Verificamos que el mensaje contenga la información esperada.
    expect(logOutput[0]).toContain("Test Artist");

    // Restauramos la función console.log original
    console.log = originalConsoleLog;
  });

  test("debe buscar un artista por nombre y no encontrarlo", () => {
    const logOutput: string[] = [];
    const originalConsoleLog = console.log;
    console.log = (message: string) => logOutput.push(message);

    biblioteca.buscarArtista("Nonexistent Artist");

    // Verificamos que el mensaje de error esperado se haya mostrado.
    expect(logOutput[0]).toBe("No se encontraron artistas con ese nombre.");

    // Restauramos la función console.log original
    console.log = originalConsoleLog;
  });

  test("debe buscar un disco o single por nombre", () => {
    const logOutput: string[] = [];
    const originalConsoleLog = console.log;
    console.log = (message: string) => logOutput.push(message);

    biblioteca.buscarLanzamiento("Test Album");

    // Verificamos que el mensaje contenga la información esperada.
    expect(logOutput[0]).toContain("Test Album");

    // Restauramos la función console.log original
    console.log = originalConsoleLog;
  });

  test("debe buscar un disco o single por nombre y no encontrarlo", () => {
    const logOutput: string[] = [];
    const originalConsoleLog = console.log;
    console.log = (message: string) => logOutput.push(message);

    biblioteca.buscarLanzamiento("Nonexistent Album");

    // Verificamos que el mensaje de error esperado se haya mostrado.
    expect(logOutput[0]).toBe("No se encontraron lanzamientos con ese nombre.");

    // Restauramos la función console.log original
    console.log = originalConsoleLog;
  });

  test("debe buscar una canción por nombre", () => {
    const logOutput: string[] = [];
    const originalConsoleLog = console.log;
    console.log = (message: string) => logOutput.push(message);

    biblioteca.buscarCancion("Test Song");

    // Verificamos que el mensaje contenga la información esperada.
    expect(logOutput[0]).toContain("Test Song");

    // Restauramos la función console.log original
    console.log = originalConsoleLog;
  });

  test("debe buscar una canción por nombre y no encontrarla", () => {
    const logOutput: string[] = [];
    const originalConsoleLog = console.log;
    console.log = (message: string) => logOutput.push(message);

    biblioteca.buscarCancion("Nonexistent Song");

    // Verificamos que el mensaje de error esperado se haya mostrado.
    expect(logOutput[0]).toBe("No se encontraron canciones con ese nombre.");

    // Restauramos la función console.log original
    console.log = originalConsoleLog;
  });
});

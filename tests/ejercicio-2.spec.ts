import { describe, expect, test } from "vitest";
import { Artista, BibliotecaMusical, Cancion, Disco } from '../src/ejercicio-2'; // Ajusta la importación si es necesario

// Prueba de la clase Artista
describe('Artista', () => {
  test('debe crear un artista correctamente', () => {
    const artista = new Artista("Ariana Grande", 80000000, []);
    expect(artista.nombre).toBe("Ariana Grande");
    expect(artista.oyentes).toBe(80000000);
    expect(artista.discografia).toEqual([]);
  });
});

// Prueba de la clase BibliotecaMusical
describe('BibliotecaMusical', () => {
  test('debe agregar un artista correctamente', () => {
    const artista = new Artista("Ariana Grande", 80000000, []);
    const biblioteca = new BibliotecaMusical([]);
    biblioteca.agregarArtista(artista);

    expect(biblioteca.obtenerArtistas().length).toBe(1);
    expect(biblioteca.obtenerArtistas()[0].nombre).toBe("Ariana Grande");
  });

  test('debe mostrar la biblioteca correctamente', () => {
    // Crear los artistas
    const artista1 = new Artista("Ariana Grande", 80000000, []);
    const cancion: Cancion = { nombre: "Album1", duracion: 3.0, generos: ["Pop"], single: false, reproducciones: 500000 };
    const disco: Disco = { nombre: "Album1", año: 2020, canciones: [cancion] };
    const artista2 = new Artista("Shawn Mendes", 60000000, [disco]);

    // Crear la biblioteca y agregar los artistas
    const biblioteca = new BibliotecaMusical([artista1, artista2]);
    
    // Redirigir console.table para capturar la salida
    const originalTable = console.table;
    let output = "";
    console.table = (data: any) => {
        output = JSON.stringify(data);
    };
    
    // Llamar al método que usa console.table
    biblioteca.mostrarBiblioteca();

    // Verificar que la salida de console.table contiene los datos esperados
    const expectedOutput = JSON.stringify([
        { Nombre: "Ariana Grande", "Oyentes Mensuales": 80000000, "N° de Álbumes": 0 },
        { Nombre: "Shawn Mendes", "Oyentes Mensuales": 60000000, "N° de Álbumes": 1 }
    ]);
    expect(output).toBe(expectedOutput);  // Compara la salida esperada con la generada por console.table

    // Restaurar console.table
    console.table = originalTable;
    });

  test('debe buscar un artista correctamente', () => {
    const artista = new Artista("Ariana Grande", 80000000, []);
    const biblioteca = new BibliotecaMusical([artista]);

    const logOutput: string[] = [];
    const originalConsoleLog = console.log;
    console.log = (message: string) => logOutput.push(message);
    
    biblioteca.buscarArtista("Ariana");
    expect(logOutput[0]).toContain("Ariana Grande");

    logOutput.length = 0;
    biblioteca.buscarArtista("Katy");
    expect(logOutput[0]).toBe("No se encontraron artistas con ese nombre.");
    
    console.log = originalConsoleLog;
  });

  test('debe buscar un disco correctamente', () => {
    const cancion: Cancion = { nombre: "No Tears Left To Cry", duracion: 3.3, generos: ["Pop"], single: true, reproducciones: 1000000 };
    const disco: Disco = { nombre: "Sweetener", año: 2018, canciones: [cancion] };
    const artista = new Artista("Ariana Grande", 80000000, [disco]);
    const biblioteca = new BibliotecaMusical([artista]);

    const logOutput: string[] = [];
    const originalConsoleLog = console.log;
    console.log = (message: string) => logOutput.push(message);
    
    biblioteca.buscarDisco("Sweetener");
    expect(logOutput[0]).toContain("Sweetener");
    expect(logOutput[0]).toContain("Ariana Grande");

    logOutput.length = 0;
    biblioteca.buscarDisco("Thank U, Next");
    expect(logOutput[0]).toBe("No se encontraron discos con ese nombre.");
    
    console.log = originalConsoleLog;
  });

  test('debe buscar una canción correctamente', () => {
    const cancion: Cancion = { nombre: "No Tears Left To Cry", duracion: 3.3, generos: ["Pop"], single: true, reproducciones: 1000000 };
    const disco: Disco = { nombre: "Sweetener", año: 2018, canciones: [cancion] };
    const artista = new Artista("Ariana Grande", 80000000, [disco]);
    const biblioteca = new BibliotecaMusical([artista]);

    const logOutput: string[] = [];
    const originalConsoleLog = console.log;
    console.log = (message: string) => logOutput.push(message);
    
    biblioteca.buscarCancion("No Tears Left To Cry");
    expect(logOutput[0]).toContain("No Tears Left To Cry");
    expect(logOutput[0]).toContain("Sweetener");
    expect(logOutput[0]).toContain("Ariana Grande");

    logOutput.length = 0;
    biblioteca.buscarCancion("Thank U, Next");
    expect(logOutput[0]).toBe("No se encontraron canciones con ese nombre.");
    
    console.log = originalConsoleLog;
  });

  test('debe contar el número de canciones de un disco correctamente', () => {
    const cancion1: Cancion = { nombre: "No Tears Left To Cry", duracion: 3.3, generos: ["Pop"], single: true, reproducciones: 1000000 };
    const cancion2: Cancion = { nombre: "God Is a Woman", duracion: 3.5, generos: ["Pop"], single: true, reproducciones: 1500000 };
    const disco: Disco = { nombre: "Sweetener", año: 2018, canciones: [cancion1, cancion2] };
    const artista = new Artista("Ariana Grande", 80000000, [disco]);
    const biblioteca = new BibliotecaMusical([artista]);

    expect(biblioteca.numeroCanciones("Sweetener")).toBe(2);
  });

  test('debe calcular la duración total de un disco correctamente', () => {
    const cancion1: Cancion = { nombre: "No Tears Left To Cry", duracion: 3.3, generos: ["Pop"], single: true, reproducciones: 1000000 };
    const cancion2: Cancion = { nombre: "God Is a Woman", duracion: 3.5, generos: ["Pop"], single: true, reproducciones: 1500000 };
    const disco: Disco = { nombre: "Sweetener", año: 2018, canciones: [cancion1, cancion2] };
    const artista = new Artista("Ariana Grande", 80000000, [disco]);
    const biblioteca = new BibliotecaMusical([artista]);

    expect(biblioteca.duracionDisco("Sweetener")).toBe(6.8);
  });

  test('debe calcular el número total de reproducciones de un disco correctamente', () => {
    const cancion1: Cancion = { nombre: "No Tears Left To Cry", duracion: 3.3, generos: ["Pop"], single: true, reproducciones: 1000000 };
    const cancion2: Cancion = { nombre: "God Is a Woman", duracion: 3.5, generos: ["Pop"], single: true, reproducciones: 1500000 };
    const disco: Disco = { nombre: "Sweetener", año: 2018, canciones: [cancion1, cancion2] };
    const artista = new Artista("Ariana Grande", 80000000, [disco]);
    const biblioteca = new BibliotecaMusical([artista]);

    expect(biblioteca.reproduccionesDisco("Sweetener")).toBe(2500000);
  });
});

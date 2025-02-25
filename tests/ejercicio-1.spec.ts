import { describe, expect, test } from "vitest";
import { Pokemon, Pokedex, Combat } from '../src/ejercicio-1'; // Ajusta la importación si es necesario

// Prueba de la clase Pokemon
describe('Pokemon', () => {
  test('debe crear un Pokémon correctamente', () => {
    const pikachu = new Pokemon("Pikachu", 6, 0.4, "eléctrico", 55, 40, 90, 100);
    expect(pikachu.nombre).toBe("Pikachu");
    expect(pikachu.peso).toBe(6);
    expect(pikachu.altura).toBe(0.4);
    expect(pikachu.tipo).toBe("eléctrico");
    expect(pikachu.ataque).toBe(55);
    expect(pikachu.defensa).toBe(40);
    expect(pikachu.velocidad).toBe(90);
    expect(pikachu.hp).toBe(100);
  });

  test('debe mostrar la información del Pokémon correctamente', () => {
    const pikachu = new Pokemon("Pikachu", 6, 0.4, "eléctrico", 55, 40, 90, 100);
    const logOutput: string[] = [];
    const originalConsoleLog = console.log;
    console.log = (message: string) => logOutput.push(message);
    pikachu.mostrarInformacion();
    expect(logOutput[0]).toBe("Nombre: Pikachu");
    expect(logOutput[1]).toBe("Tipo: eléctrico");
    expect(logOutput[2]).toBe("Peso: 6 kg, Altura: 0.4 m");
    expect(logOutput[3]).toBe("Ataque: 55, Defensa: 40");
    expect(logOutput[4]).toBe("Velocidad: 90, HP: 100");
    console.log = originalConsoleLog;
  });
});

// Prueba de la clase Pokedex
describe('Pokedex', () => {
  test('debe agregar y mostrar Pokémon correctamente', () => {
    const pikachu = new Pokemon("Pikachu", 6, 0.4, "eléctrico", 55, 40, 90, 100);
    const charizard = new Pokemon("Charizard", 90, 1.7, "fuego", 84, 78, 100, 150);
    const bulbasaur = new Pokemon("Bulbasaur", 6.9, 0.7, "hierba", 49, 49, 45, 100);
    const squirtle = new Pokemon("Squirtle", 9, 0.5, "agua", 48, 65, 43, 100);
  
    const pokedex = new Pokedex();
    pokedex.agregarPokemon(pikachu);
    pokedex.agregarPokemon(charizard);
    pokedex.agregarPokemon(bulbasaur);
    pokedex.agregarPokemon(squirtle);
  
    const logOutput: string[] = [];
    const originalConsoleLog = console.log;
    console.log = (message: string) => logOutput.push(message);
  
    pokedex.mostrarPokedex();
  
    expect(logOutput[0]).toContain("========================");
    expect(logOutput[1]).toContain("Nombre: Pikachu");
    expect(logOutput[6]).toContain("========================");
    expect(logOutput[7]).toContain("Nombre: Charizard");
    expect(logOutput[12]).toContain("========================");
    expect(logOutput[13]).toContain("Nombre: Bulbasaur");
    expect(logOutput[18]).toContain("========================");
    expect(logOutput[19]).toContain("Nombre: Squirtle");
    console.log = originalConsoleLog;
  });

  test('debe buscar Pokémon por nombre', () => {
    const pikachu = new Pokemon("Pikachu", 6, 0.4, "eléctrico", 55, 40, 90, 100);
    const pokedex = new Pokedex();
    pokedex.agregarPokemon(pikachu);
  
    const pokemonEncontrado = pokedex.buscarPorNombre("Pikachu");
    expect(pokemonEncontrado).toBeDefined();
    expect(pokemonEncontrado?.nombre).toBe("Pikachu");
  
    const pokemonNoEncontrado = pokedex.buscarPorNombre("Charmander");
    expect(pokemonNoEncontrado).toBeUndefined();
  });

  test('debe buscar Pokémon por tipo', () => {
    const pikachu = new Pokemon("Pikachu", 6, 0.4, "eléctrico", 55, 40, 90, 100);
    const charizard = new Pokemon("Charizard", 90, 1.7, "fuego", 84, 78, 100, 150);
    const pokedex = new Pokedex();
    pokedex.agregarPokemon(pikachu);
    pokedex.agregarPokemon(charizard);
  
    const pokemonsElectricos = pokedex.buscarPorTipo("eléctrico");
    expect(pokemonsElectricos.length).toBe(1);
    expect(pokemonsElectricos[0].nombre).toBe("Pikachu");
  
    const pokemonsFuego = pokedex.buscarPorTipo("fuego");
    expect(pokemonsFuego.length).toBe(1);
    expect(pokemonsFuego[0].nombre).toBe("Charizard");
  });

  test('debe buscar Pokémon por ataque', () => {
    const pikachu = new Pokemon("Pikachu", 6, 0.4, "eléctrico", 55, 40, 90, 100);
    const charizard = new Pokemon("Charizard", 90, 1.7, "fuego", 84, 78, 100, 150);
    const pokedex = new Pokedex();
    pokedex.agregarPokemon(pikachu);
    pokedex.agregarPokemon(charizard);
  
    const pokemonsConAltoAtaque = pokedex.buscarPorAtaque(80);
    expect(pokemonsConAltoAtaque.length).toBe(1);
    expect(pokemonsConAltoAtaque[0].nombre).toBe("Charizard");
  
    const pokemonsConBajoAtaque = pokedex.buscarPorAtaque(40);
    expect(pokemonsConBajoAtaque.length).toBe(2);
  });
});

// Prueba de la clase Combat
describe('Combat', () => {
  test('debe simular un combate correctamente', () => {
    const pikachu = new Pokemon("Pikachu", 6, 0.4, "eléctrico", 55, 40, 90, 100);
    const charizard = new Pokemon("Charizard", 90, 1.7, "fuego", 84, 78, 100, 150);
    const combate = new Combat(pikachu, charizard);
  
    const logOutput: string[] = [];
    const originalConsoleLog = console.log;
    console.log = (message: string) => logOutput.push(message);
  
    combate.start();
  
    expect(logOutput.some((line) => line.includes("¡Comienza el combate!"))).toBe(true);
    expect(logOutput.some((line) => line.includes("ha sido derrotado"))).toBe(true);
  
    console.log = originalConsoleLog;
  });
});

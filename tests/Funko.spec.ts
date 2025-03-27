import { describe, test, expect, beforeEach, afterEach, vi } from "vitest";
import * as fs from "fs";
import * as path from "path";
import chalk from 'chalk';
import { FunkoManager } from "../src/Funko-App/services/FunkoManager";
import { Funko, FunkoType, FunkoGenre } from "../src/Funko-App/models/Funko";

vi.mock('chalk', () => ({
    default: {
      white: vi.fn().mockImplementation(text => text),
      red: vi.fn().mockImplementation(text => `RED:${text}`),
      yellow: vi.fn().mockImplementation(text => `YELLOW:${text}`),
      blue: vi.fn().mockImplementation(text => `BLUE:${text}`),
      green: vi.fn().mockImplementation(text => `GREEN:${text}`),
      bold: vi.fn().mockImplementation(text => `BOLD:${text}`),
    }
  }));

const testUsername = "testUser";
const testDir = path.join(__dirname, "..", "src", "Funko-App", "data", testUsername); // Ruta actualizada
const testFunko: Funko = {
  id: 1,
  name: "Batman",
  description: "Superhéroe de DC",
  type: FunkoType.Pop,
  genre: FunkoGenre.MoviesTV,
  franchise: "DC Comics",
  number: 23,
  exclusive: false,
  specialFeatures: "Brilla en la oscuridad",
  marketValue: 45,
};

describe("FunkoManager", () => {
  let funkoManager: FunkoManager;

  beforeEach(() => {
    // Asegurar que el directorio data existe
    const dataDir = path.join(__dirname, "..", "src", "data");
    if (!fs.existsSync(dataDir)) {
      fs.mkdirSync(dataDir, { recursive: true });
    }
    
    funkoManager = new FunkoManager(testUsername);
    if (!fs.existsSync(testDir)) {
      fs.mkdirSync(testDir, { recursive: true });
    }
  });

  afterEach(() => {
    // Limpiar solo el directorio del usuario de prue
    if (fs.existsSync(testDir)) {
      fs.rmSync(testDir, { recursive: true, force: true });
    }
  });

  test("debe agregar un Funko correctamente", () => {
    funkoManager.addFunko(testFunko);
    const funkoPath = path.join(testDir, `${testFunko.id}.json`);
    expect(fs.existsSync(funkoPath)).toBe(true);
  });

  test("no debe agregar un Funko con ID repetido", () => {
    funkoManager.addFunko(testFunko);
    const consoleSpy = vi.spyOn(console, "log");
    funkoManager.addFunko(testFunko);
    expect(consoleSpy).toHaveBeenCalledWith(expect.stringContaining("Error: Ya existe un Funko con este ID."));
    consoleSpy.mockRestore();
  });

  test("debe actualizar un Funko existente", () => {
    funkoManager.addFunko(testFunko);
    const updatedFunko = { ...testFunko, name: "Superman" };
    funkoManager.updateFunko(updatedFunko);
    const savedFunko: Funko = JSON.parse(fs.readFileSync(path.join(testDir, `${testFunko.id}.json`), "utf-8"));
    expect(savedFunko.name).toBe("Superman");
  });

  test("no debe actualizar un Funko inexistente", () => {
    const consoleSpy = vi.spyOn(console, "log");
    funkoManager.updateFunko(testFunko);
    expect(consoleSpy).toHaveBeenCalledWith("Error: No se encontró el Funko.");
    consoleSpy.mockRestore();
  });

  test("debe eliminar un Funko existente", () => {
    funkoManager.addFunko(testFunko);
    funkoManager.removeFunko(testFunko.id);
    const funkoPath = path.join(testDir, `${testFunko.id}.json`);
    expect(fs.existsSync(funkoPath)).toBe(false);
  });

  test("no debe eliminar un Funko inexistente", () => {
    const consoleSpy = vi.spyOn(console, "log");
    funkoManager.removeFunko(999);
    expect(consoleSpy).toHaveBeenCalledWith(expect.stringContaining("Error: No se encontró el Funko."));
    consoleSpy.mockRestore();
  });

  test("debe listar Funkos correctamente", () => {
    funkoManager.addFunko(testFunko);
    const consoleSpy = vi.spyOn(console, "log");
    funkoManager.listFunkos();
    expect(consoleSpy).toHaveBeenCalledWith(expect.stringContaining(testFunko.name));
    consoleSpy.mockRestore();
  });

  test("debe mostrar la información de un Funko existente", () => {
    funkoManager.addFunko(testFunko);
    const consoleSpy = vi.spyOn(console, "log");
    funkoManager.showFunko(testFunko.id);
    expect(consoleSpy).toHaveBeenCalledWith(expect.stringContaining(testFunko.name));
    consoleSpy.mockRestore();
  });

  test("no debe mostrar un Funko inexistente", () => {
    const consoleSpy = vi.spyOn(console, "log");
    funkoManager.showFunko(999);
    expect(consoleSpy).toHaveBeenCalledWith(expect.stringContaining("Error: No se encontró el Funko."));
    consoleSpy.mockRestore();
  });

  test("debe mostrar mensaje cuando no hay Funkos en la lista", () => {
    if (fs.existsSync(testDir)) {
      fs.rmSync(testDir, { recursive: true, force: true });
      fs.mkdirSync(testDir, { recursive: true });
    }
  
    const consoleSpy = vi.spyOn(console, "log");
    funkoManager.listFunkos();
    
    expect(consoleSpy).toHaveBeenCalledWith(expect.stringContaining("No hay Funkos en la lista."));
    consoleSpy.mockRestore();
  });

  describe('FunkoManager - displayFunko', () => {
    let funkoManager: FunkoManager;
    let consoleSpy: ReturnType<typeof vi.spyOn>;
  
    beforeEach(() => {
      funkoManager = new FunkoManager('test-user');
      consoleSpy = vi.spyOn(console, 'log');
    });
  
    afterEach(() => {
      consoleSpy.mockRestore();
      vi.clearAllMocks();
    });
  
    test('debe usar rojo para valores < 20', () => {
        const funko = { ...testFunko, marketValue: 15 };
        (funkoManager as any).displayFunko(funko);
        
        const calls = consoleSpy.mock.calls as Array<[string]>;
        const valueOutput = calls.find(call => 
          call[0].includes('Valor de mercado:')
        )?.[0];
        
        expect(valueOutput).toContain('RED:');
      });
      
      // Solución alternativa con tipo más preciso
      test('debe usar amarillo para valores entre 20 y 49', () => {
        const funko = { ...testFunko, marketValue: 35 };
        (funkoManager as any).displayFunko(funko);
        
        const calls = consoleSpy.mock.calls as Array<[string]>;
        const valueOutput = calls.find(call => 
          call[0].includes('Valor de mercado:')
        )?.[0];
        
        expect(valueOutput).toContain('YELLOW:');
      });

      test('debe usar azul para valores entre 50 y 99', () => {
        const funko = { ...testFunko, marketValue: 75 };
        (funkoManager as any).displayFunko(funko);
        
        const calls = consoleSpy.mock.calls as Array<[string]>;
        const valueOutput = calls.find(call => 
          call[0].includes('Valor de mercado:')
        )?.[0];
        
        expect(valueOutput).toContain('BLUE:');
      });

      test('debe usar verde para valores mayores o iguales que 100', () => {
        const funko = { ...testFunko, marketValue: 110 };
        (funkoManager as any).displayFunko(funko);
        
        const calls = consoleSpy.mock.calls as Array<[string]>;
        const valueOutput = calls.find(call => 
          call[0].includes('Valor de mercado:')
        )?.[0];
        
        expect(valueOutput).toContain('GREEN:');
      });

      test('debe mostrar "Sí" cuando exclusive es true', () => {
        const funko = { ...testFunko, exclusive: true };
        (funkoManager as any).displayFunko(funko);
        
        const calls = consoleSpy.mock.calls as Array<[string]>;
        const valueOutput = calls.find(call => 
          call[0].includes('Exclusivo:')
        )?.[0];
        
        expect(valueOutput).toContain(' Exclusivo: Sí');
      });

      test('debe mostrar "No" cuando exclusive es false', () => {
        const funko = { ...testFunko, exclusive: false };
        (funkoManager as any).displayFunko(funko);
        
        const calls = consoleSpy.mock.calls as Array<[string]>;
        const valueOutput = calls.find(call => 
          call[0].includes('Exclusivo:')
        )?.[0];
        
        expect(valueOutput).toContain(' Exclusivo: No');
      });
  });
});
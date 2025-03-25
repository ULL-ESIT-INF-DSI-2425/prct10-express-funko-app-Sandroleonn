import * as fs from "fs";
import * as path from "path";
import { fileURLToPath } from "url";
import chalk from "chalk";
import { Funko } from "../models/Funko.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/**
 * Clase que gestiona la colección de Funkos de un usuario.
 * Proporciona métodos para añadir, actualizar, eliminar, listar y mostrar Funkos.
 * 
 * ```typescript
 * const manager = new FunkoManager("usuarioEjemplo");
 * manager.addFunko(miFunko);
 * ```
 */
export class FunkoManager {
  private userDir: string;

  /**
   * Constructor de FunkoManager.
   * @param username - Nombre del usuario/propietario de la colección
   * 
   * ```typescript
   * const manager = new FunkoManager("usuario1");
   * ```
   */
  constructor(private username: string) {
    this.userDir = path.join(__dirname, "..", "data", this.username);
    if (!fs.existsSync(this.userDir)) {
      fs.mkdirSync(this.userDir, { recursive: true });
    }
  }

  /**
   * Obtiene la ruta del archivo JSON para un Funko específico.
   * @param id - ID del Funko
   * @returns Ruta completa del archivo JSON
   * 
   * ```typescript
   * const path = manager.getFunkoPath(1);
   * ```
   */
  private getFunkoPath(id: number): string {
    return path.join(this.userDir, `${id}.json`);
  }

  /**
   * Añade un nuevo Funko a la colección.
   * @param funko - Objeto Funko a añadir
   * 
   * ```typescript
   * manager.addFunko({
   *   id: 1,
   *   name: "Batman",
   *   // ... otras propiedades
   * });
   * ```
   */
  public addFunko(funko: Funko): void {
    const funkoPath = this.getFunkoPath(funko.id);
    if (fs.existsSync(funkoPath)) {
      console.log(chalk.red("Error: Ya existe un Funko con este ID."));
      return;
    }
    fs.writeFileSync(funkoPath, JSON.stringify(funko, null, 2));
    console.log(chalk.green("Funko añadido correctamente."));
  }

  /**
   * Actualiza un Funko existente en la colección.
   * @param updatedFunko - Objeto Funko con los datos actualizados
   * 
   * ```typescript
   * manager.updateFunko({
   *   id: 1,
   *   name: "Batman Updated",
   *   // ... otras propiedades actualizadas
   * });
   * ```
   */
  public updateFunko(updatedFunko: Funko): void {
    const filePath = path.join(this.userDir, `${updatedFunko.id}.json`);

    if (!fs.existsSync(filePath)) {
      console.log("Error: No se encontró el Funko.");
      return;
    }

    fs.writeFileSync(filePath, JSON.stringify(updatedFunko, null, 2));
    console.log("Funko actualizado correctamente.");
  }

  /**
   * Elimina un Funko de la colección.
   * @param id - ID del Funko a eliminar
   * 
   * ```typescript
   * manager.removeFunko(1);
   * ```
   */
  public removeFunko(id: number): void {
    const funkoPath = this.getFunkoPath(id);
    if (!fs.existsSync(funkoPath)) {
      console.log(chalk.red("Error: No se encontró el Funko."));
      return;
    }
    fs.unlinkSync(funkoPath);
    console.log(chalk.green("Funko eliminado correctamente."));
  }

  /**
   * Lista todos los Funkos en la colección del usuario.
   * 
   * ```typescript
   * manager.listFunkos();
   * ```
   */
  public listFunkos(): void {
    const files = fs.readdirSync(this.userDir);
    if (files.length === 0) {
      console.log(chalk.yellow("No hay Funkos en la lista."));
      return;
    }
    files.forEach((file) => {
      const filePath = path.join(this.userDir, file);
      const funko: Funko = JSON.parse(fs.readFileSync(filePath, "utf-8"));
      this.displayFunko(funko);
    });
  }

  /**
   * Muestra los detalles de un Funko específico.
   * @param id - ID del Funko a mostrar
   * 
   * ```typescript
   * manager.showFunko(1);
   * ```
   */
  public showFunko(id: number): void {
    const funkoPath = this.getFunkoPath(id);
    if (!fs.existsSync(funkoPath)) {
      console.log(chalk.red("Error: No se encontró el Funko."));
      return;
    }
    const funko: Funko = JSON.parse(fs.readFileSync(funkoPath, "utf-8"));
    this.displayFunko(funko);
  }

  /**
   * Muestra los detalles de un Funko en la consola con formato.
   * @param funko - Objeto Funko a mostrar
   * @private
   * 
   * ```typescript
   * manager.displayFunko(miFunko);
   * ```
   */
  private displayFunko(funko: Funko): void {
    let color = chalk.white;
    if (funko.marketValue < 20) color = chalk.red;
    else if (funko.marketValue < 50) color = chalk.yellow;
    else if (funko.marketValue < 100) color = chalk.blue;
    else color = chalk.green;

    console.log(
      chalk.bold(`🔹 ${funko.name} (${funko.franchise}) - ${funko.type}`)
    );
    console.log(`  ID: ${funko.id}`);
    console.log(`  Descripción: ${funko.description}`);
    console.log(`  Género: ${funko.genre}`);
    console.log(`  Número: ${funko.number}`);
    console.log(`  Exclusivo: ${funko.exclusive ? "Sí" : "No"}`);
    console.log(`  Características: ${funko.specialFeatures}`);
    console.log(`  Valor de mercado: ` + color(`$${funko.marketValue}`));
    console.log("\n");
  }
}
import * as fs from "fs";
import * as path from "path";
import { fileURLToPath } from "url";
import chalk from "chalk";
import { Funko } from "../models/Funko.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export class FunkoManager {
  private userDir: string;

  constructor(private username: string) {
    this.userDir = path.join(__dirname, "..", "data", this.username);
    if (!fs.existsSync(this.userDir)) {
      fs.mkdirSync(this.userDir, { recursive: true });
    }
  }

  private getFunkoPath(id: number): string {
    return path.join(this.userDir, `${id}.json`);
  }

  public addFunko(funko: Funko): void {
    const funkoPath = this.getFunkoPath(funko.id);
    if (fs.existsSync(funkoPath)) {
      console.log(chalk.red("Error: Ya existe un Funko con este ID."));
      return;
    }
    fs.writeFileSync(funkoPath, JSON.stringify(funko, null, 2));
    console.log(chalk.green("Funko añadido correctamente."));
  }

   public updateFunko(updatedFunko: Funko): void {
    const filePath = path.join(this.userDir, `${updatedFunko.id}.json`);

    if (!fs.existsSync(filePath)) {
      console.log("Error: No se encontró el Funko.");
      return;
    }

    fs.writeFileSync(filePath, JSON.stringify(updatedFunko, null, 2));
    console.log("Funko actualizado correctamente.");
  }
  

  public removeFunko(id: number): void {
    const funkoPath = this.getFunkoPath(id);
    if (!fs.existsSync(funkoPath)) {
      console.log(chalk.red("Error: No se encontró el Funko."));
      return;
    }
    fs.unlinkSync(funkoPath);
    console.log(chalk.green("Funko eliminado correctamente."));
  }

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

  public showFunko(id: number): void {
    const funkoPath = this.getFunkoPath(id);
    if (!fs.existsSync(funkoPath)) {
      console.log(chalk.red("Error: No se encontró el Funko."));
      return;
    }
    const funko: Funko = JSON.parse(fs.readFileSync(funkoPath, "utf-8"));
    this.displayFunko(funko);
  }

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

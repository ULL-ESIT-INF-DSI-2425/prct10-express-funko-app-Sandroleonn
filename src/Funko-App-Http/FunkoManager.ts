import * as fs from "fs/promises";
import * as path from "path";
import { fileURLToPath } from "url";
import { Funko } from "./Funko.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export class FunkoManager {
  private userDir: string;

  constructor(private username: string) {
    this.userDir = path.join(__dirname, "..", "data", this.username);
  }

  public getUserDir(): string {
    return this.userDir;
  }

  public getFunkoPath(id: number): string {
    return path.join(this.userDir, `${id}.json`);
  }

  public async addFunko(funko: Funko): Promise<void> {
    const funkoPath = this.getFunkoPath(funko.id);
    try {
      await fs.access(this.userDir);
    } catch {
      await fs.mkdir(this.userDir, { recursive: true });
    }
    
    try {
      await fs.access(funkoPath);
      throw new Error("Ya existe un Funko con este ID.");
    } catch {
      await fs.writeFile(funkoPath, JSON.stringify(funko, null, 2));
    }
  }

  public async updateFunko(updatedFunko: Funko): Promise<void> {
    const filePath = this.getFunkoPath(updatedFunko.id);
    await fs.access(filePath);
    await fs.writeFile(filePath, JSON.stringify(updatedFunko, null, 2));
  }

  public async removeFunko(id: number): Promise<void> {
    const funkoPath = this.getFunkoPath(id);
    await fs.access(funkoPath);
    await fs.unlink(funkoPath);
  }

  public async listFunkos(): Promise<Funko[]> {
    const files = await fs.readdir(this.userDir);
    const funkos: Funko[] = [];
    
    for (const file of files) {
      const filePath = path.join(this.userDir, file);
      const data = await fs.readFile(filePath, "utf-8");
      funkos.push(JSON.parse(data));
    }
    
    return funkos;
  }

  public async showFunko(id: number): Promise<Funko> {
    const funkoPath = this.getFunkoPath(id);
    const data = await fs.readFile(funkoPath, "utf-8");
    return JSON.parse(data);
  }
}
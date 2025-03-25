import yargs from "yargs";
import { hideBin } from "yargs/helpers";
import { FunkoManager } from "./services/FunkoManager.js";
import { Funko, FunkoType, FunkoGenre } from "./models/Funko.js";

interface FunkoArgs {
  username: string;
  id: number;
  name?: string;
  description?: string;
  type?: FunkoType;
  genre?: FunkoGenre;
  franchise?: string;
  number?: number;
  exclusive?: boolean;
  specialFeatures?: string;
  marketValue?: number;
}

const funkoOptions = {
  username: { type: 'string' as const, demandOption: true },
  id: { type: 'number' as const, demandOption: true },
  name: { type: 'string' as const, demandOption: true },
  description: { type: 'string' as const, demandOption: true },
  type: { 
    type: 'string' as const, 
    choices: Object.values(FunkoType), 
    demandOption: true 
  },
  genre: { 
    type: 'string' as const, 
    choices: Object.values(FunkoGenre), 
    demandOption: true 
  },
  franchise: { type: 'string' as const, demandOption: true },
  number: { type: 'number' as const, demandOption: true },
  exclusive: { type: 'boolean' as const, demandOption: true },
  specialFeatures: { type: 'string' as const, demandOption: false },
  marketValue: { type: 'number' as const, demandOption: true }
};

function parseArgs<T>(args: unknown): T {
  return args as T;
}

yargs(hideBin(process.argv))
  .command("add", "Añadir un Funko", funkoOptions, (argv) => {
    const args = parseArgs<FunkoArgs>(argv);
    const manager = new FunkoManager(args.username);
    manager.addFunko(args as Funko);
  })
  .command("list", "Listar Funkos", {
  }, (argv) => {
    const args = parseArgs<{username: string}>(argv);
    const manager = new FunkoManager(args.username);
    manager.listFunkos();
  })
  .command("update", "Actualizar un Funko", funkoOptions, (argv) => {
    const args = parseArgs<FunkoArgs>(argv);
    const manager = new FunkoManager(args.username);
    manager.updateFunko(args as Funko);
  })
  .command("remove", "Eliminar un Funko", {
  }, (argv) => {
    const args = parseArgs<{username: string, id: number}>(argv);
    const manager = new FunkoManager(args.username);
    manager.removeFunko(args.id);
  })
  .command("read", "Mostrar un Funko", {
  }, (argv) => {
    const args = parseArgs<{username: string, id: number}>(argv);
    const manager = new FunkoManager(args.username);
    manager.showFunko(args.id);
  })
  .help()
  .parse();
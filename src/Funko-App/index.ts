// index.ts
import yargs from "yargs";
import { hideBin } from "yargs/helpers";
import { FunkoManager } from "./services/FunkoManager.js";
import { Funko, FunkoType, FunkoGenre } from "./models/Funko.js";

const argv = yargs(hideBin(process.argv))
  .command("add", "Añadir un Funko", {
    username: { type: "string", demandOption: true },
    id: { type: "number", demandOption: true },
    name: { type: "string", demandOption: true },
    description: { type: "string", demandOption: true },
    type: { type: "string", choices: Object.values(FunkoType), demandOption: true },
    genre: { type: "string", choices: Object.values(FunkoGenre), demandOption: true },
    franchise: { type: "string", demandOption: true },
    number: { type: "number", demandOption: true },
    exclusive: { type: "boolean", demandOption: true },
    specialFeatures: { type: "string", demandOption: false },
    marketValue: { type: "number", demandOption: true },
  }, (args) => {
    const manager = new FunkoManager(args.username);
    manager.addFunko(args as Funko);
  })
  .command("list", "Listar Funkos", {
    username: { type: "string", demandOption: true },
  }, (args) => {
    const manager = new FunkoManager(args.username);
    manager.listFunkos();
  })

  .command("update", "Actualizar un Funko", {
    username: { type: "string", demandOption: true },
    id: { type: "number", demandOption: true },
    name: { type: "string", demandOption: true },
    description: { type: "string", demandOption: true },
    type: { type: "string", choices: Object.values(FunkoType), demandOption: true },
    genre: { type: "string", choices: Object.values(FunkoGenre), demandOption: true },
    franchise: { type: "string", demandOption: true },
    number: { type: "number", demandOption: true },
    exclusive: { type: "boolean", demandOption: true },
    specialFeatures: { type: "string", demandOption: false },
    marketValue: { type: "number", demandOption: true },
  }, (args) => {
    const manager = new FunkoManager(args.username);
    manager.updateFunko(args as Funko);
  })

  .command("remove", "Eliminar un Funko", {
    username: { type: "string", demandOption: true },
    id: { type: "number", demandOption: true }
  }, (args) => {
    const manager = new FunkoManager(args.username);
    manager.removeFunko(args.id);
  })

  .command("read", "Mostrar un Funko", {
    username: { type: "string", demandOption: true },
    id: { type: "number", demandOption: true }
  }, (args) => {
    const manager = new FunkoManager(args.username);
    manager.showFunko(args.id);
  })


  .help()
  .argv;

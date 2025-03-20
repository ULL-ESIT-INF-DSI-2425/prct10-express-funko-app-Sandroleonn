import { describe, expect, test, beforeEach } from "vitest";
import { Logger } from "../src/modi-pr7/Logger";

describe("Logger", () => {
  beforeEach(() => {
    const logger = Logger.getInstance();
    (logger as any).actions = [];
  });
  test("debe crear una instancia única de Logger", () => {
    const logger1 = Logger.getInstance();
    const logger2 = Logger.getInstance();
    expect(logger1).toBe(logger2);
  });

  test("debe registrar una acción correctamente", () => {
    const logger = Logger.getInstance();
    logger.logAction("usuario1", "acción1");
    const actions = logger.getActionsByUser("usuario1");
    expect(actions.length).toBe(1);
    expect(actions[0]).toEqual(["usuario1", "acción1", expect.any(Date)]);
  });

  test("debe registrar múltiples acciones de usuarios diferentes", () => {
    const logger = Logger.getInstance();
    logger.logAction("usuario1", "acción1");
    logger.logAction("usuario2", "acción2");
    const actions1 = logger.getActionsByUser("usuario1");
    const actions2 = logger.getActionsByUser("usuario2");
    expect(actions1.length).toBe(1);
    expect(actions2.length).toBe(1);
  });

  test("debe obtener acciones por tipo correctamente", () => {
    const logger = Logger.getInstance();
    logger.logAction("usuario1", "login");
    logger.logAction("usuario2", "logout");
    const loginActions = logger.getActionsByType("login");
    const logoutActions = logger.getActionsByType("logout");
    expect(loginActions.length).toBe(1);
    expect(logoutActions.length).toBe(1);
  });

  test("debe obtener acciones en un rango de fechas", () => {
    const logger = Logger.getInstance();
    const now = new Date();
    const before = new Date(now.getTime() - 1000);
    const after = new Date(now.getTime() + 1000);

    logger.logAction("usuario1", "acción1");
    logger.logAction("usuario2", "acción2");
    const actionsInRange = logger.getActionsBetweenDates(before, after);
    expect(actionsInRange.length).toBe(2);
  });

  test("debe devolver el iterador de acciones", () => {
    const logger = Logger.getInstance();
    logger.logAction("usuario1", "acción1");
    logger.logAction("usuario2", "acción2");

    const iterator = logger.getActions();
    const actions = Array.from(iterator);
    expect(actions.length).toBe(2);
    expect(actions[0]).toEqual(["usuario1", "acción1", expect.any(Date)]);
    expect(actions[1]).toEqual(["usuario2", "acción2", expect.any(Date)]);
  });

  test("debe manejar correctamente las fechas", () => {
    const logger = Logger.getInstance();
    const timestamp = new Date(2025, 0, 1);
    logger.logAction("usuario1", "acción1");
    const actions = logger.getActionsBetweenDates(new Date(2024, 11, 31), new Date(2025, 0, 2));
    expect(actions.length).toBe(0);
    expect(actions[0]).toEqual(undefined);
  });

  test("debe filtrar las acciones correctamente por usuario", () => {
    const logger = Logger.getInstance();
    logger.logAction("usuario1", "acción1");
    logger.logAction("usuario1", "acción2");
    logger.logAction("usuario2", "acción1");
    const actions = logger.getActionsByUser("usuario1");
    expect(actions.length).toBe(2);
    expect(actions[0]).toEqual(["usuario1", "acción1", expect.any(Date)]);
    expect(actions[1]).toEqual(["usuario1", "acción2", expect.any(Date)]);
  });

  test("debe no devolver acciones si no existen para un usuario", () => {
    const logger = Logger.getInstance();
    logger.logAction("usuario1", "acción1");
    const actions = logger.getActionsByUser("usuario2");
    expect(actions.length).toBe(0);
  });

  test("debe devolver un arreglo vacío si no hay acciones dentro del rango de fechas", () => {
    const logger = Logger.getInstance();
    const now = new Date();
    const before = new Date(now.getTime() - 1000);
    const after = new Date(now.getTime() + 1000);   
    logger.logAction("usuario1", "acción1"); 
    const actionsInRange = logger.getActionsBetweenDates(before, after);
    expect(actionsInRange.length).toBe(1);
  });

  test("debe verificar que la instancia de Logger sea un singleton", () => {
    const logger1 = Logger.getInstance();
    const logger2 = Logger.getInstance();
    expect(logger1).toBe(logger2);
  });

  test("debe registrar correctamente acciones con fecha y tipo", () => {
    const logger = Logger.getInstance();
    const timestamp = new Date();
    logger.logAction("usuario1", "login");
    const actions = logger.getActionsByType("login");
    expect(actions.length).toBe(1);
    expect(actions[0][0]).toBe("usuario1");
    expect(actions[0][1]).toBe("login");
    expect(actions[0][2]).toEqual(expect.any(Date));
  });
});

import { describe, expect, test } from "vitest";
import { Bird, FlyingBird, Sparrow, Penguin } from "../src/ejercicio-6"; // Ajusta la ruta según la ubicación del código

// Pruebas para la clase Bird
describe("Bird", () => {
  test("debe emitir sonido correctamente", () => {
    const bird = new Bird();
    expect(() => bird.makeSound()).not.toThrow();
  });
});

// Pruebas para la clase FlyingBird
describe("FlyingBird", () => {
  test("debe emitir sonido correctamente", () => {
    const flyingBird = new FlyingBird();
    expect(() => flyingBird.makeSound()).not.toThrow();
  });

  test("debe volar correctamente", () => {
    const flyingBird = new FlyingBird();
    expect(() => flyingBird.fly()).not.toThrow();
  });
});

// Pruebas para la clase Sparrow
describe("Sparrow", () => {
  test("debe emitir sonido correctamente", () => {
    const sparrow = new Sparrow();
    expect(() => sparrow.makeSound()).not.toThrow();
  });

  test("debe volar correctamente", () => {
    const sparrow = new Sparrow();
    expect(() => sparrow.fly()).not.toThrow();
  });
});

// Pruebas para la clase Penguin
describe("Penguin", () => {
  test("debe emitir sonido correctamente", () => {
    const penguin = new Penguin();
    expect(() => penguin.makeSound()).not.toThrow();
  });

  test("debe nadar correctamente", () => {
    const penguin = new Penguin();
    expect(() => penguin.swim()).not.toThrow();
  });
});

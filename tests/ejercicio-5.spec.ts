import { describe, expect, test } from "vitest";
import { getSpiralMatrix } from "../src/ejercicio-5"; // Asegúrate de que la ruta sea la correcta

describe("Funciones de matrices espirales", () => {
  test("getSpiralMatrix(3) retorna la matriz espiral correcta", () => {
    const result = getSpiralMatrix(3);
    expect(result).toEqual([
      [1, 2, 3],
      [8, 9, 4],
      [7, 6, 5]
    ]);
  });

  test("getSpiralMatrix(4) retorna la matriz espiral correcta", () => {
    const result = getSpiralMatrix(4);
    expect(result).toEqual([
      [1, 2, 3, 4],
      [12, 13, 14, 5],
      [11, 16, 15, 6],
      [10, 9, 8, 7]
    ]);
  });

  test("getSpiralMatrix(1) retorna la matriz espiral correcta", () => {
    const result = getSpiralMatrix(1);
    expect(result).toEqual([
      [1]
    ]);
  });

  test("getSpiralMatrix(0) retorna undefined", () => {
    const result = getSpiralMatrix(0);
    expect(result).toBeUndefined();
  });

  test("getSpiralMatrix(-1) retorna undefined", () => {
    const result = getSpiralMatrix(-1);
    expect(result).toBeUndefined();
  });
});

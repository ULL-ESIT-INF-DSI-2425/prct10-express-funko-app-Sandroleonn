import { describe, it, expect } from 'vitest';
import { fromRangesToArray, fromArrayToRanges } from '../src/ejercicio-10'; // Ajusta el nombre del archivo donde estén las funciones

describe('Función fromRangesToArray', () => {

  it('debe convertir una cadena con rangos en un array de números', () => {
    const result = fromRangesToArray("5_7, 9, 12_14");
    expect(result).toEqual([5, 6, 7, 9, 12, 13, 14]);
  });

  it('debe convertir una cadena con un solo número en un array con ese número', () => {
    const result = fromRangesToArray("17");
    expect(result).toEqual([17]);
  });

  it('debe convertir una cadena con un solo número en un array con ese número', () => {
    const result = fromRangesToArray("16");
    expect(result).toEqual([16]);
  });

  it('debe convertir una cadena con varios números individuales en un array de esos números', () => {
    const result = fromRangesToArray("3, 5, 7");
    expect(result).toEqual([3, 5, 7]);
  });

  it('debe convertir una cadena con rangos negativos en un array con esos números', () => {
    const result = fromRangesToArray("-3_-1, 3, 5_7");
    expect(result).toEqual([-3, -2, -1, 3, 5, 6, 7]);
  });

  it('debe manejar un caso con rangos no contiguos', () => {
    const result = fromRangesToArray("5_7, 9_10");
    expect(result).toEqual([5, 6, 7, 9, 10]);
  });
});

describe('Función toRanges', () => {

  it('debe convertir un array de números en una cadena de rangos', () => {
    const result = fromArrayToRanges([5, 6, 7, 9, 12, 13, 14]);
    expect(result).toEqual("5_7, 9, 12_14");
  });

  it('debe convertir un array de un solo número en una cadena con ese número', () => {
    const result = fromArrayToRanges([17]);
    expect(result).toEqual("17");
  });

  it('debe convertir un array de varios números individuales en una cadena', () => {
    const result = fromArrayToRanges([3, 5, 7]);
    expect(result).toEqual("3, 5, 7");
  });

  it('debe convertir un array de números con rangos negativos en una cadena', () => {
    const result = fromArrayToRanges([-3, -2, -1, 3, 5, 6, 7]);
    expect(result).toEqual("-3_-1, 3, 5_7");
  });

  it('debe manejar un array con rangos no contiguos correctamente', () => {
    const result = fromArrayToRanges([5, 6, 7, 9, 10]);
    expect(result).toEqual("5_7, 9_10");
  });
});

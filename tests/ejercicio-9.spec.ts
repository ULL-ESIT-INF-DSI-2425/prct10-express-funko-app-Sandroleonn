import { describe, expect, test } from 'vitest';
import { append, concatenate, filter, length, map, reduce, reverse } from '../src/ejercicio-9';

describe('Funciones de listas', () => {

  // Test para append
  test('append debe agregar los elementos de lista2 al final de lista1', () => {
    const lista1 = [1, 2, 3];
    const lista2 = [4, 5, 6];
    expect(append(lista1, lista2)).toEqual([1, 2, 3, 4, 5, 6]);

    const lista1Str = ['a', 'b', 'c'];
    const lista2Str = ['d', 'e', 'f'];
    expect(append(lista1Str, lista2Str)).toEqual(['a', 'b', 'c', 'd', 'e', 'f']);
  });

  // Test para concatenate
  test('concatenate debe concatenar múltiples listas', () => {
    const lista1 = [1, 2];
    const lista2 = [3, 4];
    const lista3 = [5, 6];
    expect(concatenate(lista1, lista2, lista3)).toEqual([1, 2, 3, 4, 5, 6]);

    const lista1Str = ['a', 'b'];
    const lista2Str = ['c', 'd'];
    expect(concatenate(lista1Str, lista2Str)).toEqual(['a', 'b', 'c', 'd']);
  });

  // Test para filter
  test('filter debe devolver solo los elementos que cumplen con el predicado', () => {
    const lista = [1, 2, 3, 4, 5];
    const predicado = (x: number) => x % 2 === 0;
    expect(filter(lista, predicado)).toEqual([2, 4]);

    const listaStr = ['apple', 'banana', 'cherry'];
    const predicadoStr = (x: string) => x.startsWith('b');
    expect(filter(listaStr, predicadoStr)).toEqual(['banana']);
  });

  // Test para length
  test('length debe devolver el número de elementos en la lista', () => {
    expect(length([1, 2, 3])).toBe(3);
    expect(length(['a', 'b', 'c', 'd'])).toBe(4);
    expect(length([])).toBe(0);
  });

  // Test para map
  test('map debe devolver una lista con los resultados de aplicar la función', () => {
    const lista = [1, 2, 3];
    const func = (x: number) => x * 2;
    expect(map(lista, func)).toEqual([2, 4, 6]);

    const listaStr = ['a', 'b', 'c'];
    const funcStr = (x: string) => x.toUpperCase();
    expect(map(listaStr, funcStr)).toEqual(['A', 'B', 'C']);
  });

  // Test para reduce
  test('reduce debe acumular los valores de la lista aplicando la función', () => {
    const lista = [1, 2, 3, 4];
    const sum = (accum: number, item: number) => accum + item;
    expect(reduce(lista, sum, 0)).toBe(10);

    const listaStr = ['a', 'b', 'c'];
    const concatenar = (accum: string, item: string) => accum + item;
    expect(reduce(listaStr, concatenar, '')).toBe('abc');
  });

  // Test para reverse
  test('reverse debe devolver la lista en orden inverso', () => {
    const lista = [1, 2, 3];
    expect(reverse(lista)).toEqual([3, 2, 1]);

    const listaStr = ['a', 'b', 'c'];
    expect(reverse(listaStr)).toEqual(['c', 'b', 'a']);
  });
});

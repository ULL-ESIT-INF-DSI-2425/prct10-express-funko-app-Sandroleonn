import { describe, expect, test } from "vitest";
import { NumericPrintableCollection, StringPrintableCollection } from "../src/modificación-Clase";

describe("PrintableCollection", () => {
  test("debe agregar y recuperar elementos correctamente", () => {
    const collection = new StringPrintableCollection();
    collection.addItem("Item 1");
    collection.addItem("Item 2");
    expect(collection.getNumberOfItems()).toBe(2);
    expect(collection.getItem(0)).toBe("Item 1");
    expect(collection.getItem(1)).toBe("Item 2");
  });

  test("debe eliminar un elemento correctamente", () => {
    const collection = new StringPrintableCollection();
    collection.addItem("Item 1");
    collection.addItem("Item 2");
    collection.removeItem(0);
    expect(collection.getNumberOfItems()).toBe(1);
    expect(collection.getItem(0)).toBe("Item 2");
  });

  test("debe devolver el número correcto de elementos", () => {
    const collection = new StringPrintableCollection();
    collection.addItem("Item 1");
    collection.addItem("Item 2");
    collection.addItem("Item 3");
    expect(collection.getNumberOfItems()).toBe(3);
  });

  test("debe devolver 0 cuando no hay elementos", () => {
    const collection = new StringPrintableCollection();
    expect(collection.getNumberOfItems()).toBe(0);
  });

  test("debe imprimir la colección de strings correctamente", () => {
    const collection = new StringPrintableCollection();
    collection.addItem("Item 1");
    collection.addItem("Item 2");
    collection.addItem("Item 3");
    expect(collection.print()).toBe("Item 1, Item 2, Item 3");
  });

  test("debe imprimir la colección con un solo string correctamente", () => {
    const collection = new StringPrintableCollection();
    collection.addItem("Item 1");
    expect(collection.print()).toBe("Item 1");
  });

  test("debe imprimir la colección vacía correctamente", () => {
    const collection = new StringPrintableCollection();
    expect(collection.print()).toBe("");
  });

  test("debe devolver undefined si se intenta obtener un ítem fuera de rango", () => {
    const collection = new StringPrintableCollection();
    collection.addItem("Item 1");
    collection.addItem("Item 2");
    expect(collection.getItem(3)).toBeUndefined();
  });

  test("debe agregar y recuperar elementos numéricos correctamente", () => {
    const collection = new NumericPrintableCollection();
    collection.addItem(1);
    collection.addItem(2);
    expect(collection.getNumberOfItems()).toBe(2);
    expect(collection.getItem(0)).toBe(1);
    expect(collection.getItem(1)).toBe(2);
  });

  test("debe eliminar un elemento numérico correctamente", () => {
    const collection = new NumericPrintableCollection();
    collection.addItem(1);
    collection.addItem(2);
    collection.removeItem(0);
    expect(collection.getNumberOfItems()).toBe(1);
    expect(collection.getItem(0)).toBe(2);
  });

  test("debe imprimir la colección de números correctamente", () => {
    const collection = new NumericPrintableCollection();
    collection.addItem(1);
    collection.addItem(2);
    collection.addItem(3);
    expect(collection.print()).toBe("1, 2, 3");
  });

  test("debe imprimir la colección con un solo número correctamente", () => {
    const collection = new NumericPrintableCollection();
    collection.addItem(1);
    expect(collection.print()).toBe("1");
  });

  test("debe imprimir la colección vacía correctamente (números)", () => {
    const collection = new NumericPrintableCollection();
    expect(collection.print()).toBe("");
  });

  test("debe devolver undefined si se intenta obtener un ítem fuera de rango (números)", () => {
    const collection = new NumericPrintableCollection();
    collection.addItem(1);
    collection.addItem(2);
    expect(collection.getItem(3)).toBeUndefined();
  });

  test("debe devolver el número correcto de elementos después de varias eliminaciones", () => {
    const collection = new StringPrintableCollection();
    collection.addItem("Item 1");
    collection.addItem("Item 2");
    collection.addItem("Item 3");
    collection.removeItem(1);
    collection.removeItem(0); 
    expect(collection.getNumberOfItems()).toBe(1);
    expect(collection.getItem(0)).toBe("Item 3");
  });
  
  test("debe agregar varios elementos y devolver el número correcto de elementos", () => {
    const collection = new NumericPrintableCollection();
    collection.addItem(10);
    collection.addItem(20);
    collection.addItem(30);
    expect(collection.getNumberOfItems()).toBe(3);
  });

  test("debe devolver undefined si se intenta obtener un ítem en una colección vacía", () => {
    const collection = new NumericPrintableCollection();
    expect(collection.getItem(0)).toBeUndefined();
  });

  test("debe eliminar correctamente el último elemento", () => {
    const collection = new StringPrintableCollection();
    collection.addItem("Item 1");
    collection.addItem("Item 2");
    collection.removeItem(1);
    expect(collection.getNumberOfItems()).toBe(1);
    expect(collection.getItem(0)).toBe("Item 1");
  });

});

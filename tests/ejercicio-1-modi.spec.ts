import { describe, expect, test } from "vitest";
import { NumericPrintableCollection } from "../src/modi-pr6/modificación-ClaseNumeric";
import { StringPrintableCollection } from "../src/modi-pr6/modificación-ClaseString";

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
  test("debe verificar si el método addItem existe", () => {
    const collection = new StringPrintableCollection();
    expect(typeof collection.addItem).toBe("function");
  });

  test("debe verificar si el método removeItem existe", () => {
    const collection = new StringPrintableCollection();
    expect(typeof collection.removeItem).toBe("function");
  });

  test("debe verificar si el método getItem existe", () => {
    const collection = new StringPrintableCollection();
    expect(typeof collection.getItem).toBe("function");
  });

  test("debe verificar si el método getNumberOfItems existe", () => {
    const collection = new StringPrintableCollection();
    expect(typeof collection.getNumberOfItems).toBe("function");
  });

  test("debe verificar si el método print existe", () => {
    const collection = new StringPrintableCollection();
    expect(typeof collection.print).toBe("function");
  });

  test("debe no modificar la colección al intentar eliminar un ítem fuera de rango", () => {
    const collection = new StringPrintableCollection();
    collection.addItem("Item 1");
    collection.addItem("Item 2");
    collection.removeItem(3);
    expect(collection.getNumberOfItems()).toBe(2);
    expect(collection.getItem(0)).toBe("Item 1");
    expect(collection.getItem(1)).toBe("Item 2");
  });

  test("debe agregar elementos vacíos a la colección correctamente", () => {
    const collection = new StringPrintableCollection();
    collection.addItem("");
    collection.addItem("Item 1");
    expect(collection.getNumberOfItems()).toBe(2);
    expect(collection.getItem(0)).toBe("");
    expect(collection.getItem(1)).toBe("Item 1");
  });

  test("debe verificar si el método addItem devuelve undefined", () => {
    const collection = new StringPrintableCollection();
    const result = collection.addItem("Item 1");
    expect(result).toBeUndefined();
  });

  test("debe no permitir eliminar un ítem fuera de rango", () => {
    const collection = new StringPrintableCollection();
    collection.addItem("Item 1");
    collection.addItem("Item 2");
    const result = collection.removeItem(5);
    expect(collection.getNumberOfItems()).toBe(2);
  });

  test("debe devolver undefined al obtener un ítem fuera de rango con un mensaje adecuado", () => {
    const collection = new StringPrintableCollection();
    collection.addItem("Item 1");
    const result = collection.getItem(3); 
    expect(result).toBeUndefined();
  });

  test("debe permitir la eliminación de todos los elementos", () => {
    const collection = new StringPrintableCollection();
    collection.addItem("Item 1");
    collection.addItem("Item 2");
    collection.removeItem(0);
    collection.removeItem(0);
    expect(collection.getNumberOfItems()).toBe(0);
  });

  test("debe manejar la impresión de una colección de números con valores negativos correctamente", () => {
    const collection = new NumericPrintableCollection();
    collection.addItem(-1);
    collection.addItem(-2);
    collection.addItem(-3);
    expect(collection.print()).toBe("-1, -2, -3");
  });

  test("debe verificar que la colección esté vacía después de eliminar todos los elementos", () => {
    const collection = new StringPrintableCollection();
    collection.addItem("Item 1");
    collection.addItem("Item 2");
    collection.removeItem(0);
    collection.removeItem(0);
    expect(collection.getNumberOfItems()).toBe(0);
    expect(collection.print()).toBe("");
  });
});

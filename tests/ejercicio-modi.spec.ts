import { describe, test, expect } from 'vitest';
import { Producto, Alimento, Bebida } from '../src/ejercicio-modi';

class ProductoConcreto extends Producto {
    showInfo(): string {
        return (`ID: ${this.getID()}, Nombre: ${this.getNombre()}, Nutrición: ${this.getNutricional()}, Nutriscore: ${this.getNutriscore()}`);
    }
}

describe('Producto', () => {
    test('debería crear una instancia de Producto correctamente', () => {
        const producto = new ProductoConcreto("7865A", "Galleta", "200 kcal por 100g", "B");
        expect(producto.getID()).toBe("7865A");
        expect(producto.getNombre()).toBe("Galleta");
        expect(producto.getNutricional()).toBe("200 kcal por 100g");
        expect(producto.getNutriscore()).toBe("B");
    });

    test('debería permitir cambiar el ID con el setter', () => {
        const producto = new ProductoConcreto("7865A", "Galleta", "200 kcal por 100g", "B");
        producto.setID("1234B");
        expect(producto.getID()).toBe("1234B");
    });

    test('debería permitir cambiar el nombre con el setter', () => {
        const producto = new ProductoConcreto("7865A", "Galleta", "200 kcal por 100g", "B");
        producto.setNombre("Galleta de chocolate");
        expect(producto.getNombre()).toBe("Galleta de chocolate");
    });

    test('debería permitir cambiar la información nutricional con el setter', () => {
        const producto = new ProductoConcreto("7865A", "Galleta", "200 kcal por 100g", "B");
        producto.setNutricional("250 kcal por 100g");
        expect(producto.getNutricional()).toBe("250 kcal por 100g");
    });

    test('debería permitir cambiar el Nutriscore con el setter', () => {
        const producto = new ProductoConcreto("7865A", "Galleta", "200 kcal por 100g", "B");
        producto.setNutriscore("A");
        expect(producto.getNutriscore()).toBe("A");
    });

});

describe('Alimento', () => {
    test('debería crear una instancia de Alimento correctamente', () => {
        const alimento = new Alimento("7865A", "Galleta", "200 kcal por 100g", "B", 300);
        expect(alimento.getID()).toBe("7865A");
        expect(alimento.getNombre()).toBe("Galleta");
        expect(alimento.getNutricional()).toBe("200 kcal por 100g");
        expect(alimento.getNutriscore()).toBe("B");
        expect(alimento.getCantidadGramos()).toBe(300);
    });

    test('muestra la información de show_info', () => {
        const alimento = new Alimento("7865A", "Galleta", "200 kcal por 100g", "B", 300);
        alimento.showInfo();
        expect(alimento.showInfo()).toBe(`Alimento: Galleta ID: 7865A Nutrición: 200 kcal por 100g Nutriscore: B Cantidad: 300 gramos`);
    });

    test('debería permitir cambiar el ID con el setter', () => {
        const alimento = new Alimento("7865A", "Galleta", "200 kcal por 100g", "B", 300);
        alimento.setID("1234B");
        expect(alimento.getID()).toBe("1234B");
    });

    test('debería permitir cambiar el nombre con el setter', () => {
        const alimento = new Alimento("7865A", "Galleta", "200 kcal por 100g", "B", 300);
        alimento.setNombre("Galleta de chocolate");
        expect(alimento.getNombre()).toBe("Galleta de chocolate");
    });

    test('debería permitir cambiar la información nutricional con el setter', () => {
        const alimento = new Alimento("7865A", "Galleta", "200 kcal por 100g", "B", 300);
        alimento.setNutricional("250 kcal por 100g");
        expect(alimento.getNutricional()).toBe("250 kcal por 100g");
    });

    test('debería permitir cambiar el Nutriscore con el setter', () => {
        const alimento = new Alimento("7865A", "Galleta", "200 kcal por 100g", "B", 300);
        alimento.setNutriscore("A");
        expect(alimento.getNutriscore()).toBe("A");
    });

    test('debería permitir cambiar el cantidadGramos con el setter', () => {
        const alimento = new Alimento("7865A", "Galleta", "200 kcal por 100g", "B", 300);
        alimento.setCantidadGramos(500);
        expect(alimento.getCantidadGramos()).toBe(500);
    });

});

describe('Bebida', () => {
    test('debería crear una instancia de Bebida correctamente', () => {
        const bebida = new Bebida("7865A", "Leche", "200 kcal por 100ml", "B", 300);
        expect(bebida.getID()).toBe("7865A");
        expect(bebida.getNombre()).toBe("Leche");
        expect(bebida.getNutricional()).toBe("200 kcal por 100ml");
        expect(bebida.getNutriscore()).toBe("B");
        expect(bebida.getCantidadMililitros()).toBe(300);
    });

    test('muestra la información de show_info', () => {
        const bebida = new Bebida("7865A", "Leche", "200 kcal por 100ml", "B", 300);
        bebida.showInfo();
        expect(bebida.showInfo()).toBe(`Bebida: Leche ID: 7865A Nutrición: 200 kcal por 100ml Nutriscore: B Cantidad: 300 mililitros`);
    });

    test('debería permitir cambiar el ID con el setter', () => {
        const bebida = new Bebida("7865A", "Leche", "200 kcal por 100ml", "B", 300);
        bebida.setID("1234B");
        expect(bebida.getID()).toBe("1234B");
    });

    test('debería permitir cambiar el nombre con el setter', () => {
        const bebida = new Bebida("7865A", "Leche", "200 kcal por 100ml", "B", 300);
        bebida.setNombre("Leche de chocolate");
        expect(bebida.getNombre()).toBe("Leche de chocolate");
    });

    test('debería permitir cambiar la información nutricional con el setter', () => {
        const bebida = new Bebida("7865A", "Leche", "200 kcal por 100ml", "B", 300);
        bebida.setNutricional("250 kcal por 100ml");
        expect(bebida.getNutricional()).toBe("250 kcal por 100ml");
    });

    test('debería permitir cambiar el Nutriscore con el setter', () => {
        const bebida = new Bebida("7865A", "Leche", "200 kcal por 100ml", "B", 300);
        bebida.setNutriscore("A");
        expect(bebida.getNutriscore()).toBe("A");
    });

    test('debería permitir cambiar el cantidadGramos con el setter', () => {
        const bebida = new Bebida("7865A", "Leche", "200 kcal por 100ml", "B", 300);
        bebida.setCantidadMililitros(500);
        expect(bebida.getCantidadMililitros()).toBe(500);
    });
});



import { Collectable, Printable } from "./modificacion-Interfaz1.js"
/**
   * Clase abstracta que implementa los métodos de las interfaces anteriores
   * 
   * @param items - Atributo protected que almacena un array genérico de elementos.
*/
export abstract class PrintableCollection<T> implements Collectable<T>, Printable {
    protected items:T[] = [];

    /**
     * Método que añade un item a la colección 
     * 
     * @param item - Contiene un elemento a añadir a la colección.
    */
    addItem(item: T): void {
        this.items.push(item);
    }

     /**
     * Método que obtiene un item de la colección
     * 
     * @param index - Contiene la posición del elemento en la colección
     * @return - Retorna el elemento ubicado en la posición index o retorna undefined si no hay ningún elemento en esa posición.
    */
    getItem(index: number): T | undefined {
        return this.items[index];
    }

     /**
     * Método que elimina un item de la colección
     * 
     * @param index - Contiene la posición del elemento a eliminar en la colección
     * 
    */
    removeItem(index: number): void {
        this.items.splice(index, 1);
    }

    /**
     * Método que obtiene el número de items de una colección
     * 
     * @return - Retorna un valor de tipo number que contiene el número de elementos de la colección
    */
    getNumberOfItems(): number {
        return this.items.length;
    }

    /**
     * Método abstracto para imprimir la colección
     * 
     * @return - Retorna un string con la colección separada por comas.
    */
    abstract print(): string;
}

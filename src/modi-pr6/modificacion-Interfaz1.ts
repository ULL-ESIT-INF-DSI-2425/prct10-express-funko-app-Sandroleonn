/**
   * Interfaz genérica que contiene diferentes métodos para manejar una colección
   * 
   * @method addItem - Método que añade un item a la colección
   * @method getItem - Método que obtiene un item de la colección
   * @method removeItem - Método que elimina un item de la colección
   * @method getNumberOfItems - Método que obtiene el número de items de una colección
*/
export interface Collectable<T> {

    /**
     * Método que añade un item a la colección 
     * 
     * @param item - Contiene un elemento a añadir a la colección.
    */
    addItem(item: T): void;

    /**
     * Método que obtiene un item de la colección
     * 
     * @param index - Contiene la posición del elemento en la colección
     * @return - Retorna el elemento ubicado en la posición index o retorna undefined si no hay ningún elemento en esa posición.
    */
    getItem(index: number): T | undefined;

    /**
     * Método que elimina un item de la colección
     * 
     * @param index - Contiene la posición del elemento a eliminar en la colección
     * 
    */
    removeItem(index: number): void;

    /**
     * Método que obtiene el número de items de una colección
     * 
     * @return - Retorna un valor de tipo number que contiene el número de elementos de la colección
    */
    getNumberOfItems(): number;
}

/**
   * Interfaz concreta que contiene un método para imprimir la colección
   * 
   * @method print - Método que retorna un string con la colección
*/
export interface Printable {
    /**
     * Método  para imprimir la colección
     * 
     * @return - Retorna un string con la colección separada por comas.
    */
    print(): string;
}

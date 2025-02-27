/**
 * Clase Producto para alimentos y bebidas
 * 
 * @param id - Identificador del producto
 * @param nombre - Nombre del producto
 * @param informacionNutricional - Indica la información nutricional del producto
 * @param nutriscore - Indica el sistema de etiquetado del producto
 * 
 * ```typescript
 * const producto = new Producto("7865A", "Galleta", "200kcal por 100g", "A");
 * ```
 */
export abstract class Producto {
    private id: string;
    private nombre: string;
    private informacionNutricional: string;
    private nutriscore: string;

    constructor(id: string, nombre: string, informacionNutricional: string, nutriscore: string) {
        this.id = id;
        this.nombre = nombre;
        this.informacionNutricional = informacionNutricional;
        this.nutriscore = nutriscore;
    }

    getID(): string {
        return this.id;
    }

    getNombre(): string {
        return this.nombre;
    }

    getNutricional(): string {
        return this.informacionNutricional;
    }

    getNutriscore(): string {
        return this.nutriscore;
    }

    setID(id: string): void {
        this.id = id;
    }

    setNombre(nombre: string): void {
        this.nombre = nombre;
    }

    setNutricional(informacionNutricional: string): void {
        this.informacionNutricional = informacionNutricional;
    }

    setNutriscore(nutriscore: string): void {
        this.nutriscore = nutriscore;
    }

    abstract showInfo(): string;
}

/**
 * Clase Alimento para contener las características del alimento
 * 
 * @param id - Identificador del producto
 * @param nombre - Nombre del producto
 * @param informacionNutricional - Indica la información nutricional del producto
 * @param nutriscore - Indica el sistema de etiquetado del producto
 * @param cantidadGramos - Indica los gramos que tiene el alimento
 * 
 * ```typescript
 * const alimento = new ALimento("7865A", "Galleta", "200kcal por 100g", "A", 300);
 * ```
 */

export class Alimento extends Producto {
    private cantidadGramos: number;

    constructor(id: string, nombre: string, informacionNutricional: string, nutriscore: string, cantidadGramos: number) {
      super(id, nombre, informacionNutricional, nutriscore);
      this.cantidadGramos = cantidadGramos;
    }

  getCantidadGramos(): number {
      return this.cantidadGramos;
  }

  setCantidadGramos(cantidad: number): void {
      this.cantidadGramos = cantidad;
  }

  showInfo(): string {
      return(`Alimento: ${this.getNombre()} ID: ${this.getID()} Nutrición: ${this.getNutricional()} Nutriscore: ${this.getNutriscore()} Cantidad: ${this.cantidadGramos} gramos`);
  }
}

/**
 * Clase Bebida para contener las características de una bebida.
 * 
 * @param id - Identificador del producto
 * @param nombre - Nombre del producto
 * @param informacionNutricional - Indica la información nutricional del producto
 * @param nutriscore - Indica el sistema de etiquetado del producto
 * @param cantidadMililitros - Indica los mililitros de la bebida
 * 
 * ```typescript
 * const bebida = new Bebida("7864B", "Leche", "200kcal por 100ml", "A", 100);
 * ```
 */
export class Bebida extends Producto {
    private cantidadMililitros: number;

    constructor(id: string, nombre: string, informacionNutricional: string, nutriscore: string, cantidadMililitros: number) {
      super(id, nombre, informacionNutricional, nutriscore);
      this.cantidadMililitros = cantidadMililitros;
    }

  getCantidadMililitros(): number {
      return this.cantidadMililitros;
  }

  setCantidadMililitros(cantidad: number): void {
      this.cantidadMililitros = cantidad;
  }

  showInfo(): string {
      return(`Bebida: ${this.getNombre()} ID: ${this.getID()} Nutrición: ${this.getNutricional()} Nutriscore: ${this.getNutriscore()} Cantidad: ${this.cantidadMililitros} mililitros`);
  }
}
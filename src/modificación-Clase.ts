import { PrintableCollection} from "../src/ejercicio1-modi"

/**
   * Subclase que contiene un método para imprimir elementos númericos
   * 
   * @method print - Método que devuelve una cadena de elementos de tipo numérico
*/
export class NumericPrintableCollection extends PrintableCollection<number> {
    /**
     * Método  para imprimir la colección
     * 
     * @return - Retorna un string con la colección separada por comas.
    */
    print(): string {
      return this.items.join(', ');
    }
  }

/**
   * Subclase que contiene un método para imprimir elementos de tipo string
   * 
   * @method print - Método que devuelve una cadena de elementos de tipo string
*/
export class StringPrintableCollection extends PrintableCollection<string> {
    /**
     * Método  para imprimir la colección
     * 
     * @return - Retorna un string con la colección separada por comas.
    */
    print(): string {
      return this.items.join(', ');
    }
}
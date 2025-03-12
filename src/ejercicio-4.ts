/**
 * Interfaz que define la funcionalidad de impresión.
 */
interface Printable {
    /**
     * Realiza la acción de impresión.
     */
    print(): void;
}

/**
 * Interfaz que define la funcionalidad de escaneo.
 */
interface Scannable {
    /**
     * Realiza la acción de escaneo.
     */
    scan(): void;
}

/**
 * Representa una impresora que solo puede imprimir.
 * 
 * ```typescript
 * const printer = new Printer();
 * printer.print(); // "Printing..."
 * ```
 */
export class Printer implements Printable {
    /**
     * Imprime un documento.
     */
    print(): void {
      console.log('Printing...');
    }
}

/**
 * Representa un escáner que solo puede escanear.
 * 
 * ```typescript
 * const scanner = new Scanner();
 * scanner.scan(); // "Scanning..."
 * ```
 */
export class Scanner implements Scannable {
    /**
     * Escanea un documento.
     */
    scan(): void {
      console.log('Scanning...');
    }
}

/**
 * Representa un dispositivo multifunción que puede imprimir y escanear.
 * 
 * ```typescript
 * const printerScanner = new PrinterScanner();
 * printerScanner.print(); // "Printing..."
 * printerScanner.scan();  // "Scanning..."
 * ```
 */
export class PrinterScanner implements Printable, Scannable {
    /**
     * Imprime un documento.
     */
    print(): void {
      console.log('Printing...');
    }

    /**
     * Escanea un documento.
     */
    scan(): void {
      console.log('Scanning...');
    }
}

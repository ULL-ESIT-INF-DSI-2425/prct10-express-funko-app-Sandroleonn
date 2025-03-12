/**
 * Interfaz que define el comportamiento de un ave que puede volar.
 * 
 * ```typescript
 * class Eagle implements Flyable {
 *   fly(): void {
 *     console.log("Flying high...");
 *   }
 * }
 * 
 * const eagle = new Eagle();
 * eagle.fly(); // "Flying high..."
 * ```
 */
interface Flyable {
    /**
     * Permite que un ave vuele.
     */
    fly(): void;
}
  
/**
 * Representa un ave genérica con la capacidad de emitir sonidos.
 * 
 * ```typescript
 * const bird = new Bird();
 * bird.makeSound(); // "Chirp chirp..."
 * ```
 */
export class Bird {
    /**
     * Hace que el ave emita un sonido característico.
     */
    makeSound(): void {
      console.log("Chirp chirp...");
    }
}

/**
 * Representa un ave que puede volar, extendiendo el comportamiento de `Bird`.
 * 
 * ```typescript
 * const flyingBird = new FlyingBird();
 * flyingBird.fly(); // "Flying..."
 * flyingBird.makeSound(); // "Chirp chirp..."
 * ```
 */
export class FlyingBird extends Bird implements Flyable {
    /**
     * Permite que el ave vuele.
     */
    fly(): void {
      console.log("Flying...");
    }
}
  
/**
 * Representa un gorrión, un tipo de ave voladora.
 * 
 * ```typescript
 * const sparrow = new Sparrow();
 * sparrow.fly(); // "Flying..."
 * sparrow.makeSound(); // "Chirp chirp..."
 * ```
 */
export class Sparrow extends FlyingBird {}
  
/**
 * Representa un pingüino, un tipo de ave que no vuela pero puede nadar.
 * 
 * ```typescript
 * const penguin = new Penguin();
 * penguin.swim(); // "Swimming..."
 * penguin.makeSound(); // "Chirp chirp..."
 * ```
 */
export class Penguin extends Bird {
    /**
     * Permite que el pingüino nade.
     */
    swim(): void {
      console.log("Swimming...");
    }
}

  
  

type Clasificacion = "perfecto" | "abundante" | "deficiente" | undefined;

/**
 * Esta función calcula la suma de los divisores de un número
 * @param numero - Variable number que contiene el número del que sacar los divisores.
 * @returns - Retorna un valor number con la suma de los divisores
 * ```typescript
 * sumaDivisores(6) = 6;
 * sumaDivisores(10) = 8;
 * ```
 */
function sumaDivisores(numero: number): number {
  let sumaDivisores = 0;
  for (let i = 1; i <= Math.floor(numero / 2); i++) {
    if (numero % i === 0) {
      sumaDivisores += i;
    }
  }
  return sumaDivisores;
}

/**
 * Esta función comprueba si un número es perfecto (la suma de sus divisores es igual al número), abundante (la suma
 * es mayor al número) o deficiente (la suma es menor al número).
 * @param numero - Variable number o string que contiene un número o una cadena que representa al numero
 * @returns - Retorna un tipo clasificación (que contiene los tipos "perfecto", "abundante", "deficiente" o undefined)
 * que especifica como es el número
 * ```typescript
 * performNichomachusClassification(6) = "perfecto";
 * performNichomachusClassification(12) = "abundante";
 * performNichomachusClassification(10) = "deficiente";
 * performNichomachusClassification(10.5) = "undefined";
 * ```
 */
function performNichomachusClassification(numero: number | string): Clasificacion {
  if (typeof numero === "string") {
    numero = parseInt(numero, 10);
  }
  if ( numero <= 0 || !Number.isInteger(numero)) {
    return undefined;
  }

  if (sumaDivisores(numero) === numero) {
    return "perfecto";
  } else if (sumaDivisores(numero) > numero) {
    return "abundante";
  } else {
    return "deficiente";
  }
}

console.log(performNichomachusClassification(6));      
console.log(performNichomachusClassification(12));
console.log(performNichomachusClassification("10")); // 10 / 2 = 5; bucle (i desde 1 hasta 5); 1+2+5= 8
console.log(performNichomachusClassification(10.5));
console.log(performNichomachusClassification("abc"));


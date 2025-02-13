/**
 * Esta función comprueba que la cadena esta en formato snake_case
 * @param str - Variable string que contiene la cadena
 * @returns - Retorna un valor booleano si la cadena está en el formato o no
 * ```typescript
 * isSnakeCase(the_stealth_warrior") = "true";
 * isSnakeCase(The_stealth_warrior") = "false";
 * ```
 */
function isSnakeCase(str: string): boolean {
  return /^[a-z]+(_[a-z]+)*$/.test(str);
}
/**
 * Esta función comprueba que la cadena esta en formato camelCase
 * @param str - Variable string que contiene la cadena
 * @returns - Retorna un valor booleano si la cadena está en el formato o no
 * ```typescript
 * isCamelCase("theStealthWarrior") = "true";
 * isCamelCase("the_StealthWarrior") = "false";
 * ```
 */
function isCamelCase(str: string): boolean {
  return /^[a-z]+([A-Z][a-z]*)*$/.test(str);
}

/**
 * Esta función convierte una cadena en formato snake_case a camelCase.
 * @param str - Variable string que contiene la cadena
 * @returns - Retorna la cadena cambiada de formato
 * ```typescript
 * fromSnakeToCamelCase("the_stealth_warrior") = "theStealthWarrior";
 * ```
 */
function fromSnakeToCamelCase(str: string): string | undefined {
  if (!isSnakeCase(str)) {
    return undefined;
  }
  return str.replace(/_./g, (match) => match.charAt(1).toUpperCase());
}

/**
 * Esta función convierte una cadena en formato snake_case a camelCase.
 * @param str - Variable string que contiene la cadena
 * @returns - Retorna la cadena cambiada de formato
 * ```typescript
 * fromCamelToSnakeCase("theStealthWarrior") = "the_stealth_warrior";
 * ```
 */
function fromCamelToSnakeCase(str: string): string | undefined {
  if (!isCamelCase(str)) {
    return undefined;
  }
  return str.replace(/([A-Z])/g, (match) => `_${match.toLowerCase()}`);
}

  console.log(fromSnakeToCamelCase("the_stealth_warrior")); 
  console.log(fromCamelToSnakeCase("theStealthWarrior")); 
  console.log(fromSnakeToCamelCase("The_stealth_warrior"));
  console.log(fromCamelToSnakeCase("the_StealthWarrior")); 


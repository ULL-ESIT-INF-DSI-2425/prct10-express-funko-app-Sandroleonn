/**
 * Tipo de Pokémon que puede ser uno de los siguientes: "fuego", "agua", "hierba", "eléctrico".
 */
type Tipo = "fuego" | "agua" | "hierba" | "eléctrico";

/**
 * Representa un Pokémon con sus propiedades.
 * 
 * @param nombre - El nombre del Pokémon.
 * @param peso - El peso del Pokémon en kilogramos.
 * @param altura - La altura del Pokémon en metros.
 * @param tipo - El tipo del Pokémon, que puede ser "fuego", "agua", "hierba" o "eléctrico".
 * @param ataque - El valor de ataque del Pokémon.
 * @param defensa - El valor de defensa del Pokémon.
 * @param velocidad - El valor de velocidad del Pokémon.
 * @param hp - El valor de puntos de salud (HP) del Pokémon.
 * 
 * ```typescript
 * const pikachu = new Pokemon("Pikachu", 6, 0.4, "eléctrico", 55, 40, 90, 100);
 * ```
 */
export class Pokemon {
    constructor(
      public nombre: string,
      public peso: number,
      public altura: number,
      public tipo: Tipo,
      public ataque: number,
      public defensa: number,
      public velocidad: number,
      public hp: number
    ) {}

    /**
     * Muestra la información del Pokémon en la consola.
     * 
     * ```typescript
     * pikachu.mostrarInformacion();
     * ```
     */
    mostrarInformacion(): void {
        console.log(`Nombre: ${this.nombre}`);
        console.log(`Tipo: ${this.tipo}`);
        console.log(`Peso: ${this.peso} kg, Altura: ${this.altura} m`);
        console.log(`Ataque: ${this.ataque}, Defensa: ${this.defensa}`);
        console.log(`Velocidad: ${this.velocidad}, HP: ${this.hp}`);
    }
}

/**
 * Representa una Pokédex que almacena y gestiona Pokémon.
 * 
 * ```typescript
 * const pokedex = new Pokedex();
 * pokedex.agregarPokemon(pikachu);
 * ```
 */
export class Pokedex {
    private pokemons: Pokemon[] = [];
  
    /**
     * Agrega un Pokémon a la Pokédex.
     * 
     * @param pokemon - El Pokémon que se agregará a la Pokédex.
     * 
     * ```typescript
     * pokedex.agregarPokemon(pikachu);
     * ```
     */
    agregarPokemon(pokemon: Pokemon): void {
      this.pokemons.push(pokemon);
    }
  
    /**
     * Muestra todos los Pokémon registrados en la Pokédex.
     * 
     * ```typescript
     * pokedex.mostrarPokedex();
     * ```
     */
    mostrarPokedex(): void {
      this.pokemons.forEach((pokemon) => {
        console.log("========================");
        pokemon.mostrarInformacion();
      });
    }
  
    /**
     * Busca un Pokémon por su nombre en la Pokédex.
     * 
     * @param nombre - El nombre del Pokémon a buscar.
     * @returns El Pokémon encontrado o undefined si no se encuentra.
     * 
     * ```typescript
     * const pokemon = pokedex.buscarPorNombre("Pikachu");
     * ```
     */
    buscarPorNombre(nombre: string): Pokemon | undefined {
        const encontrado = this.pokemons.find((pokemon) => pokemon.nombre.toLowerCase() === nombre.toLowerCase());
        return encontrado ? encontrado : undefined;
    }
      
    /**
     * Busca los Pokémon por su tipo en la Pokédex.
     * 
     * @param tipo - El tipo del Pokémon a buscar.
     * @returns Un arreglo de Pokémon que coinciden con el tipo.
     * 
     * ```typescript
     * const electricos = pokedex.buscarPorTipo("eléctrico");
     * ```
     */
    buscarPorTipo(tipo: Tipo): Pokemon[] {
      return this.pokemons.filter((pokemon) => pokemon.tipo === tipo);
    }
  
    /**
     * Busca los Pokémon por su valor de ataque en la Pokédex.
     * 
     * @param minAtaque - El valor mínimo de ataque para buscar Pokémon.
     * @returns Un arreglo de Pokémon con un ataque mayor o igual al valor dado.
     * 
     * ```typescript
     * const pokemonsConAltoAtaque = pokedex.buscarPorAtaque(80);
     * ```
     */
    buscarPorAtaque(minAtaque: number): Pokemon[] {
      return this.pokemons.filter((pokemon) => pokemon.ataque >= minAtaque);
    }
}

/**
 * Representa un combate entre dos Pokémon.
 * 
 * @param primerContrincante - El primer Pokémon que participa en el combate.
 * @param segundoContrincante - El segundo Pokémon que participa en el combate.
 * 
 * ```typescript
 * const combate = new Combat(pikachu, charizard);
 * combate.start();
 * ```
 */
export class Combat {
    private primerContrincante: Pokemon;
    private segundoContrincante: Pokemon;
  
    constructor(primerContrincante: Pokemon, segundoContrincante: Pokemon) {
      this.primerContrincante = primerContrincante;
      this.segundoContrincante = segundoContrincante;
    }

    /**
     * Obtiene la efectividad del ataque según los tipos de los Pokémon.
     * 
     * @param tipoAtacante - El tipo del Pokémon atacante.
     * @param tipoDefensor - El tipo del Pokémon defensor.
     * @returns El valor de efectividad del ataque según los tipos.
     * 
     * ```typescript
     * const efectividad = this.obtenerEfectividad("fuego", "agua");
     * ```
     */
    private obtenerEfectividad(tipoAtacante: Tipo, tipoDefensor: Tipo): number {
      const efectividad: { [key in Tipo]: { [key in Tipo]: number } } = {
        fuego: {
          fuego: 1,
          agua: 0.5,
          hierba: 2,
          eléctrico: 1
        },
        agua: {
          fuego: 2,
          agua: 1,
          hierba: 0.5,
          eléctrico: 0.5
        },
        hierba: {
          fuego: 0.5,
          agua: 2,
          hierba: 1,
          eléctrico: 1
        },
        eléctrico: {
          fuego: 1,
          agua: 2,
          hierba: 1,
          eléctrico: 1
        }
      };
      return efectividad[tipoAtacante][tipoDefensor] || 1;
    }

    /**
     * Calcula el daño causado por el ataque de un Pokémon al defensor.
     * 
     * @param ataque - El valor de ataque del Pokémon atacante.
     * @param defensa - El valor de defensa del Pokémon defensor.
     * @param efectividad - El valor de efectividad del ataque según los tipos.
     * @returns El valor de daño calculado.
     * 
     * ```typescript
     * const danio = this.calcularDanio(50, 40, 2);
     * ```
     */
    private calcularDanio(ataque: number, defensa: number, efectividad: number): number {
      return 50 * (ataque / defensa) * efectividad;
    }
  
    /**
     * Inicia el combate entre los dos Pokémon y muestra el progreso del combate.
     * 
     * ```typescript
     * combate.start();
     * ```
     */
    public start(): void {
      let turno = 1;
      let combateTerminado = false;
  
      console.log("¡Comienza el combate!\n");
  
      while (!combateTerminado) {
        let atacante = turno % 2 !== 0 ? this.primerContrincante : this.segundoContrincante;
        let defensor = turno % 2 === 0 ? this.primerContrincante : this.segundoContrincante;

        const efectividad = this.obtenerEfectividad(atacante.tipo, defensor.tipo);
  
        const danio = this.calcularDanio(atacante.ataque, defensor.defensa, efectividad);
  
        defensor.hp -= danio;
  
        console.log(`Turno ${turno}:`);
        console.log(`${atacante.nombre} ataca a ${defensor.nombre} causando ${danio.toFixed(2)} de daño.`);
        console.log(`${defensor.nombre} tiene ahora ${defensor.hp.toFixed(2)} HP.\n`);
  
        if (defensor.hp <= 0) {
          console.log(`${defensor.nombre} ha sido derrotado. ¡${atacante.nombre} gana el combate!`);
          combateTerminado = true;
        }
        turno++;
      }
    }
}




/**
 * Interfaz genérica para colecciones de contenido en streaming.
 * 
 * @template T - Tipo de contenido que se almacenará en la colección.
 * 
 * @method addItem - Agrega un elemento a la colección.
 * @method removeItem - Elimina un elemento de la colección.
 * @method searchByTitle - Busca elementos por título.
 * @method searchByYear - Busca elementos por año de lanzamiento.
 * @method getAll - Obtiene todos los elementos de la colección.
 */
interface Streamable<T> {
    addItem(item: T): void;
    removeItem(item: T): void;
    searchByTitle(title: string): T[];
    searchByYear(year: number): T[];
    getAll(): T[];
}
  
  /**
   * Representa un contenido multimedia con propiedades básicas.
   * 
   * @param title - El título del contenido.
   * @param year - El año de lanzamiento del contenido.
   */
  interface MediaContent {
    title: string;
    year: number;
  }
  
  /**
   * Clase abstracta que representa una colección básica de contenido en streaming.
   * 
   * @template T - Tipo de contenido que se almacenará en la colección.
   * 
   * @param items - Lista de elementos que componen la colección.
   * 
   * @method addItem - Agrega un elemento a la colección.
   * @method removeItem - Elimina un elemento de la colección.
   * @method searchByTitle - Busca elementos por título.
   * @method searchByYear - Busca elementos por año de lanzamiento.
   * @method getAll - Obtiene todos los elementos de la colección.
   * @method specificSearch - Método abstracto que define una búsqueda específica en la colección.
   */
   abstract class BasicStreamableCollection<T extends MediaContent> implements Streamable<T> {
    protected items: T[];
  
    constructor(items: T[] = []) {
      this.items = items;
    }
  
    addItem(item: T): void {
      this.items.push(item);
    }
  
    removeItem(item: T): void {
      this.items = this.items.filter(i => i !== item);
    }
  
    searchByTitle(title: string): T[] {
      return this.items.filter(item => item.title.toLowerCase().includes(title.toLowerCase()));
    }
  
    searchByYear(year: number): T[] {
      return this.items.filter(item => item.year === year);
    }
  
    getAll(): T[] {
      return this.items;
    }
  
    abstract specificSearch(criteria: any): T[];
  }
  
  /**
   * Representa una película con su título, año de lanzamiento y director.
   * 
   * @param title - El título de la película.
   * @param year - El año de lanzamiento de la película.
   * @param director - El director de la película.
   * 
   * ```typescript
   * const inception = new Movie("Inception", 2010, "Christopher Nolan");
   * ```
   */
  export class Movie implements MediaContent {
    constructor(public title: string, public year: number, public director: string) {}
  }
  
  /**
   * Representa una serie con su título, año de lanzamiento y cantidad de temporadas.
   * 
   * @param title - El título de la serie.
   * @param year - El año de lanzamiento de la serie.
   * @param seasons - Número de temporadas de la serie.
   * 
   * ```typescript
   * const breakingBad = new Series("Breaking Bad", 2008, 5);
   * ```
   */
  export class Series implements MediaContent {
    constructor(public title: string, public year: number, public seasons: number) {}
  }
  
  /**
   * Representa un documental con su título, año de lanzamiento y tema principal.
   * 
   * @param title - El título del documental.
   * @param year - El año de lanzamiento del documental.
   * @param topic - El tema principal del documental.
   * 
   * ```typescript
   * const ourPlanet = new Documentary("Our Planet", 2019, "Naturaleza");
   * ```
   */
  export class Documentary implements MediaContent {
    constructor(public title: string, public year: number, public topic: string) {}
  }
  
  /**
   * Representa una colección de películas en streaming.
   * 
   * @method specificSearch - Busca películas por director.
   * 
   * ```typescript
   * const movies = new MovieCollection();
   * movies.addItem(new Movie("Interstellar", 2014, "Christopher Nolan"));
   * console.log(movies.specificSearch("Christopher Nolan"));
   * ```
   */
  export class MovieCollection extends BasicStreamableCollection<Movie> {
    specificSearch(director: string): Movie[] {
      return this.items.filter(movie => movie.director.toLowerCase().includes(director.toLowerCase()));
    }
  }
  
  /**
   * Representa una colección de series en streaming.
   * 
   * @method specificSearch - Busca series por número de temporadas.
   * 
   * ```typescript
   * const series = new SeriesCollection();
   * series.addItem(new Series("Stranger Things", 2016, 4));
   * console.log(series.specificSearch(4));
   * ```
   */
  export class SeriesCollection extends BasicStreamableCollection<Series> {
    specificSearch(seasons: number): Series[] {
      return this.items.filter(series => series.seasons === seasons);
    }
  }
  
  /**
   * Representa una colección de documentales en streaming.
   * 
   * @method specificSearch - Busca documentales por tema.
   * 
   * ```typescript
   * const documentaries = new DocumentaryCollection();
   * documentaries.addItem(new Documentary("Planet Earth", 2006, "Naturaleza"));
   * console.log(documentaries.specificSearch("Naturaleza"));
   * ```
   */
  export class DocumentaryCollection extends BasicStreamableCollection<Documentary> {
    specificSearch(topic: string): Documentary[] {
      return this.items.filter(doc => doc.topic.toLowerCase().includes(topic.toLowerCase()));
    }
  }

  
import { describe, expect, test } from "vitest";
import { Movie, Series, Documentary, MovieCollection, SeriesCollection, DocumentaryCollection } from "../src/ejercicio-1"; // Ajusta la importación si es necesario

// Pruebas para la clase Movie
describe("Movie", () => {
  test("debe crear una película correctamente", () => {
    const inception = new Movie("Inception", 2010, "Christopher Nolan");
    expect(inception.title).toBe("Inception");
    expect(inception.year).toBe(2010);
    expect(inception.director).toBe("Christopher Nolan");
  });
});

// Pruebas para la clase Series
describe("Series", () => {
  test("debe crear una serie correctamente", () => {
    const breakingBad = new Series("Breaking Bad", 2008, 5);
    expect(breakingBad.title).toBe("Breaking Bad");
    expect(breakingBad.year).toBe(2008);
    expect(breakingBad.seasons).toBe(5);
  });
});

// Pruebas para la clase Documentary
describe("Documentary", () => {
  test("debe crear un documental correctamente", () => {
    const ourPlanet = new Documentary("Our Planet", 2019, "Naturaleza");
    expect(ourPlanet.title).toBe("Our Planet");
    expect(ourPlanet.year).toBe(2019);
    expect(ourPlanet.topic).toBe("Naturaleza");
  });
});

// Pruebas para MovieCollection
describe("MovieCollection", () => {
  test("debe agregar y buscar películas", () => {
    const collection = new MovieCollection();
    const inception = new Movie("Inception", 2010, "Christopher Nolan");
    collection.addItem(inception);
    expect(collection.getAll()).toContain(inception);
  });

  test("debe eliminar una película", () => {
    const collection = new MovieCollection();
    const inception = new Movie("Inception", 2010, "Christopher Nolan");
    collection.addItem(inception);
    collection.removeItem(inception);
    expect(collection.getAll()).not.toContain(inception);
  });

  test("debe buscar películas por título", () => {
    const collection = new MovieCollection();
    const interstellar = new Movie("Interstellar", 2014, "Christopher Nolan");
    collection.addItem(interstellar);
    expect(collection.searchByTitle("Interstellar")).toContain(interstellar);
  });

  test("debe buscar películas por director", () => {
    const collection = new MovieCollection();
    const dunkirk = new Movie("Dunkirk", 2017, "Christopher Nolan");
    collection.addItem(dunkirk);
    expect(collection.specificSearch("Christopher Nolan")).toContain(dunkirk);
  });

  test("debe buscar películas por año", () => {
    const collection = new MovieCollection();
    const matrix = new Movie("The Matrix", 1999, "Wachowski");
    collection.addItem(matrix);
    expect(collection.searchByYear(1999)).toContain(matrix);
  });
});

// Pruebas para SeriesCollection
describe("SeriesCollection", () => {
  test("debe agregar y buscar series", () => {
    const collection = new SeriesCollection();
    const breakingBad = new Series("Breaking Bad", 2008, 5);
    collection.addItem(breakingBad);
    expect(collection.getAll()).toContain(breakingBad);
  });

  test("debe eliminar una serie", () => {
    const collection = new SeriesCollection();
    const friends = new Series("Friends", 1994, 10);
    collection.addItem(friends);
    collection.removeItem(friends);
    expect(collection.getAll()).not.toContain(friends);
  });

  test("debe buscar series por temporadas", () => {
    const collection = new SeriesCollection();
    const strangerThings = new Series("Stranger Things", 2016, 4);
    collection.addItem(strangerThings);
    expect(collection.specificSearch(4)).toContain(strangerThings);
  });

  test("debe buscar series por año", () => {
    const collection = new SeriesCollection();
    const lost = new Series("Lost", 2004, 6);
    collection.addItem(lost);
    expect(collection.searchByYear(2004)).toContain(lost);
  });
});

// Pruebas para DocumentaryCollection
describe("DocumentaryCollection", () => {
  test("debe agregar y buscar documentales", () => {
    const collection = new DocumentaryCollection();
    const planetEarth = new Documentary("Planet Earth", 2006, "Naturaleza");
    collection.addItem(planetEarth);
    expect(collection.getAll()).toContain(planetEarth);
  });

  test("debe eliminar un documental", () => {
    const collection = new DocumentaryCollection();
    const cosmos = new Documentary("Cosmos", 2014, "Ciencia");
    collection.addItem(cosmos);
    collection.removeItem(cosmos);
    expect(collection.getAll()).not.toContain(cosmos);
  });

  test("debe buscar documentales por tema", () => {
    const collection = new DocumentaryCollection();
    const cosmos = new Documentary("Cosmos", 2014, "Ciencia");
    collection.addItem(cosmos);
    expect(collection.specificSearch("Ciencia")).toContain(cosmos);
  });

  test("debe buscar documentales por año", () => {
    const collection = new DocumentaryCollection();
    const bluePlanet = new Documentary("Blue Planet", 2001, "Océanos");
    collection.addItem(bluePlanet);
    expect(collection.searchByYear(2001)).toContain(bluePlanet);
  });
});
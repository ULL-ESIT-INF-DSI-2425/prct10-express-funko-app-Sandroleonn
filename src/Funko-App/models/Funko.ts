export enum FunkoType {
    Pop = "Pop!",
    PopRides = "Pop! Rides",
    VynilSoda = "Vynil Soda",
    VynilGold = "Vynil Gold",
  }
  
export enum FunkoGenre {
    Animation = "Animación",
    MoviesTV = "Películas y TV",
    Videogames = "Videojuegos",
    Sports = "Deportes",
    Music = "Música",
    Anime = "Ánime",
}
  
export interface Funko {
    id: number;
    name: string;
    description: string;
    type: FunkoType;
    genre: FunkoGenre;
    franchise: string;
    number: number;
    exclusive: boolean;
    specialFeatures: string;
    marketValue: number;
}
  
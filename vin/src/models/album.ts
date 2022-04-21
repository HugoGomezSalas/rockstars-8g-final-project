import { Genre } from "./genre";
import { Singer } from "./singer";
import { Song } from "./song";

export interface Album {
  _id: string;
  name: string;
  singer: Singer;
  releaseDate: Date;
  songs: Song[];
  price: number;
  genre: Genre;
  stock: number;
  image: string;
}

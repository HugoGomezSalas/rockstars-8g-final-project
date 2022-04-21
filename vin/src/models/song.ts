import { Album } from "./album";
import { Singer } from "./singer";

export interface Song {
  _id: string;
  name: string;
  singer: Singer;
  releaseDate: Date;
  album?: Album;
  duration?: number;
  completeFile: string;
  previewFile: string;
  price?: number;
}

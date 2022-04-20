import { model, Schema } from "mongoose";
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

const schema = new Schema<Album>({
  name: { type: String, required: true },
  singer: { type: Schema.Types.ObjectId, ref: "singers", required: true },
  releaseDate: { type: Date, required: true, default: new Date() },
  songs: [{ type: Schema.Types.ObjectId, ref: "songs" }],
  price: { type: Number, required: true },
  stock: { type: Number, required: true, default: 100 },
  genre: { type: Schema.Types.ObjectId, ref: "genres", required: true },
  image: { type: String, required: true },
});

export const AlbumModel = model<Album>("albums", schema);

export interface getAlbumByIdDTO {
  _id: string;
}
export interface CreateAlbumDTO {
  name: string;
  releaseDate: string;
  singer: string;
  songs: Song[];
  price: number;
  genre: Genre;
  stock: number;
}
export interface UpdateAlbumDTO {
  _id: string;
  releaseDate: string;
  name: string;
  singer: string;
  songs: Song[];
  price: number;
  genre: Genre;
}
export interface deleteAlbumDTO {
  _id: string;
}

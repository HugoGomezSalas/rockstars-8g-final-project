import { Schema, model } from "mongoose";
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

const schema = new Schema<Song>({
  name: { type: String, required: true },
  singer: { type: Schema.Types.ObjectId, ref: "singers", required: true },
  releaseDate: { type: Date, required: true, default: new Date() },
  album: { type: Schema.Types.ObjectId, ref: "albums", optional: true },
  duration: { type: Number, required: true },
  completeFile: { type: String, required: true },
  previewFile: { type: String, required: true },
  price: { type: Number, optional: true },
});

export const SongModel = model<Song>("songs", schema);

export interface getSongByIdDTO {
  _id: string;
}
export interface CreateSongDTO {
  name: string;
  singer: Singer;
  album?: Album;
  price?: number;
}
export interface UpdateSongDTO {
  _id: string;
  name: string;
  singer: Singer;
  album?: Album;
  price?: number;
}
export interface deleteSongDTO {
  _id: string;
}

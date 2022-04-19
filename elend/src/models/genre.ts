import { Schema, model } from "mongoose";

export interface Genre {
  _id: string;
  description: string;
}

const schema = new Schema<Genre>({
  description: { type: String, required: true },
});

export const GenreModel = model<Genre>("genres", schema);

export interface getGenreByIdDTO {
  _id: string;
}
export interface CreateGenreDTO {
  description: string;
}
export interface UpdateGenreDTO {
  _id: string;
  description: string;
}
export interface deleteGenreDTO {
  _id: string;
}

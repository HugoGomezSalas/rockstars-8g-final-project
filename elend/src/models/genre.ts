import { Schema, model } from "mongoose";

export interface Genre {
  _id: string;
  description: string;
}

const schema = new Schema<Genre>({
  description: { type: String, required: true },
});

export const GenreModel = model<Genre>("genres", schema);

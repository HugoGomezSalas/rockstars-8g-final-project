import { Schema, model } from "mongoose";
import { Album } from "./album";
import { Song } from "./song";

export interface Singer {
  _id: string;
  stageName: string;
  name: string;
  lastName: string;
  nationality: string;
}

const schema = new Schema<Singer>({
  stageName: { type: String, required: true },
  name: { type: String, required: true },
  lastName: { type: String, required: true },
  nationality: { type: String, required: true },
});

export const SingerModel = model<Singer>("singers", schema);

export interface getSingerByIdDTO {
  _id: string;
}
export interface CreateSingerDTO {
  stageName: string;
  name: string;
  lastName: string;
  nationality: string;
}
export interface UpdateSingerDTO {
  _id: string;
  stageName: string;
  name: string;
  lastName: string;
  nationality: string;
}
export interface deleteSingerDTO {
  _id: string;
}

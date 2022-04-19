import { Schema, model } from "mongoose";
import { Album } from "./album";
import { Song } from "./song";

export interface Singer {
  _id: string;
  name: string;
  lastName: string;
  nationality: string;
  albums?: Album[];
  songs?: Song[];
}

const schema = new Schema<Singer>({
  name: { type: String, required: true },
  lastName: { type: String, required: true },
  nationality: { type: String, required: true },
  albums: [{ type: Schema.Types.ObjectId, ref: "albums", optional: true }],
  songs: [{ type: Schema.Types.ObjectId, ref: "songs", optional: true }],
});

export const SingerModel = model<Singer>("singers", schema);

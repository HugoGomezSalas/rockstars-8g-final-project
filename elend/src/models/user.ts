import { Schema, model } from "mongoose";

export interface User {
  _id: string;
  userName: string;
  email: string;
  password: string;
  type: "admin" | "customer";
}

export interface LoginDTO {
  userName?: string;
  email?: string;
  password: string;
}

export interface LoginEmailDTO {
  email: string;
  password: string;
}

export interface LoginUsernameDTO {
  userName: string;
  password: string;
}

const schema = new Schema<User>({
  userName: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  type: { type: String, required: true, default: "customer" },
});

export const UserModel = model<User>("users", schema);

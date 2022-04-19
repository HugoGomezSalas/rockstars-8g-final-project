import { connect } from "mongoose";
const DB_NAME = process.env.DB_NAME || "";
const DB_USERNAME = process.env.DB_USERNAME || "";
const DB_PASSWORD = process.env.DB_PASSWORD || "";
const DB_CLUSTER = process.env.DB_CLUSTER || "";

export const run = async () => {
  await connect(
    `mongodb+srv://${DB_USERNAME}:${DB_PASSWORD}@${DB_CLUSTER}/${DB_NAME}?retryWrites=true&w=majority`
  );
};

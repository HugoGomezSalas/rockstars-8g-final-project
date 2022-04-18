import express from "express";
import cors from "cors";

const app = express();

app.use(
  cors({
    origin: "http://localhost:3000",
  })
);

app.get("/", (req, res) => {
  res.send("Hola express");
});

app.listen(8000, () => {
  console.log("Server listening on port 8000 🚀");
});

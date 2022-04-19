import express from "express";
import cors from "cors";
import { run } from "./modules/db";
import { login } from "./controllers/user";

const app = express();

app.use(
  cors({
    origin: "http://localhost:3000",
  })
);
app.use(express.urlencoded({ extended: true }));

app.use(express.json());

app.post("/auth", async (req, res) => {
  const usuario = await login(req.body);
  res.send(usuario);
});

app.listen(8000, async () => {
  await run();
  console.log("Server listening on port 8000 🚀");
});

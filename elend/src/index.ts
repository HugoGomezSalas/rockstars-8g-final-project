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

app.set("secretKey", process.env.SECRET_KEY);

app.post("/auth", async (req, res) => {
  const usuario = await login(req.body);

  if (usuario.status) {
    res.status(usuario.status);
    res.send({
      error: usuario.error,
    });
  } else {
    res.send(usuario);
  }
});

app.listen(8000, async () => {
  await run();
  console.log("Server listening on port 8000 🚀");
});

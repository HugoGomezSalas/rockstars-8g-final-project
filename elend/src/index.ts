import express from "express";
import cors from "cors";
import { run } from "./modules/db";
import { login } from "./controllers/user";
import {
  createGenre,
  deleteGenre,
  getAllGenres,
  getGenreById,
  updateGenre,
} from "./controllers/genre";
import {
  createSinger,
  deleteSinger,
  getAllSingers,
  getSingerById,
  updateSinger,
} from "./controllers/singer";
import {
  createSong,
  deleteSong,
  getAllSongs,
  getSongById,
  updateSong,
} from "./controllers/song";
import {
  createAlbum,
  deleteAlbum,
  getAlbumById,
  getAllAlbums,
  updateAlbum,
} from "./controllers/album";
import { validateAdmin, validateToken } from "./modules/auth";

const app = express();

app.use(
  cors({
    origin: "http://localhost:3000",
  })
);
app.use(express.urlencoded({ extended: true }));

app.use(express.json());

app.set("secretKey", process.env.SECRET_KEY);

app.delete("/album/:_id", validateAdmin, async (req, res) => {
  const album = await deleteAlbum({
    _id: req.params._id,
  });

  res.send(album);
});

app.patch("/album/:_id", validateAdmin, async (req, res) => {
  const album = await updateAlbum({
    _id: req.params._id,
    ...req.body,
  });

  res.send(album);
});

app.post("/album", validateAdmin, async (req, res) => {
  const album = await createAlbum(req.body);

  res.send(album);
});

app.get("/album/:_id", validateToken, async (req, res) => {
  const album = await getAlbumById({ _id: req.params._id });
  res.send(album);
});

app.get("/album", validateToken, async (req, res) => {
  const albums = await getAllAlbums();
  res.send(albums);
});

app.delete("/album/:_id", validateAdmin, async (req, res) => {
  const album = await deleteAlbum({
    _id: req.params._id,
  });

  res.send(album);
});

app.delete("/song/:_id", validateAdmin, async (req, res) => {
  const song = await deleteSong({
    _id: req.params._id,
  });

  res.send(song);
});

app.patch("/song/:_id", validateAdmin, async (req, res) => {
  const song = await updateSong({
    _id: req.params._id,
    ...req.body,
  });

  res.send(song);
});

app.post("/song", validateAdmin, async (req, res) => {
  const song = await createSong(req.body);

  res.send(song);
});

app.get("/song/:_id", validateToken, async (req, res) => {
  const song = await getSongById({ _id: req.params._id });
  res.send(song);
});

app.get("/song", validateToken, async (req, res) => {
  const songs = await getAllSongs();
  res.send(songs);
});

app.delete("/singer/:_id", validateAdmin, async (req, res) => {
  const singer = await deleteSinger({
    _id: req.params._id,
  });

  res.send(singer);
});

app.patch("/singer/:_id", validateAdmin, async (req, res) => {
  const singer = await updateSinger({
    _id: req.params._id,
    ...req.body,
  });

  res.send(singer);
});

app.post("/singer", validateAdmin, async (req, res) => {
  const singer = await createSinger(req.body);

  res.send(singer);
});

app.get("/singer/:_id", validateToken, async (req, res) => {
  const singer = await getSingerById({ _id: req.params._id });
  res.send(singer);
});

app.get("/singer", validateToken, async (req, res) => {
  const singers = await getAllSingers();
  res.send(singers);
});

app.delete("/genre/:_id", validateAdmin, async (req, res) => {
  const genre = await deleteGenre({
    _id: req.params._id,
  });

  res.send(genre);
});

app.patch("/genre/:_id", validateAdmin, async (req, res) => {
  const genre = await updateGenre({
    _id: req.params._id,
    description: req.body.description,
  });

  res.send(genre);
});

app.post("/genre", validateAdmin, async (req, res) => {
  const genre = await createGenre(req.body);

  res.send(genre);
});

app.get("/genre/:_id", validateToken, async (req, res) => {
  const genre = await getGenreById({ _id: req.params._id });
  res.send(genre);
});

app.get("/genre", validateToken, async (req, res) => {
  const genres = await getAllGenres();
  res.send(genres);
});

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

import {
  addGenre,
  deleteGenre,
  setGenres,
  updateGenre,
} from "../features/musicSlice";
import { setLoading } from "../features/loaderSlice";
import { AppDispatch } from "../app/store";
import { fetchAuth } from "../helpers/auth";
import {
  CreateGenreDTO,
  GenrePosition,
  UpdateGenreDTO,
} from "../views/admin/genre/form";
import { Genre } from "../models/genre";

export const getGenres = () => async (dispatch: AppDispatch) => {
  try {
    dispatch(setLoading(true));
    const response = await fetch("http://localhost:8000/genre");

    if (response.status !== 200) return "";

    const genres: Genre[] = await response.json();
    dispatch(setGenres(genres));
  } catch (err) {
    throw err;
  } finally {
    dispatch(setLoading(false));
  }
};

export const fetchDeleteGenre =
  (id: string, index: number) => async (dispatch: AppDispatch) => {
    try {
      dispatch(setLoading(true));
      const response = await fetchAuth(`http://localhost:8000/genre/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.status !== 200) return "";

      dispatch(deleteGenre(index));
    } catch (err) {
      throw err;
    } finally {
      dispatch(setLoading(false));
    }
  };

export const fetchAddGenre =
  (createGenreDTO: CreateGenreDTO) => async (dispatch: AppDispatch) => {
    try {
      dispatch(setLoading(true));
      const response = await fetchAuth("http://localhost:8000/genre", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(createGenreDTO),
      });

      if (response.status !== 200) return "";

      const genre: Genre = await response.json();
      dispatch(addGenre(genre));
    } catch (err) {
      throw err;
    } finally {
      dispatch(setLoading(false));
    }
  };

export const fetchUpdateGenre =
  (updateGenreDTO: UpdateGenreDTO, genrePosition: GenrePosition) =>
  async (dispatch: AppDispatch) => {
    try {
      dispatch(setLoading(true));
      const response = await fetchAuth(
        `http://localhost:8000/genre/${genrePosition.id}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(updateGenreDTO),
        }
      );

      if (response.status !== 200) return "";

      const genre: Genre = await response.json();
      dispatch(updateGenre({ genre, index: genrePosition.index }));
    } catch (err) {
      throw err;
    } finally {
      dispatch(setLoading(false));
    }
  };

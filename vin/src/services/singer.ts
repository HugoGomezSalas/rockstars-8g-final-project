import {
  addSinger,
  deleteSinger,
  setSingers,
  updateSinger,
} from "../features/musicSlice";
import { setLoading } from "../features/loaderSlice";
import { AppDispatch } from "../app/store";
import { Singer } from "../models/singer";
import { fetchAuth } from "../helpers/auth";
import {
  CreateSingerDTO,
  SingerPosition,
  UpdateSingerDTO,
} from "../views/admin/singer/form";

export const getSingers = () => async (dispatch: AppDispatch) => {
  try {
    dispatch(setLoading(true));
    const response = await fetch("http://localhost:8000/singer");

    if (response.status !== 200) return "";

    const singers: Singer[] = await response.json();
    dispatch(setSingers(singers));
  } catch (err) {
    throw err;
  } finally {
    dispatch(setLoading(false));
  }
};

export const fetchDeleteSinger =
  (id: string, index: number) => async (dispatch: AppDispatch) => {
    try {
      dispatch(setLoading(true));
      const response = await fetchAuth(`http://localhost:8000/singer/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.status !== 200) return "";

      dispatch(deleteSinger(index));
    } catch (err) {
      throw err;
    } finally {
      dispatch(setLoading(false));
    }
  };

export const fetchAddSinger =
  (createSingerDTO: CreateSingerDTO) => async (dispatch: AppDispatch) => {
    try {
      dispatch(setLoading(true));
      const response = await fetchAuth("http://localhost:8000/singer", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(createSingerDTO),
      });

      if (response.status !== 200) return "";

      const singer: Singer = await response.json();
      dispatch(addSinger(singer));
    } catch (err) {
      throw err;
    } finally {
      dispatch(setLoading(false));
    }
  };

export const fetchUpdateSinger =
  (updateSingerDTO: UpdateSingerDTO, SingerPosition: SingerPosition) =>
  async (dispatch: AppDispatch) => {
    try {
      dispatch(setLoading(true));
      const response = await fetchAuth(
        `http://localhost:8000/singer/${SingerPosition.id}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(updateSingerDTO),
        }
      );

      if (response.status !== 200) return "";

      const singer: Singer = await response.json();
      dispatch(updateSinger({ singer, index: SingerPosition.index }));
    } catch (err) {
      throw err;
    } finally {
      dispatch(setLoading(false));
    }
  };

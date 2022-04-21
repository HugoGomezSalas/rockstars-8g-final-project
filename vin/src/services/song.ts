import { setSongs } from "../features/musicSlice";
import { setLoading } from "../features/loaderSlice";
import { AppDispatch } from "../app/store";
import { Singer } from "../models/singer";

export const getSongs = () => async (dispatch: AppDispatch) => {
  try {
    dispatch(setLoading(true));
    const response = await fetch("http://localhost:8000/song");

    if (response.status !== 200) return "";

    const songs: Singer[] = await response.json();
    dispatch(setSongs(songs));
  } catch (err) {
    throw err;
  } finally {
    dispatch(setLoading(false));
  }
};

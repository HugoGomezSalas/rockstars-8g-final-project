import { setSingers } from "../features/singerSlice";
import { setLoading } from "../features/loaderSlice";

export const getSingers = () => async (dispatch) => {
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

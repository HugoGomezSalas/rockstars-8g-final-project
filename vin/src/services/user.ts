import { AppDispatch } from "../app/store";
import { setAuth } from "../features/authSlice";
import { setLoading } from "../features/loaderSlice";
import { LoginDTO } from "../views/login/form";

export const fetchLogin = (user: LoginDTO) => async (dispatch: AppDispatch) => {
  try {
    dispatch(setLoading(true));
    const response = await fetch("http://localhost:8000/auth", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });

    if (response.status !== 200) return "";

    const userAuth = await response.json();
    dispatch(setAuth(userAuth));
  } catch (err) {
    throw err;
  } finally {
    dispatch(setLoading(false));
  }
};

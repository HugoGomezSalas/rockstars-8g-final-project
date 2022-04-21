import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import musicReducer from "../features/musicSlice";
import loaderReducer from "../features/loaderSlice";

export const store = configureStore({
  reducer: {
    music: musicReducer,
    loader: loaderReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

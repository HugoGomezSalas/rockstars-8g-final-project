import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import singerReducer from "../features/singerSlice";
import loaderReducer from "../features/loaderSlice";

export const store = configureStore({
  reducer: {
    singers: singerReducer,
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

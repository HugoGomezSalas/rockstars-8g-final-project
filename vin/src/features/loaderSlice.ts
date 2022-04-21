import { createSlice } from "@reduxjs/toolkit";

export interface LoaderState {
  loading: boolean;
}

const initialState: LoaderState = {
  loading: false,
};

export const LoaderSlice = createSlice({
  name: "Loader",
  initialState,
  reducers: {
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
  },
});

export const { setLoading } = LoaderSlice.actions;

export default LoaderSlice.reducer;

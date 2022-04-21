import { createSlice } from "@reduxjs/toolkit";
import { Singer } from "../../models/singer";

export interface SingerState {
  singers: Singer[];
}

const initialState: SingerState = {
  singers: [],
};

export const SingerSlice = createSlice({
  name: "Singer",
  initialState,
  reducers: {
    setSingers: (state, action) => {
      state.singers = action.payload;
    },
  },
});

export const { setSingers } = SingerSlice.actions;

export default SingerSlice.reducer;

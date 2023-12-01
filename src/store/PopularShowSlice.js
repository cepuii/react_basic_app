import { createSlice } from "@reduxjs/toolkit";

const PopularShowSlice = createSlice({
  name: "popularShows",
  initialState: {
    value: [],
  },
  reducers: {
    setShows: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const {setShows} = PopularShowSlice.actions;

export default PopularShowSlice.reducer;
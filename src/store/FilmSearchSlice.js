import { createSlice } from "@reduxjs/toolkit";

const FilmSearchSlice = createSlice({
  name: "filmSearch",
  initialState: {
    value: "",
  },
  reducers: {
    setSearch: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const {setSearch} = FilmSearchSlice.actions;

export default FilmSearchSlice.reducer;
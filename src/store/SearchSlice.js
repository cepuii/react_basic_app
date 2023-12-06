import { createSlice } from "@reduxjs/toolkit";

const SearchSlice = createSlice({
  name: "filmSearch",
  initialState: {
    value: "",
    genre: "",
    country: "",
  },
  reducers: {
    setSearch: (state, action) => {
      state.value = action.payload;
    },
    setGenre: (state, action) => {
      state.genre = action.payload;
    },
    setCountry: (state, action) => {
      state.country = action.payload;
    },
  },
});

export const { setSearch, setGenre, setCountry } = SearchSlice.actions;

export default SearchSlice.reducer;

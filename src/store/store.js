import { configureStore } from '@reduxjs/toolkit';
import FilmSearchSlice from './FilmSearchSlice';

export default configureStore({
  reducer: {
    filmSearch: FilmSearchSlice,
  },
})
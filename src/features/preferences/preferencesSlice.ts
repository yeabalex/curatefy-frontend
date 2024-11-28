import { createSlice } from "@reduxjs/toolkit";
import { FormData } from "@/components/first/multi-page-form";

export type InitialState = { preferences: FormData };
const initialState: InitialState = {
  preferences: {
    genres: [],
    artists: [],
  },
};

export const preferencesSlice = createSlice({
  name: "preferencesSlice",
  initialState,
  reducers: {
    addGenres: (state, action: { payload: string[] }) => {
      state.preferences.genres = state.preferences.genres?.concat(
        action.payload
      );
    },
    addArtists: (state, action: { payload: string[] }) => {
      state.preferences.artists = state.preferences.artists?.concat(
        action.payload
      );
    },
  },
});

export const { addGenres, addArtists } = preferencesSlice.actions;

export default preferencesSlice.reducer;

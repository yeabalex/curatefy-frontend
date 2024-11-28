import { configureStore } from "@reduxjs/toolkit";
import preferenceReducer from "@/features/preferences/preferencesSlice";

export const store = configureStore({ reducer: { preferenceReducer } });

export type RootState = ReturnType<typeof store.getState>;

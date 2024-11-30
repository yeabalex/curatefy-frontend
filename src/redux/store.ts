import { configureStore } from "@reduxjs/toolkit";
import preferenceReducer from "@/features/preferences/preferencesSlice";
import userReducer from "@/features/user/userSlice";

export const store = configureStore({
  reducer: { preferenceReducer, userReducer },
});

export type RootState = ReturnType<typeof store.getState>;

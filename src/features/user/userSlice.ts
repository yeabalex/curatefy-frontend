import { createSlice } from "@reduxjs/toolkit";
import type { User } from "@/types/user.type";

const initialState: { userData: User } = {
  userData: {
    displayName: null,
    email: null,
    image: null,
    spotifyId: null,
  },
};

export const userSlcie = createSlice({
  name: "userSlice",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.userData = action.payload;
    },
  },
});

export const { setUser } = userSlcie.actions;
export default userSlcie.reducer;

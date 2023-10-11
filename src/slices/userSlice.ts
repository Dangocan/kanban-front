import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface userState {
  _id?: string;
  email?: string;
  name?: string;
  token?: string;
}

const initialState: userState = {
  _id: undefined,
  email: undefined,
  name: undefined,
  token: undefined,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    changeUserData: (
      state,
      {
        payload,
      }: PayloadAction<{
        _id?: string;
        email?: string;
        name?: string;
        token?: string;
      }>
    ) => {
      state = Object.assign(state, payload);
    },
    resetUserData: (state) => {
      state = Object.assign(state, initialState);
    },
  },
});

export const { changeUserData, resetUserData } = userSlice.actions;

export default userSlice.reducer;

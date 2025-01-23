import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type TState = {
  email: string;
  password: string;
};

const initialState: TState = {
  email: "",
  password: "",
};

const loginSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setEmail: (state, action: PayloadAction<string>) => {
      state.email = action.payload;
    },
    setPassword: (state, action: PayloadAction<string>) => {
      state.password = action.payload;
    },
  },
});
export const { setEmail, setPassword } = loginSlice.actions;
export default loginSlice.reducer;

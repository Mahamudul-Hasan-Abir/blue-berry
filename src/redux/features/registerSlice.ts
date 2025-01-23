// registerSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface RegisterState {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  address: string;
  phone: string;
  profileImage: File | null;
}

const initialState: RegisterState = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  address: "",
  phone: "",
  profileImage: null,
};

const registerSlice = createSlice({
  name: "register",
  initialState,
  reducers: {
    setFirstName: (state, action: PayloadAction<string>) => {
      state.firstName = action.payload;
    },
    setLastName: (state, action: PayloadAction<string>) => {
      state.lastName = action.payload;
    },
    setEmail: (state, action: PayloadAction<string>) => {
      state.email = action.payload;
    },
    setPassword: (state, action: PayloadAction<string>) => {
      state.password = action.payload;
    },
    setAddress: (state, action: PayloadAction<string>) => {
      state.address = action.payload;
    },
    setPhone: (state, action: PayloadAction<string>) => {
      state.phone = action.payload;
    },
    setProfileImage: (state, action: PayloadAction<File | null>) => {
      state.profileImage = action.payload;
    },
  },
});

export const {
  setFirstName,
  setLastName,
  setEmail,
  setPassword,
  setAddress,
  setPhone,
  setProfileImage,
} = registerSlice.actions;

export default registerSlice.reducer;

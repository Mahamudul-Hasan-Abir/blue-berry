import { configureStore } from "@reduxjs/toolkit";
import { baseApi } from "./api/api";
import loginReducer from "./features/loginSlice";
import {
  persistReducer,
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PURGE,
  REGISTER,
  PERSIST,
} from "redux-persist";
import authReducer from "./features/authSlice";
import storage from "redux-persist/lib/storage";

const persistUserConfig = {
  key: "auth",
  storage,
};

const persistedAuthReducer = persistReducer(persistUserConfig, authReducer);

export const store = configureStore({
  reducer: {
    [baseApi.reducerPath]: baseApi.reducer,
    login: loginReducer,
    auth: persistedAuthReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PURGE, PAUSE, REGISTER, PERSIST],
      },
    }).concat(baseApi.middleware),
});

export const persistor = persistStore(store);

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

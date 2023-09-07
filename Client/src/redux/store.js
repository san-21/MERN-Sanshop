import { configureStore } from "@reduxjs/toolkit";

import { setupListeners } from "@reduxjs/toolkit/query";
import { shopApi } from "rtkQuery/api";
import commonReducer from "./commonSlice";
import userSlice from "./userSlice";
import authReducer from "./authSlice";

export const store = configureStore({
  reducer: {
    // product: productReducer,
    [shopApi.reducerPath]: shopApi.reducer,
    user: userSlice,
    common: commonReducer,
    auth: authReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(shopApi.middleware),
});

setupListeners(store.dispatch);

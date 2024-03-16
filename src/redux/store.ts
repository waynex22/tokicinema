import { configureStore } from "@reduxjs/toolkit";
import movieSlice from "./slices/movieSlice";
import bannerSlice from "./slices/bannerSlice";
import authSlice from "./slices/authSlice";
export const store = configureStore({
    reducer: {
        movie: movieSlice,
        banner: bannerSlice,
        auth: authSlice
    },
    });

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
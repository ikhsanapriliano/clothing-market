import { configureStore } from "@reduxjs/toolkit";
import registerslice from "../pages/Register/slice";
import authSlice from "../global/slice/index";

const store = configureStore({
    reducer: {
        register: registerslice,
        auth: authSlice,
    },
    devTools: true,
});

export type RootState = ReturnType<typeof store.getState>;
export default store;

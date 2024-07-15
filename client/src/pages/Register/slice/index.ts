import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Status } from "../../../types/common";

interface InitialState {
    isShown: boolean;
    status: Status;
}

const initialState: InitialState = {
    isShown: false,
    status: Status.loading,
};

const registerSlice = createSlice({
    name: "register",
    initialState,
    reducers: {
        setIsShown: (state, action: PayloadAction<boolean>) => {
            state.isShown = action.payload;
        },
        setStatus: (state, action: PayloadAction<Status>) => {
            state.status = action.payload;
        },
    },
});

export const { setIsShown, setStatus } = registerSlice.actions;
export default registerSlice.reducer;

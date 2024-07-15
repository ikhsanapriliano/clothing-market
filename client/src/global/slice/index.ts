import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface InitialState {
    isLoading: boolean;
    isLoggedIn: boolean;
    id: string;
    role: string;
}

const initialState: InitialState = {
    isLoading: true,
    isLoggedIn: false,
    id: "",
    role: "",
};

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setLogin: (state, action: PayloadAction<InitialState>) => {
            state.isLoading = action.payload.isLoading;
            state.isLoggedIn = action.payload.isLoggedIn;
            state.id = action.payload.id;
            state.role = action.payload.role;
        },
    },
});

export const { setLogin } = authSlice.actions;
export default authSlice.reducer;

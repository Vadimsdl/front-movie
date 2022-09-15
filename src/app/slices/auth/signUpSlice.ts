import { SignUpInitialState } from "../../../types/signUp.type";
import { createSlice } from "@reduxjs/toolkit";
import { postSignUpData } from "../../../api/asyncThunks/auth/signUpThunk";
import {RootState} from "../../store";
import {mainRoutes} from "../../../router/routes";

const initialState: SignUpInitialState = {
    loading: 'idle',
};

export const signUpSlice = createSlice({
    name: 'signUp',
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder.addCase(postSignUpData.pending, state =>{
            state.loading = 'pending';
        })
            .addCase(postSignUpData.fulfilled, state => {
                state.loading = 'idle';
            })
            .addCase(postSignUpData.rejected, state => {
                state.loading = 'failed';
            })
    }
});

export const selectSignUp = (state: RootState):SignUpInitialState => state.signUp;
export default signUpSlice.reducer;

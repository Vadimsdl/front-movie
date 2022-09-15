import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../store";
import {SignInInitialState} from "../../../types/signIn.type";
import {postSignInData} from "../../../api/asyncThunks/auth/logInThunk";
import {mainRoutes} from "../../../router/routes";

const initialState: SignInInitialState = {
    loading: 'idle',

};

export const signInSlice = createSlice({
    name: 'signIn',
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder.addCase(postSignInData.pending, state =>{
            state.loading = 'pending';
        })
            .addCase(postSignInData.fulfilled, (state, {payload}) => {
                state.loading = 'idle';
                console.log(payload)
                if (payload) {
                    window.location.href = mainRoutes.moviesList.path;
                }
            })
            .addCase(postSignInData.rejected, state => {
                state.loading = 'failed';
            })
    }
});

export const selectSignIn = (state: RootState):SignInInitialState => state.signIn;
export default signInSlice.reducer;

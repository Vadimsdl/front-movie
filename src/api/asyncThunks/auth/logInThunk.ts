import { createAsyncThunk } from '@reduxjs/toolkit';
import { API } from "../../../common/enums";
import { authQuery } from "../../fetchWrapper/fetchWrapper";
import { SignInType,SignInResponseType } from "../../../types/signIn.type";

export const postSignInData = createAsyncThunk(
    `${API.singInPath}`,
    async (data: SignInType) => {
        try{
            const response = authQuery<SignInType, SignInResponseType>(data, `${API.singInPath}`);
            const { access_token, id } = await response;
            if (access_token && id) {
                localStorage.setItem('accessToken', access_token);
                localStorage.setItem('id', id);
            }
            return {access_token, id};
        } catch (err) {
            console.log(err);
        }
    });

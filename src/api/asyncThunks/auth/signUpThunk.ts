import { createAsyncThunk } from '@reduxjs/toolkit';
import { API } from "../../../common/enums";
import { authQuery } from "../../fetchWrapper/fetchWrapper";
import { SignUpType, SignUpResponseType} from "../../../types/signUp.type";

export const postSignUpData = createAsyncThunk(`${API.signUpPath}`, async (data: SignUpType) => {
    try {
        await authQuery<SignUpType, SignUpResponseType>(data, `${API.signUpPath}`);
    } catch (err) {
        console.log(err);
    }
});

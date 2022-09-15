import { LoadingStateType } from "./loadingState.type";

export type SignUpType = {
    nickname: string;
    name: string;
    surname: string;
    email: string;
    password: string;
    confirmPassword: string;
}

export type SignUpResponseType = {};

export type SignUpInitialState = {
    loading: LoadingStateType;
}

import {LoadingStateType} from "./loadingState.type";

export type SignInType = {
    email: string;
    password: string;
};

export type SignInResponseType = {
    access_token: string;
    id: string;
}

export type SignInInitialState = {
    loading: LoadingStateType;
}

import {LoadingStateType} from "./loadingState.type";

export type MovieType = {
    _id: string;
    name: string;
    description: string;
    score: string;
    owner: string;
    __v: number;
}

export type MoviesResponseType = {
    movies?: MovieType[],
    offset?: number;
    limit?: number;
    count?: number;
    login?: boolean;
}

export interface MoviesListInitialStateType extends MoviesResponseType{
    loading: LoadingStateType;
    isAddModalOpen: boolean;
}

export type deleteResponse = {
    acknowledged: boolean;
    deletedCount: number;
}

export type AddMovieType = {
    name: string;
    description: string;
    score: string;
    owner?: string;
}

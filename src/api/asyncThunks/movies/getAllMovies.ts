import {createAsyncThunk} from "@reduxjs/toolkit";
import {API} from "../../../common/enums";
import {httpQuery} from "../../fetchWrapper/fetchWrapper";
import {MoviesResponseType} from "../../../types/movies.type";

export const getAllMovies = createAsyncThunk(`${API.getAllMoviesPath}`, async ()=>{
    try{
        const response = await httpQuery<any, MoviesResponseType>('GET', API.getAllMoviesPath);
        return response;
    }catch (err){
        console.log(err)
    }
})

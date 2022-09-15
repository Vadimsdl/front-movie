import { createAsyncThunk } from "@reduxjs/toolkit";
import { API } from "../../../common/enums";
import { httpQuery } from "../../fetchWrapper/fetchWrapper";
import { MovieType, AddMovieType } from "../../../types/movies.type";

export const addMovie = createAsyncThunk(`${API.addMoviePath}`, async (data:AddMovieType)=>{
    try{
        const response = await httpQuery<AddMovieType, MovieType>('POST', API.addMoviePath, data);
        return response;
    }catch (err){
        console.log(err)
    }
})

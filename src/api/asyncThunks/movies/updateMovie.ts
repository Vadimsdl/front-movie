import { createAsyncThunk } from "@reduxjs/toolkit";
import { API } from "../../../common/enums";
import { httpQuery } from "../../fetchWrapper/fetchWrapper";
import { MovieType } from "../../../types/movies.type";

export const updateMovie = createAsyncThunk(`${API.updateMovieByIdPath}-update`, async (data:MovieType)=>{
    try{
        const response = await httpQuery<MovieType, MovieType>('PUT', `${API.updateMovieByIdPath}${data._id}`, data);
        return response;
    }catch (err){
        console.log(err)
    }
})

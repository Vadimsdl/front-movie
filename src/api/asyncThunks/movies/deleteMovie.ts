import { createAsyncThunk } from "@reduxjs/toolkit";
import { API } from "../../../common/enums";
import { httpQuery } from "../../fetchWrapper/fetchWrapper";
import { MovieType, deleteResponse } from "../../../types/movies.type";

export const deleteMovie = createAsyncThunk(`${API.removeMovie}`, async (data:MovieType)=>{
    try{
        const response = await httpQuery<any, deleteResponse>('DELETE', `${API.removeMovie}${data._id}`, data);
        return response;
    }catch (err){
        console.log(err)
    }
})

import {createSlice} from "@reduxjs/toolkit";
import {getAllMovies} from "../../../api/asyncThunks/movies/getAllMovies";
import {MoviesListInitialStateType} from "../../../types/movies.type";
import {RootState} from "../../store";
import {addMovie} from "../../../api/asyncThunks/movies/addMovie";
import {updateMovie} from "../../../api/asyncThunks/movies/updateMovie";
import {deleteMovie} from "../../../api/asyncThunks/movies/deleteMovie";

const initialState: MoviesListInitialStateType = {
    loading: 'idle',
    movies: [
        {
            _id: '',
            name: '',
            description: '',
            score: '',
            owner: '',
            __v: 0
        }
    ],
    offset: 0,
    limit: 0,
    count: 0,
    isAddModalOpen: false,
};

export const moviesListSlice = createSlice({
    name: 'moviesList',
    initialState,
    reducers:{
        addModalOpenAction(state) {
            state.isAddModalOpen = true;
        },
        addModalCloseAction(state) {
            state.isAddModalOpen = false;
        },

    },
    extraReducers: builder => {
        builder.addCase(getAllMovies.pending, state=>{
            state.loading = 'pending';
        })
            .addCase(getAllMovies.fulfilled, (state, {payload})=>{
                state.movies = payload?.movies;
                state.offset = payload?.offset;
                state.limit = payload?.limit;
                state.count = payload?.count;
                state.loading = 'idle';
            })
            .addCase(getAllMovies.rejected, state => {
                state.loading = 'failed';
            })
            .addCase(addMovie.pending, state => {
                state.loading = 'pending';
            })
            .addCase(addMovie.fulfilled, (state, { payload}) => {
                if(payload){
                    state.loading = 'idle';
                    state.isAddModalOpen = false;
                    getAllMovies();
                }
                state.loading = 'failed';
            })
            .addCase(addMovie.rejected, state => {
                state.loading = 'failed';
            })
            .addCase(deleteMovie.pending, state => {
                state.loading = 'pending';
            })
            .addCase(deleteMovie.fulfilled, (state, {payload})=>{
                if(payload?.acknowledged){
                    state.loading = 'idle';
                }
                state.loading = 'failed';
            })
            .addCase(deleteMovie.rejected, state => {
                state.loading = 'failed';
            })
            .addCase(updateMovie.pending, state => {
                state.loading = 'pending';
            })
            .addCase(updateMovie.fulfilled, (state, { payload}) => {
                if(payload){
                    state.loading = 'idle';
                }
                state.loading = 'failed';
            })
            .addCase(updateMovie.rejected, state => {
                state.loading = 'failed';
            })
    }
})

export const selectMoviesList = (state: RootState):MoviesListInitialStateType => state.moviesList;
export const { addModalCloseAction, addModalOpenAction } = moviesListSlice.actions
export default moviesListSlice.reducer;

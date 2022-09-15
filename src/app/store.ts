import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import signUpReducer from "./slices/auth/signUpSlice";
import signInReducer from "./slices/auth/signInSlice";
import moviesListReducer from "./slices/movies/moviesListSlice";
export const store = configureStore({
    reducer:{
        signUp: signUpReducer,
        signIn: signInReducer,
        moviesList: moviesListReducer,
    }
})

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;

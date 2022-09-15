import {FC, ReactElement, useEffect} from "react";
import {useAppDispatch, useAppSelector} from "../../hooks/redux";
import {addModalOpenAction, selectMoviesList} from "../../app/slices/movies/moviesListSlice";
import {MoviesListInitialStateType} from "../../types/movies.type";
import {MovieItem} from "./MovieItem/MovieItem";
import {getAllMovies} from "../../api/asyncThunks/movies/getAllMovies";
import {MovieModal} from "./MovieItem/MovieModals/MovieModal";
import style from './MoviesList.module.css';
import {isLogin} from "../../utils/auth";

export const MoviesList: FC = (): ReactElement => {
    const { movies, isAddModalOpen }: MoviesListInitialStateType = useAppSelector(selectMoviesList)
    const dispatch = useAppDispatch()

    const openAddModalHandler = (): void => {
        dispatch(addModalOpenAction());
    }

    useEffect(() => {
        dispatch(getAllMovies());
    },[movies?.length]);

    return (
        <div>
            { !isLogin ?
                (<>
                    {movies?.map(movie =>
                        <MovieItem key={movie._id} movie={movie}/>
                    )}
                    {isAddModalOpen && <MovieModal />}
                    <button className={style.button_add} onClick={openAddModalHandler}> Add new movie</button>
                </>)
                : <h1>Log in pls ))))</h1>
                }

        </div>
    );
}

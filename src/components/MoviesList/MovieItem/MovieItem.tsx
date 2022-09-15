import {FC, ReactElement, useState} from "react";
import { MovieType } from "../../../types/movies.type";
import { useAppDispatch} from "../../../hooks/redux";
import {deleteMovie} from "../../../api/asyncThunks/movies/deleteMovie";
import {UpdateMovieForm} from "./MovieModals/MovieForm/UpdateMovieForm";
import style from './MovieItem.module.css';

type Props = {
    movie: MovieType;
}

export const MovieItem: FC<Props> = ({ movie }): ReactElement => {
    const dispatch = useAppDispatch();
    const [isUpdate, setIsUpdate] = useState(false);

    const openUpdateModalHandler = (): void => {
        setIsUpdate(!isUpdate);
    }

    const deleteMovieHandler = (): void => {
        dispatch(deleteMovie(movie));
    }
    return (
        <>
            {isUpdate ?
                <UpdateMovieForm movie={movie} setIsUpdate={setIsUpdate}/> :
                (
                    <div className={style.section_movie}>
                        <div className='list'>
                            <h4>Name:</h4>
                            <span>{movie.name}</span>
                        </div>
                        <div className='list'>
                            <h4>Description:</h4>
                            <span>{movie.description}</span>
                        </div>
                        <div className='list'>
                            <h4>Score:</h4>
                            <span>{movie.score}</span>
                        </div>
                        <div className={style.button_menu}>
                            <button onClick={openUpdateModalHandler}>Edit</button>
                            <button onClick={deleteMovieHandler}>Delete</button>
                        </div>
                    </div>
            )}
        </>

    )
}

import { Controller, useForm } from 'react-hook-form';
import { useAppDispatch } from "../../../../../hooks/redux";
import {AddMovieType, MovieType} from "../../../../../types/movies.type";
import { FC } from "react";
import { selectSignIn } from "../../../../../app/slices/auth/signInSlice";
//import { selectMoviesList } from "../../../../../app/slices/movies/moviesListSlice";
import {addMovie} from "../../../../../api/asyncThunks/movies/addMovie";
import {useSelector} from "react-redux";
import style from './AddMovieForm.module.css';


export const AddMovieForm: FC = () => {
    const dispatch = useAppDispatch();

    const {
        register,
        handleSubmit,
        reset
    } = useForm<MovieType>({mode: 'onChange'});

    const onSubmit = (data:AddMovieType, e: any): void => {
        e.preventDefault();
        dispatch(addMovie({...data, owner: localStorage.getItem('id') as string }));
        reset();
    }

    return (
        <div className={style.add_movie_form}>
            <form onSubmit={handleSubmit(onSubmit)}>
                <label id='name'>Name</label>
                <input
                    name='name'
                    ref={register('name').ref}
                    onChange={register('name').onChange}
                />
                <label id='description'>Description </label>
                <input
                    name='description'
                    ref={register('description').ref}
                    onChange={register('description').onChange}
                />
                <label id='score'>Score</label>
                <input
                    name='score'
                    ref={register('score').ref}
                    onChange={register('score').onChange}
                />
                <button type="submit">Add</button>
            </form>
        </div>
    )
}

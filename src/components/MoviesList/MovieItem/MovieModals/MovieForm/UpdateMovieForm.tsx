import { Controller, useForm } from 'react-hook-form';
import { useAppDispatch } from "../../../../../hooks/redux";
import { MovieType } from "../../../../../types/movies.type";
import { FC } from "react";
import { updateMovie } from "../../../../../api/asyncThunks/movies/updateMovie";
import style from "./UpdateMovieForm.module.css";

type AddMovieFormProps = {
    movie:MovieType;
    setIsUpdate(a: boolean):void;
}

export const UpdateMovieForm: FC<AddMovieFormProps> = ({ movie , setIsUpdate}) => {
    const dispatch = useAppDispatch();

    const {
        register,
        handleSubmit,
        reset
    } = useForm<MovieType>({mode: 'onChange', defaultValues: {name: movie.name, description: movie.description}});

    const onSubmit = (data:MovieType, e: any): void => {
        e.preventDefault();
        dispatch(updateMovie({...data, _id: movie._id}));
        setIsUpdate(false)
        reset();
    }

    return (
        <div className={style.section_movie}>
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
                <label id='score'>Score </label>
                <input
                    name='score'
                    ref={register('score').ref}
                    onChange={register('score').onChange}
                />
                <button type="submit">Update</button>
            </form>
        </div>
    )
}

import {FC, ReactElement} from "react";
import {AddMovieForm} from "./MovieForm/AddMovieForm";
import styles from './MovieModal.module.css';

export const MovieModal: FC = (): ReactElement => {
    return (
        <div className={styles.main}>
            <h5>Add movie</h5>
             <AddMovieForm/>
        </div>
    )
}

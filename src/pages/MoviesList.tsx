import {FC, ReactElement} from "react";
import {MoviesList} from "../components/MoviesList/MoviesList";

const MoviesListPage: FC = (): ReactElement => (
    <div>
        <h5>
            Movies List
        </h5>
        <MoviesList/>
    </div>
)

export default MoviesListPage;

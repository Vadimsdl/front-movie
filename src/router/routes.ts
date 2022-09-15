import SignUp from "../pages/SignUp";
import SignIn from "../pages/SignIn";
import MoviesList from "../pages/MoviesList";
import {isLogin} from "../utils/auth";

export const mainRoutes = {
    logIn: {
        title: 'Log in',
        path: '/auth/sign-in',
        element: SignIn,
        show: isLogin,
    },
    register: {
        title: 'Register',
        path: '/auth/sign-up',
        element: SignUp,
        show: isLogin,
    },
    moviesList: {
        title: 'Movies List',
        path: '/',
        element: MoviesList,
        show: true,
    }
};

import { FC, ReactElement } from "react";
import { useForm } from 'react-hook-form';
import {useAppDispatch} from "../../hooks/redux";
import {SignInType} from "../../types/signIn.type";
import {postSignInData} from "../../api/asyncThunks/auth/logInThunk";
import style from './SignInForm.module.css';

export const SignInForm: FC = (): ReactElement => {
    const dispatch = useAppDispatch();
    const {
        register,
        handleSubmit,
        reset,
    } = useForm<SignInType>({mode: 'onChange'});

    const onSubmit = (data: SignInType, e: any): void => {
        e.preventDefault();
        dispatch(postSignInData(data));
        reset();
    }

    return (
        <div>
            <form className={style.mainContainer} onSubmit={handleSubmit(onSubmit)}>
                <label id='email'>Email</label>
                <input
                    name='email'
                    type='email'
                    onChange={register('email').onChange}
                    ref={register('email').ref}
                />
                <label id='password'>Password</label>
                <input
                    name='password'
                    type='password'
                    onChange={register('password').onChange}
                    ref={register('password').ref}
                />
                <button className={style.button_sign} type="submit"> Log in</button>
            </form>
        </div>
    )
}

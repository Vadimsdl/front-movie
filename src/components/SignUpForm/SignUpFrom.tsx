import {FC, ReactElement} from "react";
import { Controller, useForm } from 'react-hook-form';
import {SignUpType} from "../../types/signUp.type";
import {useAppDispatch} from "../../hooks/redux";
import {postSignUpData} from "../../api/asyncThunks/auth/signUpThunk";
import style from './SignUpForm.module.css';
import {useNavigate} from "react-router-dom";

export const SignUpFrom: FC = (): ReactElement => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const {
        register,
        handleSubmit,
        reset
        } = useForm<SignUpType>({mode: 'onChange'});

    const onSubmit = (data: SignUpType, e: any) => {
        e.preventDefault();
        dispatch(postSignUpData(data));
        reset();
        navigate('/auth/sign-in');
    }

    return (
    <div>
        <form onSubmit={handleSubmit(onSubmit)} className={style.mainContainer}>
            <div>
                <label id='nickname'>Nickname</label>
                <input name='nickname' onChange={register('nickname').onChange} ref={register('nickname').ref}/>
            </div>
            <div>
                <label id='name'>Name</label>
                <input name='name' onChange={register('name').onChange} ref={register('name').ref}/>
            </div>
            <div>
                <label id='surname'>Surname</label>
                <input name='surname' onChange={register('surname').onChange} ref={register('surname').ref}/>
            </div>
            <div>
                <label id='email'>Email</label>
                <input name='email' type='email' onChange={register('email').onChange} ref={register('email').ref}/>
            </div>
            <div>
                <label id='password'>Password</label>
                <input name='password' type='password' onChange={register('password').onChange} ref={register('password').ref}/>
            </div>
            <div>
                <label id='confirmPassword'>Confirm password</label>
                <input name='confirmPassword' type='password' onChange={register('confirmPassword').onChange} ref={register('confirmPassword').ref}/>
            </div>
            <button className={style.button_reg} type="submit">Create account</button>
        </form>
    </div>
    );
}

import React from 'react';
import {Button} from '../../Button/Button';
import './LoginFrom.css';

interface ILoginForm {
    style: string;
    change: () => void;
}
export const LoginForm = ({style, change}: ILoginForm) => {
    return(
        <div className={style}>
            <form>
                <h1 className="h1-login">My AirWallet</h1>
                <input type="email" placeholder="E-mail"/>
                <div className="custom-search">
                    <input type="password" placeholder="Password"/>
                    <a className="custom-button" type="submit">Forgot?</a>
                </div>
                <Button className='login-button' appearance={'primary'} children={'Sign in'}/>
                <a className='a-link' onClick={change}>Create an account</a>
            </form>
        </div>
    )
}
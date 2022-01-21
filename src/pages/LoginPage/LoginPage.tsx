import React, {useEffect, useState} from 'react';
import {Split, Button, LoginForm, ProgressBar} from 'components';
import {withLoginLayout} from '../../layout/Layout';
import './LoginPage.css';
import {ImEarth} from 'react-icons/im';
import Droptest from '../../components/droptest/Droptest';

const LoginPage = (): JSX.Element => {

    const [isActive, setIsActive] = useState(false);
    const [style, setStyle] = useState('container');
    const [langColor, setLangColor] = useState('lang-before');
    const [footerState, setFooterState] = useState('footer-wrapper');


    const change = () => {
        setIsActive(true);
        setStyle('container-activate');
        setLangColor('lang-after');
        setFooterState('footer-login-after');
    }
    const goBack = () => {
        setIsActive(false);
        setStyle('container');
        setLangColor('lang-before');
        setFooterState('footer-wrapper');
    }

    return (
        <>
            {/*header*/}
            <div className="lang-wrapper">
                <a className="test" href="">
                    <div className={langColor}>
                        <div className="lang-icon"><ImEarth/></div>
                        <div className="lang-a">ENG</div>
                    </div>
                </a>
            </div>

            {/* body - LoginForm */}
            <LoginForm style={style} change={change}/>

            <Split className="Split" isActive={isActive}>
                <div className="sing-up-wrapper">
                    <Droptest/>
                </div>
            </Split>
            <div className={footerState}>
                <div className="footer-login">
                    <a target="_blank">Mobile version</a>
                    <a target="_blank">Terms of service</a>
                    <a target="_blank">Privacy policy</a>
                </div>
            </div>
        </>
    )
};

// @ts-ignore
export default withLoginLayout(LoginPage);

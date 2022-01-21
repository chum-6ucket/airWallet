import {HeaderProps} from './Header.props';
import styles from './HomeHeader.module.css';
// import './HomeHeader.module.css';
// import './Header.module.css';
import cn from 'classnames';
import React from 'react';
import {ImEarth} from 'react-icons/im';
import {FaUserAstronaut} from 'react-icons/fa';

export const HomeHeader = ({className, ...props}: HeaderProps): JSX.Element => {

    return (
        <>
            <header className={cn(className, styles.homeHeader)} {...props}>
                <div/><a href="">
                    <i><ImEarth/></i>
                </a>
                <a href="">
                    <div>ENG</div>
                </a><div/>
                <a href="">
                    <i><FaUserAstronaut/></i>
                </a>
                <a href=""><div>
                    user name
                </div></a>

            </header>
        </>
    );
};
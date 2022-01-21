import {HeaderProps} from './Header.props';
import styles from './Header.module.css';
import './Header.module.css';
import cn from 'classnames';
import React from 'react';
import {MdOutlineAirplaneTicket} from 'react-icons/md';

export const Header = ({className, ...props}: HeaderProps): JSX.Element => {

    return (
        <>
            <header className={cn(className, styles.header)} {...props}>
                <a href="" target="_blank">airwallet</a>
                <i><MdOutlineAirplaneTicket/></i>
            </header>
        </>
    );
};
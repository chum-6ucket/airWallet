import {FooterProps} from './Footer.props';
import styles from './Footer.module.css';
import cn from 'classnames';
import {useState} from 'react';
import LoginPage from '../../pages/LoginPage/LoginPage';

export const Footer = ({ className, ...props }: FooterProps): JSX.Element => {

    // const [state, setState] = useState("");
    // const handleOnSubmit = (e: any) => {
    //     e.preventDefault();
    //     alert('asdf');
    // };

    return (
        <footer className={cn(className, styles.footer)} {...props}>
            <a target='_blank'>Mobile Footer version</a>
            <a target='_blank'>Terms of service</a>
            <a target='_blank'>Privacy policy</a>
        </footer>
    );
};
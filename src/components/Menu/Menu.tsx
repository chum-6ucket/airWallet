import React from 'react';
import styles from './Menu.module.css';
import { GoMail } from 'react-icons/go';
import { ImExit } from 'react-icons/im';
import { IoIosSettings } from 'react-icons/io';
import { MdOutlineCreditCard } from 'react-icons/md';
import { RiHomeLine } from 'react-icons/ri';

export const Menu = (): JSX.Element => {

    return (
        <div className={styles.menu}>
            <div>
                <RiHomeLine/>
                <MdOutlineCreditCard/>
                <IoIosSettings/>
                <GoMail/>
            </div>
            <div>
                <ImExit/>
            </div>
        </div>
    );
};
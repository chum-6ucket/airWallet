import React, {useContext} from 'react';
import styles from './Menu.module.css';
import {GoMail, ImExit, IoIosSettings, MdOutlineCreditCard, RiHomeLine} from 'react-icons/all';

export const Menu = (): JSX.Element => {

    return (
        <div  className={styles.menu}>
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
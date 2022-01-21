import {FunctionComponent} from 'react';
import {LayoutProps} from './Layout.props';
import styles from './HomeLayout.module.css';
import {HomeHeader} from './Header/HomeHeader';
import {Sidebar} from './Sidebar/Sidebar';
import {Footer} from './Footer/Footer';


const LayoutHome = ({children, ...props}: LayoutProps): JSX.Element => {
    return (
        <div className={styles.homeWrapper}>
            <HomeHeader className={styles.homeHeader}/>
            <Sidebar className={styles.homeSidebar}/>
            <div className={styles.homeBody}>
                {children}
            </div>
            <Footer className={styles.homeFooter}/>
        </div>
    );
};


export const withHomeLayout = <T extends Record<string, unknown>>(Component: FunctionComponent<T>) => {
    return function WithHomeLayoutComponent(props: T): JSX.Element {
        return (
            <LayoutHome>
                <Component {...props} />
            </LayoutHome>
        )
    }
}
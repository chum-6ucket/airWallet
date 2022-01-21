import {LayoutProps} from './Layout.props';
import styles from './Layout.module.css';
import {Header} from './Header/Header'
import {Footer} from './Footer/Footer';
import {FunctionComponent} from 'react';

const LayoutLogin = ({children, ...props}: LayoutProps): JSX.Element => {
    return (
        <div className={styles.wrapperLogin}>
            <Header className={styles.header}/>
            <div className={styles.body}>
                {children}
            </div>
            <Footer className={styles.footer}/>
        </div>
    );
};

export const withLoginLayout = <T extends Record<string, unknown>>(Component: FunctionComponent<T>) => {
    return function WithLoginLayoutComponent(props: T): JSX.Element {
        return (
            <LayoutLogin>
                <Component {...props} />
            </LayoutLogin>
        )
    }
}
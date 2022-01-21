import {PProps} from './Tag.props';
import styles from './Tag.module.css';
import cn from 'classnames';

export const Tag = ({size = 's', children, color = 'ghost', href, className, ...props}: PProps): JSX.Element => {

    return (
        <div
            className={cn(styles.tag, className, {
                [styles.s]: size === 's',
                [styles.m]: size === 'm',
                [styles.ghost]: color === 'ghost',
                [styles.pink]: color === 'pink',
                [styles.blue]: color === 'blue',
                [styles.grey]: color === 'grey',
                [styles.green]: color === 'green'
            })}
            {...props}
        >{
            href
                ? <a href="href">{children}</a>
                : <>{children}</>
        }
        </div>
    )
};
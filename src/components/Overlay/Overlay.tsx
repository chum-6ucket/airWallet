import React, {useRef} from 'react';
import {CSSTransition} from 'react-transition-group';
import './Overlay.scss';
import {IOverlayProps} from './Overlay.props';
import cn from 'classnames';

export const Overlay = ({className, timeout = 300, isActive = false, onClick}: IOverlayProps): JSX.Element => {

    const nodeRef = useRef(null);

    return (
        <>
            <CSSTransition
                className={cn('Overlay', className)}
                in={isActive}
                nodeRef={nodeRef}
                timeout={timeout}
                unmountOnExit
                onClick={onClick}
            >
                <div ref={nodeRef}/>
            </CSSTransition>
        </>
)
}
import React, {ReactNode, useRef} from 'react';
import {CSSTransition} from 'react-transition-group';
import classNames from 'classnames';
import '../../pages/LoginPage/Splittest.css';

export interface ISidebarProps {
    className?: string;
    children?: ReactNode;
    transition?: number;
    isActive?: boolean;
    onClose?: (event: React.MouseEvent) => void;
}

export const Split = ({
                                                     className,
                                                     children,
                                                     transition = 300,
                                                     isActive = false,
                                                     onClose,
                                                 }: ISidebarProps): JSX.Element => {
    const nodeRef = useRef(null);

    return (
        <>
            <CSSTransition
                in={isActive}
                nodeRef={nodeRef}
                timeout={transition}
                unmountOnExit
            >
                <div className={classNames("Sidebar", className)} ref={nodeRef}>
                    {children}
                </div>
            </CSSTransition>
        </>
    );
};
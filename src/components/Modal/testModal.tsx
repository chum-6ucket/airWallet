import React, {useEffect, useState} from 'react';
import {default as ReactModal} from 'react-responsive-modal';
import {IModalProps} from './Modal.props';
import cn from 'classnames';
import {GrClose} from 'react-icons/gr';

import "react-responsive-modal/styles.css";
import "./Modal.module.scss";

export const TestModal = ({className, children, size, isOpen, onClose}: IModalProps) => {

    const defaultClassNames = {
        modal: cn('ModalDefault', {
            ModalDefault__medium: size === 'medium',
        }),
        closeButton: cn('ModalDefaultCloseButton'),
        className,
    };

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [styles, setStyles] = useState({});

    useEffect(() => {
        const scrollbarWidth =
            window.innerWidth - document.documentElement.clientWidth;
        if (isOpen && scrollbarWidth) {
            const _styles = {
                modal: {marginRight: `${scrollbarWidth + 16}px`},
            };
            setStyles(_styles);
            document.body.classList.add('Modal__open');
            document.body.style.paddingRight = `${scrollbarWidth}px`;
        }

        return () => {
            setStyles({});
            document.body.style.removeProperty('padding-right');
            document.body.classList.remove('Modal__open');
        };
    }, [isOpen]);

    return (
        <ReactModal
            classNames={defaultClassNames}
            center
            closeIcon={GrClose}
            open={isOpen}
            onClose={onClose}
        >
            <div className="Modal">{children}</div>
        </ReactModal>
    )
}
// eslint-disable-next-line react/display-name
TestModal.Header = ({
                    className,
                    align,
                    children,
                }: IModalHeaderProps): JSX.Element => {
    return (
        <div
            className={cn("ModalHeader", className, {
                ModalHeader__start: align === "start",
                ModalHeader__center: align === "center",
                ModalHeader__end: align === "end",
            })}
        >
            {children}
        </div>
    );
};
interface IModalHeaderProps {
    className?: string;
    align?: "start" | "center" | "end";
    children?: React.ReactNode;
}

// eslint-disable-next-line react/display-name
TestModal.Header = ({
                    className,
                    align,
                    children,
                }: IModalHeaderProps): JSX.Element => {
    return (
        <div
            className={cn("Header", className, {
                ModalHeader__start: align === "start",
                ModalHeader__center: align === "center",
                ModalHeader__end: align === "end",
            })}
        >
            {children}
        </div>
    );
};

interface IModalContentProps {
    className?: string;
    children?: React.ReactNode;
}

// eslint-disable-next-line react/display-name
TestModal.Content = ({ className, children }: IModalContentProps): JSX.Element => {
    return (
        <div className={cn("Content", className)}>{children}</div>
    );
};

interface IModalFooterProps {
    className?: string;
    buttonSubmitText?: string;
    onSubmit?: () => void;
}

// eslint-disable-next-line react/display-name
TestModal.Footer = ({
                    className,
                    buttonSubmitText = "Choice",
                    onSubmit,
                }: IModalFooterProps): JSX.Element => {
    return (
        <div className={cn("Footer", className)}>
            <button onClick={onSubmit}>{buttonSubmitText}</button>
        </div>
    );
};
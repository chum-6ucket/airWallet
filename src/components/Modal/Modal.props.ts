import React, {ReactNode} from 'react';

type ModalSize = 'medium';

export interface IModalProps {
    className?: string;
    children?: React.ReactNode;
    size?: ModalSize;
    isOpen: boolean;
    onClose: () => void;
}

export interface ModalHeaderProps {
    className?: string;
    children?: ReactNode;
    align?: 'start' | 'center' | 'end';
}

export interface ModalContentProps {
    className?: string;
    children?: ReactNode;
}

export interface ModalFooterProps {
    className?: string;
    buttonSubmitText?: string;
    onSubmit?: () => void;
}
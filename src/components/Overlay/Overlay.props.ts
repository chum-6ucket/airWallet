import React from 'react';

export interface IOverlayProps {
    className?: string;
    timeout?: number;
    isActive?: boolean;
    onClick?: (event: React.MouseEvent) => void;
}
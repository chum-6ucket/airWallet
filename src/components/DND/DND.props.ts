import { ReactNode } from 'react';

export interface DNDProps {
    tag: 'h1' | 'h2' | 'h3';
    children: ReactNode;
}
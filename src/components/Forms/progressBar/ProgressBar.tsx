import React from 'react';
import './progressBar.css';

interface ILoginForm {
    style: string;
    // change: () => void;
}
// {style, change}: ILoginForm
export const ProgressBar = ({style}: ILoginForm): JSX.Element => {
    return(
        <div className={style}>
        </div>
    )
}
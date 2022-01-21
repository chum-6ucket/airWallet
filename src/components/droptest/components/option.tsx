import React, { ReactNode } from "react";
import { useSelectContext } from "./selectContext";

interface IOption {
    children: ReactNode | ReactNode[];
    value: string;
    availability?: boolean;
}

const Option = ({ children, value, availability }: IOption) => {

        // const changeSelectedOption= useSelectContext();

    const { changeSelectedOption, isAvailable } = useSelectContext();

    return (
        <li className="select-option" onClick={() => {changeSelectedOption(value); isAvailable(availability)}}>
            {children}
            {/*{alert('asdf')}*/}
        </li>
    );
};

export default Option;
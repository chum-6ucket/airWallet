import { createContext, useContext } from "react";

interface ISelectContext {
    selectedOption: string;
    // , isAvailable: boolean | undefined
    changeSelectedOption: (option: string) => void;
    isAvailable: (isAvailable: boolean | undefined) => void;
}

const SelectContext = createContext<ISelectContext>({
    selectedOption: "",
    changeSelectedOption: (option: string) => {},
    isAvailable: (isAvailable: boolean | undefined) => {},
});

const useSelectContext = () => {
    const context = useContext(SelectContext);
    if (!context) {
        throw new Error("Error in creating the context");
    }
    return context;
};

export { useSelectContext, SelectContext };

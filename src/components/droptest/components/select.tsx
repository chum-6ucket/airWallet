import React, {ReactNode, useState, useRef} from 'react';
import useOnClickOutside from '../hooks/useOnClickOutside';
import {SelectContext} from './selectContext';
// import '../styles.css'
import ReCAPTCHA from 'react-google-recaptcha';
import {Button} from '../../Button/Button';
import {ProgressBar} from '../../Forms/progressBar/ProgressBar';
import {BsChevronLeft} from 'react-icons/all';
import {Router, useNavigate} from 'react-router';
import {Route} from "react-router-dom";
import HomePage from "../../../pages/HomePage/HomePage";

interface ISelect {
    children: ReactNode | ReactNode[];
    defaultValue?: string;
    placeholder?: string;
}

const Select = ({children, defaultValue, placeholder}: ISelect) => {

    const [availableState, setAvailableState] = useState<boolean | undefined>(true)
    const [selectedOption, setSelectedOption] = useState(defaultValue || '');
    const [borderStyle, setBorderStyle] = useState('select-container');
    const [recaptcha, setRecaptcha] = useState('hiddenState');
    const [buttonStyle, setButtonStyle] = useState('ghost');
    const [showDropdown, setShowDropdown] = useState(false);
    const [logUpStep, setLogUpStep] = useState('stepOne');
    const [localCounter, setLocalCounter] = useState(0);
    const [disabled, setDisabledState] = useState(true);
    const [progressBar, setProgressBar] = useState('bar-first-step');
    const selectPlaceholder = placeholder || 'Choose an option';
    const [fraction, setFraction] = useState('1/2');
    const selectContainerRef = useRef(null);
    const [childText, setChildText] = useState('next');
    const history = useNavigate()


    const clickOutsideHandler = () => {
        setShowDropdown(false);
        setBorderStyle('select-container');
    }

    useOnClickOutside(selectContainerRef, clickOutsideHandler);

    const updateSelectedOption = (option: string) => {
        setSelectedOption(option);
        setShowDropdown(false);
        setBorderStyle('select-container');
    };

    const showDropdownHandler = () => {
        setShowDropdown(!showDropdown);
        setBorderStyle('select-container-active');
    }

    const addExceptions = (isAvailable: boolean | undefined) => {
        setAvailableState(isAvailable)

        if (isAvailable) {
            setLocalCounter(localCounter + localCounter)
            // setButtonStyle('primary_blue')
            setButtonStyle('primary_blue')
            setDisabledState(false)

        } else {
            setLocalCounter(1)
            setButtonStyle('ghost')
            setDisabledState(true)
        }
        if (localCounter > 0) {
            setRecaptcha('recaptcha')
            setButtonStyle('ghost')
            setDisabledState(true)
        }
    }

    const nextStep = () => {

        switch (fraction) {
            case '1/2':
                setLogUpStep('stepTwo')
                setProgressBar('bar-second-step')
                setFraction('2/2')
                setChildText('Sing up')

                break;
            case '2/2':
                setRecaptcha('hiddenState')
                history('/home');
                break;
            default:
                break;
        }
    }

    return (                                                                   /*, isAvailable: isAvailable*/
        <SelectContext.Provider
            value={{selectedOption, changeSelectedOption: updateSelectedOption, isAvailable: addExceptions}}
        >
            <div className={logUpStep}>
                <div className={showDropdown ? 'select-container-active' : 'select-container'} ref={selectContainerRef}>

                    <div
                        className={showDropdown ? 'selected-text active' : 'selected-text'}
                        onClick={showDropdownHandler}
                    >
                        {selectedOption.length > 0 ? selectedOption : selectPlaceholder}
                    </div>
                    <ul
                        className={
                            showDropdown
                                ? 'select-options show-dropdown-options'
                                : 'select-options hide-dropdown-options'
                        }

                    >
                        {children}
                    </ul>
                </div>
            </div>
            <div className={availableState ? 'hiddenState' : 'visibleState'}>
                <p>
                    Sorry, we're not providing our services in your country.
                </p>
                <div className="padding">
                    <input className="sing-up-input" type="email" placeholder="E-mail"/>
                    <p className='paragraph'>
                        Leave your data, and we will make sure to put you oon the waiting list for our services in your
                        country.
                    </p>
                </div>
            </div>
            <div className={recaptcha}>
                <ReCAPTCHA
                    sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
                />
            </div>
            <div className={logUpStep === 'stepTwo' ? 'visibleState' : 'hiddenState'}>
                <h2>Thank you for choosing us!</h2>
            </div>
            <ProgressBar style={progressBar}/>
            <div className="wrapper-go-back">
                <a className="a-go-back"><BsChevronLeft/></a>
            </div>
            <div className="wrapper-fraction">{fraction}</div>
            {/*className={'sing-up-button'}*/}
            <Button className={'sing-up-button'} appearance={buttonStyle} children={childText} onClick={nextStep}
                    disabled={disabled}/>
        </SelectContext.Provider>
    );
};

export default Select;

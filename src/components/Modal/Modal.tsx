import React, {useState} from 'react';
import {ModalContentProps, ModalFooterProps, ModalHeaderProps, IModalProps} from './Modal.props';
import {default as ReactModal} from 'react-responsive-modal';
import cn from 'classnames';
import 'react-responsive-modal/styles.css';

import './Modal.style.css'
import {Button, ToggleSwitch} from '../../components';


export const Modal = (): JSX.Element => {
    const [open, setOpen] = useState(true);
    const onCloseModal = () => setOpen(false);

    let [phone, setPhone] = useState(false);
    let [email, setEmail] = useState(false);

    return (
        <div className="wrapperModal">
            <ReactModal open={open} onClose={onCloseModal} center
                        classNames={{
                            overlay: 'customOverlay',
                            modal: 'customModal',
                        }}>
                <h1 className="heading">Important note!</h1>
                <p className="message">
                    For your security we recommended you to set up the 2-Factor Authentication.
                    By turning on this option you agree to confirm your transactions via confirmation
                    code sent to your e-mail or telephone number OR to activate the Google Authentication services.
                </p>

                <div className="first-toggle-switch">
                    <ToggleSwitch id="daily" small checked={phone} onChange={setPhone}/>
                </div>
                <p className="wrapper-first-message">
                    <div>Set up Google Authenticator. <a>Press here to proceed with setting up</a></div>
                </p>

                <div className="second-toggle-switch">
                    <ToggleSwitch id="weekly" small checked={email} onChange={setEmail}/>
                </div>
                <p className="wrapper-second-message">
                    <div>Turn on 2-Factor Authentication</div>
                </p>

                <div className="radio-switch">
                    <div className='radioPadding'>
                        <input type="radio" id="byPhone" name="phone" value="byPhone"/>
                        <input type="radio" id="byMail" name="email" value="byMail"/>
                    </div>
                </div>

                <div className="radio-message">
                    <div className='paddingNull'>
                        <div>Confirmation by phone</div>
                        <div>Confirmation by e-mail</div>
                    </div>
                </div>



                {/*<input type="radio" id="dewey" name="drone" value="dewey"></input>*/}
                {/*<div>*/}
                {/*    <label htmlFor="dewey">Dewey</label>*/}
                {/*</div>*/}
                <Button appearance={'primary_blue'} children={'Save'} className={'saveButton'}/>
                <Button appearance={'primary'} children={'Skip for now'} className={'skipButton'}/>
            </ReactModal>
        </div>
    );
};

// export const Modal = ({className, children, size = 'medium', isOpen, onClose}: ModalProps): JSX.Element => {
//
//     const defaultClassNames = {
//         modal: classNames('ModalDefault', {
//             ModalDefault__medium: size === 'medium',
//         }),
//         closeButton: classNames('ModalDefaultCloseButton'),
//         className,
//     };
//
//     const [isOpenModal, setIsOpenModal] = useState(true);
//
//     const handleModalOpen = () => {
//         setIsOpenModal(true);
//     }
//
//     const handleModalClose = () => {
//         setIsOpenModal(false);
//     }
//
//     const handleModalSubmit = () => {
//         setIsOpenModal(false);
//     };
//
//     const [styles, setStyles] = useState({})
//
//     return (
//         <ReactModal
//             classNames={defaultClassNames}
//             center
//             closeIcon={<IoClose/>}
//             styles={styles}
//             open={isOpen}
//             onClose={onClose}
//         >
//             <div className="Modal">
//                 {children}
//             </div>
//         </ReactModal>
//     );
// };

Modal.Header = ({className, children, align}: ModalHeaderProps): JSX.Element => {
    return (
        <div
            // className={cn(styles.modal, className, {
            //     [styles.start]: align === 'start',
            //     [styles.center]: align === 'center',
            //     [styles.end]: align === 'end'
            // })}
        >
            {children}
        </div>
    )
}

Modal.Content = ({className, children}: ModalContentProps): JSX.Element => {
    return (
        <div
            className={cn('ModalContent', className)}
        >
            {children}
        </div>
    )
}

Modal.Footer = ({className, buttonSubmitText, onSubmit}: ModalFooterProps): JSX.Element => {
    return (
        <div
            className={cn('ModalContent', className)}
        >
            <button onClick={onSubmit}>{buttonSubmitText}</button>
        </div>
    )
}

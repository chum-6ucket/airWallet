import React, {useState} from 'react';
import {Button, Modal, Overlay, TestModal, ToggleSwitch} from 'components';
import {withHomeLayout} from '../../layout/HomeLayout';
import './HomePage.css';


const HomePage = (): JSX.Element => {

    // const [isOpen, setOpen] = useState(false)

    const handleOpen = () => {
        setOpen(true)
    }

    const handleClose = () => {
        setOpen(false)
    }


    const [isOpenModal, setIsOpenModal] = useState(false);

    const handleModalOpen = () => {
        setIsOpenModal(true);
    };

    const handleModalClose = () => {
        setIsOpenModal(false);
    };

    const handleModalSubmit = () => {
        setIsOpenModal(false);
    };


    const [open, setOpen] = useState(true);
    const onCloseModal = () => setOpen(false);

    let [phone, setPhone] = useState(false);
    let [email, setEmail] = useState(false);

    return (
        <>
            <Modal/>

            {/*<button onClick={handleOpen}>asdf</button>*/}
            {/*/!*<Overlay isActive={isOpen} onClick={handleClose} />*!/*/}

            {/*<button onClick={handleModalOpen}>Open</button>*/}

            {/*<TestModal size="medium" isOpen={isOpenModal} onClose={handleModalClose}>*/}
            {/*    /!*<Modal/>*!/*/}
            {/*    <TestModal.Header>*/}
            {/*        <h1 className="start">Important note!</h1>*/}
            {/*    </TestModal.Header>*/}
            {/*    <TestModal.Content>*/}
            {/*        <div className="wrapperModal">*/}
            {/*        /!*    <div className="customModal">*!/*/}

            {/*                <p className="message">*/}
            {/*                    For your security we recommended you to set up the 2-Factor Authentication.*/}
            {/*                    By turning on this option you agree to confirm your transactions via confirmation*/}
            {/*                    code sent to your e-mail or telephone number OR to activate the Google Authentication*/}
            {/*                    services.*/}
            {/*                </p>*/}

            {/*                <div className="first-toggle-switch">*/}
            {/*                    <ToggleSwitch id="daily" small checked={phone} onChange={setPhone}/>*/}
            {/*                </div>*/}
            {/*                <p className="wrapper-first-message">*/}
            {/*                    <div>Set up Google Authenticator. <a>Press here to proceed with setting up</a></div>*/}
            {/*                </p>*/}

            {/*                <div className="second-toggle-switch">*/}
            {/*                    <ToggleSwitch id="weekly" small checked={email} onChange={setEmail}/>*/}
            {/*                </div>*/}
            {/*                <p className="wrapper-second-message">*/}
            {/*                    <div>Turn on 2-Factor Authentication</div>*/}
            {/*                </p>*/}

            {/*                <div className="radio-switch">*/}
            {/*                    <div className="radioPadding">*/}
            {/*                        <input type="radio" id="byPhone" name="phone" value="byPhone"/>*/}
            {/*                        <input type="radio" id="byMail" name="email" value="byMail"/>*/}
            {/*                    </div>*/}
            {/*                </div>*/}

            {/*                <div className="radio-message">*/}
            {/*                    <div className="paddingNull">*/}
            {/*                        <div>Confirmation by phone</div>*/}
            {/*                        <div>Confirmation by e-mail</div>*/}
            {/*                    </div>*/}
            {/*                </div>*/}

            {/*                <Button appearance={'primary_blue'} children={'Save'} className={'saveButton'}/>*/}
            {/*                <Button appearance={'primary'} children={'Skip for now'} className={'skipButton'}/>*/}

            {/*            </div>*/}
            {/*        /!*</div>*!/*/}

            {/*        /!*<Modal.Header>*!/*/}
            {/*        /!*    <h2>Title</h2>*!/*/}
            {/*        /!*</Modal.Header>*!/*/}
            {/*        /!*<Modal.Content>*!/*/}
            {/*        /!*    <div>Content</div>*!/*/}
            {/*        /!*</Modal.Content>*!/*/}

            {/*    </TestModal.Content>*/}
            {/*    /!*<Modal.Footer className='saveButton' buttonSubmitText="Choice" onSubmit={handleModalSubmit} />*!/*/}
            {/*</TestModal>*/}


            <h3 className="send-money-heading">
                Send money
            </h3>
            <div className="send-money-box">
                <div className="testbox-ghost"/>
                <div/>
                <div className="testbox-ghost"/>
            </div>

            <h3 className="receive-money-heading">
                Receive money
            </h3>
            <div className="receive-money-box">
                <div className="testbox-ghost"/>
                <div/>
                <div className="testbox-ghost"/>
            </div>

            <h3 className="wallets-money-heading">
                My wallets
            </h3>
            <div className="wallets-money-box">
                <div className="testbox-blue"/>
                <div/>
                <div className="testbox-blue"/>
                <div/>
                <div className="testbox-blue"/>
                <div/>
                <div className="testbox-blue"/>
                <div/>
                <div className="testbox-modal"/>
            </div>


            <h3 className="cards-money-heading">
                My cards
            </h3>
            <div className="cards-money-box">
                <div className="bigtestbox"/>
                <div/>
                <div className="bigtestbox"/>
                <div/>
                <div className="testbox-modal"/>
            </div>
        </>
    )
};

export default withHomeLayout(HomePage);
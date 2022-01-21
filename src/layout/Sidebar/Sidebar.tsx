import {SidebarProps} from './Sidebar.props';
import styles from './Sidebar.module.css';
import cn from 'classnames';
import './Sidebar.scss';
import {Menu} from '../../components';
import { BiExit } from 'react-icons/bi';
import { FiCreditCard } from 'react-icons/fi';
import { IoMailOutline } from 'react-icons/io5';
import { IoSettingsOutline } from 'react-icons/io5';
import { MdOutlineAirplaneTicket } from 'react-icons/md';
import { RiHome2Line } from 'react-icons/ri';

export const Sidebar = ({className, ...props}: SidebarProps): JSX.Element => {
    return (
        <div className={cn(className, styles.sidebar)}{...props}>
            <div className="sidebar">
                <div className="logo-details">
                    <div className="wrapper-logo">
                        airwallet
                        <div className="logo-icon-details">
                            <MdOutlineAirplaneTicket/>
                        </div>
                    </div>
                </div>

                <div className="first-menu-item">
                    <div>Dashboard</div>
                </div>
                <div className="second-menu-item">
                    <div>Transactions</div>
                </div>
                <div className="third-menu-item">
                    <div>Profile settings</div>
                </div>
                <div className="fourth-menu-item">
                    <div>Messages</div>
                </div>


                <div className="first-menu-icon"><RiHome2Line/></div>
                <div className="second-menu-icon"><FiCreditCard/></div>
                <div className="third-menu-icon"><IoSettingsOutline/></div>
                <div className="fourth-menu-icon"><IoMailOutline/></div>
                <div className="exit-menu-icon"><BiExit/></div>
            </div>
        </div>
    );
};
import React from 'react';
import './App.scss';
import HomePage from '../../pages/HomePage/HomePage';
import LoginPage from '../../pages/LoginPage/LoginPage';

import 'react-dropdown/style.css';
import {Route, Routes} from "react-router";

const App = (): JSX.Element => {

    return (
        <Routes>
            <Route path={"/home"} element={<HomePage/>}/>
            <Route path={"/"} element={<LoginPage/>}/>
        </Routes>
    );

}
export default App;
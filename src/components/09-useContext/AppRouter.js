import React from 'react';
import {
    BrowserRouter as Router,
    Routes,
    Route, Link, Navigate
} from "react-router-dom";
import AboutScreen from "./AboutScreen";
import HomeScreen from "./HomeScreen";
import LoginScreen from "./LoginScreen";
import Navbar from "../08-useReducer/Navbar";

const AppRouter = () => {
    return (
        <Router>
            <div>
                <Navbar />

                <div className={'container'}>
                    <Routes>
                        <Route exact={true} path={'/about'} element={ <AboutScreen /> } />
                        <Route exact={true} path={'/login'} element={ <LoginScreen /> } />
                        <Route exact={true} path={'/'} element={ <HomeScreen /> } />
                        <Route path="*" element={<Navigate to="/" />}/>
                    </Routes>
                </div>

            </div>
        </Router>


    );
};

export default AppRouter;

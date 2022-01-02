import React from 'react';
import {Link, NavLink} from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
            <div className="container-fluid">
                <Link to="./" className="navbar-brand">useContext</Link>

                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <NavLink exact={'true'} activeclassname={'active'} to="./" className="nav-link" aria-current="page">Home</NavLink>
                        <NavLink exact={'true'} activeclassname={'active'} to="./about" className="nav-link">About</NavLink>
                        <NavLink exact={'true'} activeclassname={'active'} to="./login" className="nav-link">Login</NavLink>
                    </div>
                </div>
            </div>
        </nav>

    );
};

export default Navbar;

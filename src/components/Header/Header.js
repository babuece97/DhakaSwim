import React from 'react';
import Navbar from '../Navbar/Navbar';
import "./Header.css";

const Header = () => {
    return (
        <div className="row d-flex header align-items-center justify-content-center">
            <Navbar></Navbar>
            <div className="col-md-6">
                <h1 className="title"> BE SMARTER AND SAFE LIFE</h1>

            </div>

        </div>
    );
};

export default Header;
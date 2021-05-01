import React, { Component } from 'react';
import {Link} from "react-router-dom";

class Header extends Component {
    render() {
        return (
            <header>
                <Link to="/" className="brand">FFW</Link>
                <div className="menu">
                    <div className="btn">
                    <i className="fas fa-times close-btn" />
                    </div>
                    <Link to="/">Home</Link>
                    <Link to="/services">Services</Link>
                    <Link to="/contact">Contact</Link>
                    <Link to="/login">Login</Link>
                    <Link to="/register">Register</Link>
                </div>
                <div className="btn">
                    <i className="fas fa-bars menu-btn" />
                </div>
            </header>
        );
    }
}

export default Header;
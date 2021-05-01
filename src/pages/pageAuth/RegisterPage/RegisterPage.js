import React, { Component } from 'react';
import {Link} from 'react-router-dom';

import './Register.scss';


class RegisterPage extends Component {
    render() {
        return (
            <div className="login-page">
                <div className="login-container">
                <form action className="form-login">
                <ul className="login-nav">
                    <li className="login-nav__item ">
                    <Link to="/login">Login</Link>
                    </li>
                    <li className="login-nav__item active">
                    <Link to="/register">Register</Link>
                    </li>
                </ul>
                <label htmlFor="login-input-user" className="login__label">
                    Username
                </label>
                <input id="login-input-user" className="login__input" type="text" name="username" />

                <label htmlFor="login-input-email" className="login__label">
                    Email
                </label>
                <input id="login-input-user" className="login__input" type="email" name='email' />

                <label htmlFor="login-input-password" className="login__label">
                    Password
                </label>
                <input id="login-input-password" className="login__input" type="password" name="password" />

                <label htmlFor="login-input-phone" className="login__label">
                    Phone
                </label>
                <input id="login-input-user" className="login__input" type="number" name="phone" />

                <label htmlFor="login-sign-up" className="login__label--checkbox">
                    <input id="login-sign-up" type="checkbox" className="login__input--checkbox" />
                    you agree to the Terms of Service & Privacy Policy
                </label>
                <button className="login__submit" disabled>Register</button>
                </form>
            </div>
        </div>
        );
    }
}

export default RegisterPage;
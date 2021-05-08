import React, { Component } from 'react';
import {Link} from 'react-router-dom';

import './login.scss';

class LoginPage extends Component {
    render() {
        return (
            <div className="login-page">
                 <div className="login-container">
                    <form action className="form-login">
                    <ul className="login-nav">
                        <li className="login-nav__item active">
                        <Link to="/login">Login</Link>
                        </li>
                        <li className="login-nav__item">
                        <Link to="/register">Register</Link>
                        </li>
                    </ul>
                    <label htmlFor="login-input-user" className="login__label">
                        Email
                    </label>
                    <input id="login-input-user" 
                        className="login__input" type="email" 
                        name='email' 
                        placeholder="Vd:NguyenvanB@gmail.com"
                    />

                    <label htmlFor="login-input-password" className="login__label">
                        Password
                    </label>
                    <input id="login-input-password" 
                        className="login__input" 
                        type="password" 
                        name="password"
                        placeholder="Nhập password"
                        />
                    
                    <label htmlFor="login-sign-up" className="login__label--checkbox">
                        <input id="login-sign-up" type="checkbox" className="login__input--checkbox" />
                        Keep me Login
                    </label>
                    <button className="login__submit" >Login</button>
                    </form>
                    <a href="###" className="login__forgot">Forgot Password?</a>
                </div>
            </div>
        );
    }
}

export default LoginPage;
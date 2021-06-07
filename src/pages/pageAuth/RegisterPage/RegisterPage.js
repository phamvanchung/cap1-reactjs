import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';
import {actRegisterReq} from '../../../actions/actAuth';
import './Register.css';

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
toast.configure();

class RegisterPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userName: '',
            email:'',
            password: '',
            phoneUser: '',
            avatar:'',
            permissions: '',
            submitted: false,
        }
    }
    handleOnChange = (e) => {
        const { name, value } = e.target;
        this.setState({
            [name]: value,
        });
    }
    handleOnChangeFile = (e) => {
        this.setState({
            [e.target.name]:e.target.files[0]
        });
    }

    handleSubmit = (e) =>{
        e.preventDefault();
        this.setState({ submitted: true });
        const { history } = this.props;
        const {userName, password, email,phoneUser,permissions,avatar} =this.state;
        const data=new FormData();
        data.append('userName',userName);
        data.append('email', email);
        data.append('password', password);
        data.append('phoneUser', phoneUser);
        data.append('permission', permissions);
        data.append('avatar', avatar);
        this.props.onRegisterUser(data);
        history.push('/login');
    }

    render() {
        const { userName, password,email,phoneUser,submitted } = this.state;
        return (
            <div className="login-page">
                <div className="login-container">
                <form onSubmit={this.handleSubmit} className="form-login" encType="multipart/form-data">
                <ul className="login-nav">
                    <li className="login-nav__item ">
                    <Link to="/login">Login</Link>
                    </li>
                    <li className="login-nav__item active">
                    <Link to="/register">Register</Link>
                    </li>
                </ul>
                <div className={'form-group' + (submitted && !userName ? ' has-error' : '')}>
                    <label htmlFor="login-input-user" className="login__label">
                        Username
                    </label>
                    <input id="login-input-user" 
                    className="login__input" 
                    type="text" name="userName" 
                    value={userName}
                    required
                    onChange={this.handleOnChange}
                    />
                </div>
                <div className={'form-group' + (submitted && !email ? ' has-error' : '')}>
                    <label htmlFor="login-input-email" className="login__label">
                        Email
                    </label>
                    <input id="login-input-email" 
                    className="login__input" 
                    type="email" name='email' 
                    value={email}
                    required
                    onChange={this.handleOnChange}
                    />
                  
                </div>
                <div className={'form-group' + (submitted && !password ? ' has-error' : '')}>
                    <label htmlFor="login-input-password" className="login__label">
                        Password
                    </label>
                    <input id="login-input-password" 
                    className="login__input" 
                    type="password" name="password" 
                    value={password} required
                    onChange={this.handleOnChange}
                    />
                </div>
                <div className={'form-group' + (submitted && !phoneUser ? ' has-error' : '')}>
                    <label htmlFor="login-input-phone" className="login__label">
                        Phone
                    </label>
                    <input id="login-input-phone" 
                    className="login__input" 
                    type="number" name="phoneUser"
                    value={phoneUser} required
                    onChange={this.handleOnChange}
                    />
                </div>
                <div className="form-group">
                    <label className="login__label">Role</label>
                    <select
                    className="form-control"
                    name="permissions"
                    onChange={this.handleOnChange}
                    >
                    <option>Permissions</option>
                    <option value="customer">Customer</option>
                    <option value="shop">Shop</option>
                    {/* <option value="admin">Admin</option> */}
                    </select>
                </div>
                    <label htmlFor="login-input-avatar" className="login__label">Avatar</label>
                    <input
                        className="login_avatar" 
                        type="file" name="avatar"
                        onChange={this.handleOnChangeFile}
                     />

                <label htmlFor="login-sign-up" className="login__label--checkbox">
                    {/* <input id="login-sign-up" type="checkbox" className="login__input--checkbox" />
                    you agree to the Terms of Service & Privacy Policy */}
                </label>
                <div className="form-group">
                    <button className="login__submit" >Register</button>
                </div>
                </form>
            </div>
        </div>
        );
    }
}
const mapDispatchToProps = (dispatch, props) =>({
    onRegisterUser: (userData) =>{
        dispatch(actRegisterReq(userData))
    }
})

export default connect(null,mapDispatchToProps) (RegisterPage);
import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';
import {actRegisterReq} from '../../../actions/actAuth';

import './Register.scss';


class RegisterPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userName: '',
            email:'',
            password: '',
            phoneUser: '',
            avatar:'',
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
        console.log(e.target.files[0]);
        
    }

    handleSubmit = (e) =>{
        e.preventDefault();
        this.setState({ submitted: true });
        const { history } = this.props;
        const {userName, password, email,phoneUser} =this.state;
        const data = {
            userName: userName,
            email: email,
            password: password,
            phoneUser: phoneUser,
        }
        // this.props.onRegisterUser(data);
        // console.log(data);
        const myPromiseRegisterUser = new Promise((myResolve, myReject) => {
            this.props.onRegisterUser(data);
            console.log('data',data);
            myResolve('a');
            myReject('b');
        });
        myPromiseRegisterUser.then(() => {
            history.push('/login');
        });
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
                    {submitted && !userName &&
                            <div className="help-block">Username is required</div>
                        }
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
                    {submitted && !email &&
                        <div className="help-block">Email is required</div>
                    }
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
                    {submitted && !password &&
                     <div className="help-block">Password is required</div>
                    }
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
                {submitted && !phoneUser &&
                    <div className="help-block">Phone is required</div>
                }
                </div>
                    <label htmlFor="login-input-avatar" className="login__label">
                        Avatar
                    </label>
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
                    <button className="login__submit">Register</button>
                </div>
                </form>
            </div>
        </div>
        );
    }
}
// const mapStateToProps =(state)=>({
//     registering:state.auth,
// })
const mapDispatchToProps = (dispatch, props) =>({
    onRegisterUser: (userData) =>{
        dispatch(actRegisterReq(userData))
    }
})

export default connect(null,mapDispatchToProps) (RegisterPage);
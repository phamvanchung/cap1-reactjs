import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';
import {actRegisterReq} from '../../../actions/actAuth';

import './Register.scss';


class RegisterPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            email:'',
            password: '',
            phone: '',
            submitted: false,
        }
    }
    handleChange = (e) => {
        const { name, value } = e.target;
        this.setState({
            [name]: value,
        });
    }
    handleSubmit = (e) =>{
        e.preventDefault();
        this.setState({ submitted: true });
        const { history } = this.props;
        const {username, password, email,phone} =this.state;
        const data = {
            userName: username,
            email: email,
            password: password,
            phone: phone,
        }
        // this.props.onRegisterUser(data);
        // console.log(data);
        const myPromiseRegisterUser = new Promise((myResolve, myReject) => {
            this.props.onRegisterUser(data);
            console.log('data',data);
            myResolve('aaaaaaaaaa');
            myReject('bbbbbbbbbbbb');
        });
        myPromiseRegisterUser.then(() => {
            history.push('/login');
        });
    }

    render() {
        const { username, password,email,phone,submitted } = this.state;
        return (
            <div className="login-page">
                <div className="login-container">
                <form onSubmit={this.handleSubmit} className="form-login">
                <ul className="login-nav">
                    <li className="login-nav__item ">
                    <Link to="/login">Login</Link>
                    </li>
                    <li className="login-nav__item active">
                    <Link to="/register">Register</Link>
                    </li>
                </ul>
                <div className={'form-group' + (submitted && !username ? ' has-error' : '')}>
                    <label htmlFor="login-input-user" className="login__label">
                        Username
                    </label>
                    <input id="login-input-user" 
                    className="login__input" 
                    type="text" name="username" 
                    value={username}
                    required
                    onChange={this.handleChange}
                    />
                    {submitted && !username &&
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
                    onChange={this.handleChange}
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
                    onChange={this.handleChange}
                    />
                    {submitted && !password &&
                     <div className="help-block">Password is required</div>
                    }
                </div>
                <div className={'form-group' + (submitted && !phone ? ' has-error' : '')}>
                    <label htmlFor="login-input-phone" className="login__label">
                        Phone
                    </label>
                    <input id="login-input-phone" 
                    className="login__input" 
                    type="number" name="phone"
                    value={phone} required
                    onChange={this.handleChange}

                 />
                {submitted && !phone &&
                    <div className="help-block">Phone is required</div>
                }
                </div>

                <label htmlFor="login-sign-up" className="login__label--checkbox">
                    <input id="login-sign-up" type="checkbox" className="login__input--checkbox" />
                    you agree to the Terms of Service & Privacy Policy
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
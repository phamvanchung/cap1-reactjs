import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';
import {actLoginReq} from '../../../actions/actAuth';
import './login.css';

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
toast.configure();

class LoginPage extends Component {

    constructor(props) {
        super(props)
        this.state={
            email: '',
            password:'',
            isLogin: false,
            submitted: false,
        }
    }
    componentDidUpdate(preProps) {
        if (preProps.login.isLogin === true) {
          this.props.history.push('/');
        }
      }
    
      static getDerivedStateFromProps(nextprops, preState) { // neu nexprops(du lieu thay doi) thay doi hoac render se goi ham preState la props cu
        if (nextprops.login !== preState.login) {
          return { login: nextprops.login };
        } return null;
      }

      handleOnChange = (e) => {
        const { name, value } = e.target;
        this.setState({
            [name]: value,
        });
      }

      handleSubmit = (e) => {
        e.preventDefault();
        this.setState({
            submitted:true
        })
        this.props.onLogin(this.state);
      }

    render() {
        const { history } = this.props;
        const {email,password,submitted} = this.state;
        if (this.props.login.isLogin === true) {
            history.push('/');
          }
        return (
            <div className="login-page">
                 <div className="login-container">
                    <form onSubmit={this.handleSubmit}  className="form-login">
                    <ul className="login-nav">
                        <li className="login-nav__item active">
                        <Link to="/login">Login</Link>
                        </li>
                        <li className="login-nav__item">
                        <Link to="/register">Register</Link>
                        </li>
                    </ul>
                    <div className={'form-group' + (submitted && !email ? ' has-error' : '')}>
                        <label htmlFor="login-input-user" className="login__label">
                            Email
                        </label>
                        <input id="login-input-user" 
                            className="login__input" type="email" 
                            name='email' 
                            // placeholder="Vd:NguyenvanB@gmail.com"
                            value={email}
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
                            type="password" 
                            name="password"
                            // placeholder="Nhập password"
                            value={password}
                            onChange={this.handleOnChange}
                        />
                        {submitted && !password &&
                        <div className="help-block">Password is required</div>
                        }
                    </div>
                   
                    <label htmlFor="login-sign-up" className="login__label--checkbox">
                        {/* <input id="login-sign-up" type="checkbox" className="login__input--checkbox" />
                        Keep me Login */}
                    </label>
                    <div>
                        <button className="login__submit" >Login</button>
                        
                    </div>
                    <Link to='/' className="login__cancel" >Cancel</Link>
                    </form>
                    <a href="###" className="login__forgot">Forgot Password?</a>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    login: state.auth,
  });

const mapDispatchToProps = (dispatch, props) => 
  ({
    onLogin: (dataUser) => {
      dispatch(actLoginReq(dataUser));
    },
  });

export default connect(mapStateToProps,mapDispatchToProps) (LoginPage);
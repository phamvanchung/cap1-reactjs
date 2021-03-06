import React, { Component } from 'react';
import {Link} from "react-router-dom";
import { connect } from 'react-redux';
import './Header.css';
import {USER_IMG} from '../../../constants/service';
import { HashLink as Links } from 'react-router-hash-link';

class Header extends Component {
    componentDidMount() {
        window.scrollTo(0, 0);
    }
    
    handleLogout = () => {
        localStorage.clear();
        window.location.reload();
        // this.props.history.push('/')
      }
    
    showUserIsLogin = (userLogin) => {
        if(userLogin.dataUser === null){
            return (
            <div className="menu">
                <Link to="/login">Login</Link>
                <Link to="/register">Register</Link>
            </div>
            )
        }else{
            return (
                <ul className="nav navbar-right navbar-top-links">
                    <li className="dropdown">
                    <a className="dropdown-toggle" data-toggle="dropdown" href="###">
                        <img src={`${USER_IMG}/${userLogin.dataUser.user.avatar}`} alt='' className="header__navbar-user-img"></img>
                         {userLogin.dataUser.user.userName} <b className="caret" />
                    </a>
                    <ul className="dropdown-menu dropdown-user">
                        <li><Link to='/me/profile' className="dropdown-user-link"><i className="fa fa-user fa-fw dropdown-icon" /> User Profile</Link>
                        </li>
                        <li><Link to='/me/post' className="dropdown-user-link border-bt"><i className="fas fa-clipboard fa-fw dropdown-icon" /> Posts Me</Link>
                        </li>
                        <li className="divider" />
                        <li><Link to='/' onClick={this.handleLogout} className="dropdown-user-link"><i className="fa fa-sign-out fa-fw dropdown-icon" /> Logout</Link>
                        </li>
                    </ul>
                    </li>
                </ul>
            )
        }
    }

    render() {
        return (
            <header>
                <Link to="/" className="brand">FFW</Link>
                <div className="menu">
                    <div className="btn">
                    <i className="fas fa-times close-btn" />
                    </div>
                    <Link to="/">Home</Link>
                    <Links smooth to="#services">Services</Links>
                    <Links smooth to="#contact">Contact</Links>
                    <Link to="/about">About</Link>
                    {this.showUserIsLogin(this.props.userLogin)}
                </div>
                <div className="btn">
                    <i className="fas fa-bars menu-btn" />
                </div>
            </header>
        );
    }
}
const mapStateToProps = (state)=>({
    userLogin:state.auth
})

export default connect(mapStateToProps,null) ((Header));
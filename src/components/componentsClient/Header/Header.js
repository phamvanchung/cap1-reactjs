import React, { Component } from 'react';
import {Link,withRouter } from "react-router-dom";
import { connect } from 'react-redux';
import './Header.scss';
class Header extends Component {

    handleLogout = () => {
        localStorage.clear();
        window.location.reload();
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
            <div className="menu">
                <li className="header__navbar-items header__navbar-user">
                    <img className="header__navbar-user-img" src={userLogin.dataUser.user.avatarUser} alt="image"  />
                    <span className=" header__navbar-user-name">Hi, {userLogin.dataUser.user.userName}</span>
                    <ul className="header__navbar-user-menu">
                        <li className="header__navbar-user-items">
                            <Link to='/' onClick={this.handleLogout} className="header__navbar-user-link">Logout</Link>
                        </li>
                    </ul>
                </li>
            </div>)
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
                    <Link to="/services">Services</Link>
                    <Link to="/contact">Contact</Link>
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

export default connect(mapStateToProps,null) (withRouter(Header));
import React, { Component } from 'react';
import { Route,Link } from "react-router-dom";
import { connect } from 'react-redux';
import {routesAd} from '../../routes';
import Menu from '../../components/componentsAd/Menu/Menu';

class Admin extends Component {

    showContentMenus = () => {
        var result= null;
        if(routesAd.length > 0){
            result = routesAd.map((routes,index) =>{
                return (
                    <Route
                        key={index}
                        path={routes.path}
                        exact={routes.exact}
                        component={routes.main}
                    />)
            })
        }
        return result;
    }
    handleLogout = () => {
        localStorage.clear();
        window.location.reload();
      }
    showUserIsLogin = (userLogin) => {
        if(userLogin.dataUser === null){
            return (
            <div className="menu">
                <Link to="/login">Login</Link>
                {/* <Link to="/register">Register</Link> */}
            </div>
            )
        }else{
            return (
                <ul className="nav navbar-right navbar-top-links">
                    <li className="dropdown">
                    <a className="dropdown-toggle" data-toggle="dropdown" href="###">
                        <i className="fa fa-user fa-fw dropdown-icon" /> {userLogin.dataUser.user.userName} <b className="caret" />
                    </a>
                    <ul className="dropdown-menu dropdown-user">
                        <li><a className="dropdown-user-link" href="###"><i className="fa fa-user fa-fw dropdown-icon" /> User Profile</a>
                        </li>
                        <li><a className="dropdown-user-link border-bt" href="###"><i className="fa fa-gear fa-fw dropdown-icon" /> Settings</a>
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
        const {userLogin} = this.props;
        return (
            <div className="App">
                <div className="wrapper">
                <Menu/>
                <main>
                <h1>Fix Fast Website Admin</h1>
                <div className="header-icon">
                    {this.showUserIsLogin(userLogin)}
                </div>
                {this.showContentMenus(routesAd)}
                </main>
                </div>
            </div>
        );
        }
}
const mapStateToProps = (state)=>({
    userLogin:state.auth
})

export default connect(mapStateToProps,null) (Admin);
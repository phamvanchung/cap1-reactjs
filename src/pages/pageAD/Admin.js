import React, { Component } from 'react';
import { Route } from "react-router-dom";
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
    render() {
        return (
            <div className="App">
                <div className="wrapper">
                <Menu/>
                <main>
                <h1>Fix Fast Website Admin</h1>
                <a href="###" className="header-icon"><i className="fas fa-sign-out-alt"></i></a>
                {this.showContentMenus(routesAd)}
                </main>
                </div>
            </div>
        );
    }
}

export default Admin;
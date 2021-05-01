import React, { Component } from 'react';
import { Switch, Route } from "react-router-dom";

import {routesAuth} from '../../routes';

class Auth extends Component {
    
    showContentMenus = () => {
        var result = null;
        if(routesAuth.length > 0){
            result = routesAuth.map((route,index)=>{
                return (
                    <Route
                        key = {index}
                        path = { route.path }
                        exact = { route.exact }
                        component = {route.main} 
                    />
                )
            })
        }
        return result;
    }

    render() {
        return (
            <div>
                <Switch>
                    {this.showContentMenus(routesAuth)}
                </Switch>
            </div>
        );
    }
}

export default Auth;
import React, { Component } from 'react';
import { routes } from '../../routes';
import { Route } from "react-router-dom";
import Header from "../../components/componentsClient/Header/Header";
import Footer from "../../components/componentsClient/Footer/Footer";

class Client extends Component {

    showContentMenus = () => {
        var result= null;
        if(routes.length > 0){
            result = routes.map((route,index)=>{
                return(
                    <Route
                        key={index}
                        path={route.path}
                        exact={route.exact}
                        component={route.main}
                    />
                )
            })
        }
        return result;
    }

    render() {
        return (
            <div className="App">
                <Header/>
                {this.showContentMenus(routes)}
                <Footer/>
            </div>
        );
    }
}

export default Client;
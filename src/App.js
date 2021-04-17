// import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react'
import { BrowserRouter as Router,Switch,Route } from "react-router-dom";
import Menu from './components/Menu/Menu';
// import PostsList from './components/PostsList/PostsList';
// import UserList from './components/UserList/UserList';
import routes from './routes'



class App extends Component {

    showContentMenus = () => {
        var result= null;
        if(routes.length > 0){
            result = routes.map((routes,index) =>{
                return (
                    <Route
                        key={index}
                        path={routes.path}
                        exact={routes.exact}
                        component={routes.main}
                    />)
            })
        }
        return  <Switch>
                    {result}
                </Switch>
    }

    render() {
        return (
            <Router>
                <div className="App">
                <div className="wrapper">
                <Menu/>
                <main>
                <h1>Fix Fast Website Admin</h1>
                <a href="###" className="header-icon"><i class="fas fa-sign-out-alt"></i></a>
                {this.showContentMenus(routes)}
                </main>
                </div>
            </div>
            </Router>
    );}
}

export default App;

// import './App.css';
import React, { Component } from 'react'
import { BrowserRouter as Router,Switch,Route } from "react-router-dom";
import Admin from './pages/pageAD/Admin';
import Client from './pages/pageClient/Client';
import NotFoundPage from './pages/pageClient/NotFoundPage/NotFound';
import Auth from './pages/pageAuth/Auth';

class App extends Component {
    render() {
        return (
            <Router>
                 <Switch>
                    <Route path="/login" component={Auth} />
                    <Route path="/register" component={Auth} />
                    <Route path="/admin" component={Admin} />
                    <Route path="/:slug" component={Client}/>
                    <Route exact path="/" component={Client}/>
                    <Route component={NotFoundPage}/>
                </Switch>
            </Router>
    );}
}

export default App;

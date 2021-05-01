import React, { Component } from 'react';
// import './NotFound.scss';

class NotFound extends Component {
    render() {
        return (
            <div className="container">
            <div className="row">
            <div className="xs-12 md-6 mx-auto">
                <div id="countUp">
                <div className="number">404</div>
                <div className="text">Page not found</div>
                <div className="text">This may not mean anything.</div>
                <div className="text">I'm probably working on something that has blown up.</div>
                </div>
            </div>
            </div>
        </div>
        );
    }
}

export default NotFound;
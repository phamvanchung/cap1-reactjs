import React, { Component } from 'react';
import './HomePage.css';

export default class HomePageAd extends Component {
    render() {
        return (
            <div className="homepage-body">
                 {/*Widget Start*/}
                <div className="card-body color1">
                <div className="float-left">
                    <h3>
                    <span className="currency" />
                    <span className="count">20</span>
                    </h3>
                    <p>Post</p>
                </div>
                <div className="float-right">
                    <i className="fas fa-clipboard"></i>
                </div>
                </div>
                {/*Widget End*/}
                {/*Widget Start*/}
                <div className="card-body color2">
                <div className="float-left">
                    <h3>
                    <span className="count">10</span>
                    </h3>
                    <p>User</p>
                </div>
                <div className="float-right">
                    <i className="fas fa-users icon" />
                </div>
                </div>
                {/*Widget End*/}
                {/*Widget Start*/}
                <div className="card-body color3">
                <div className="float-left">
                    <h3>
                    <span className="count">50</span>
                    </h3>
                    <p>Shop</p>
                </div>
                <div className="float-right">
                    <i className="fas fa-store icon" />
                </div>
                </div>
                {/*Widget End*/}
            </div>
        )
    }
}

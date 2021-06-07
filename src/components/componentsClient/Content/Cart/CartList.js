import React, { Component } from 'react';
import Search from '../Search/Search';
import CartItem from './CartItem';

class CartList extends Component {
    render() {
        return (
            <div className="grid">
            <div className="grid__row">
            <div className="gird__colum-1">
                <Search/>
            </div>
            <div className="gird__colum-10 card-wrapper">
                <CartItem match={this.props.match}/>
            </div>
            </div>
            </div>
        );
    }
}

export default CartList;
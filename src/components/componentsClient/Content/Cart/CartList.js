import React, { Component } from 'react';
import Search from '../Search/Search';
import CartItem from './CartItem';

class CartList extends Component {
    render() {
        return (
            <div className="grid">
            {/* <div className="grid__full-width"> */}
            <div className="grid__row">
                <Search/>
            <div className="gird__colum-10 card-wrapper">
                <CartItem/>
            </div>

            </div>
            {/* </div> */}
            </div>
        );
    }
}

export default CartList;
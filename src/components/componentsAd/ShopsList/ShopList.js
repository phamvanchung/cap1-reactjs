import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class ShopList extends Component {
    render() {
        return (
            <div className="mt-4">
            <div>
            <h3>Shops</h3>
            <Link to="/admin/add-shop" type="button" className="btn btn-secondary">Add Shop</Link>
            </div>

            <table className="table mt-4">
            <thead>
                <tr>
                <th scope="col">ID</th>
                <th scope="col">Name shop</th>
                <th scope="col">email</th>
                <th scope="col">password</th>
                {/* <th scope="col">Description</th> */}
                <th scope="col" colSpan={2}>Phone Shop</th>
                <th />
                </tr>
            </thead>
            <tbody>
                {/* <PostsItems/> */}
                {this.props.children}
            </tbody>
            </table>
      </div>
        );
    }
}

export default ShopList;
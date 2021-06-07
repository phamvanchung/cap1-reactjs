import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class ShopItem extends Component {
    onDelete = (shopId) => {
        if(confirm('Bạn có chắc chắn muốn xóa hay không ?')){//eslint-disable-line
            this.props.onDelete(shopId)
        }
    }
    render() {
        var {shop} = this.props;
        return (
                <tr>
                <th scope="row">{shop._id}</th>
                <td> {shop.nameShop} </td>
                <td> {shop.email} </td>
                <td>{shop.password} </td>
                <td>{shop.phoneShop}</td>
                <td/>
                <td>
                    <Link to={`/admin/${shop._id}/edit-shop`} type="button" className="btn btn-warning btn-custom mr-2 ">Update</Link>
                    <button type="button" className="btn btn-warning btn-custom mt-2" onClick={()=> this.onDelete(shop._id)}>Delete</button>
                </td>
            </tr>
        );
    }
}

export default ShopItem;
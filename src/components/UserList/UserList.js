import React, { Component } from 'react';
// import UserItems from '../UserItems/UserItems';
import {Link} from 'react-router-dom'

class UserList extends Component {
    render() {
        return (
            <div className="mt-4">
                <div>
                <h3>Khách hàng</h3>
                <Link to='/user/add' type="button" className="btn btn-secondary">Thêm khách hàng</Link>
                </div>

                <table className="table mt-4">
                <thead>
                    <tr>
                    <th scope="col">ID</th>
                    <th scope="col">Name</th>
                    <th scope="col">Address</th>
                    <th scope="col" colSpan={2}>Phone</th>
                    <th />
                    </tr>
                </thead>
                <tbody>
                    {/* <UserItems/> */}
                    {this.props.children}
                </tbody>
                </table>
          </div>
        );
    }
}

export default UserList;
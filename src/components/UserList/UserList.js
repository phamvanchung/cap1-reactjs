import React, { Component } from 'react';
// import UserItems from '../UserItems/UserItems';
import {Link} from 'react-router-dom'

class UserList extends Component {
    render() {
        return (
            <div className="mt-4">
                <div>
                <h3>Người dùng</h3>
                <Link to='/users/add-user' type="button" className="btn btn-secondary">Thêm người dùng</Link>
                </div>
                <table className="table mt-4">
                <thead>
                    <tr>
                    <th scope="col">ID</th>
                    <th scope="col">Email</th>
                    <th scope="col">Password</th>
                    <th scope="col" >UserName</th>
                    <th scope="col" colSpan={2}>PhoneUser</th>
                    <th />
                    </tr>
                </thead>
                <tbody>
                    {this.props.children}
                </tbody>
                </table>
          </div>
        );
    }
}

export default UserList;
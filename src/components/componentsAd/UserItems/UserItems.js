import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './UserItems.scss'

class UserItems extends Component {

    onDelete = (userId) => {
        if(confirm('Bạn có chắc chắn muốn xóa không ?')){//eslint-disable-line  
            this.props.onDeleteUser(userId)
        }
    }

    render() {
        var {user} =this.props;
        return (
            <tr>
                <th scope="row">{user._id} </th>
                <td>{user.email}</td>
                <td>{user.password}</td>
                <td>{user.userName}</td>
                <td >{user.phoneUser}</td>
                <td/>
                <td>
                    <Link to={`/admin/${user._id}/edit-user`} type="button" className="btn btn-warning mr-2 btn-custom ">Update</Link>
                    <button type="button" className="btn btn-warning btn-custom " onClick={()=>this.onDelete(user._id)}>Delete</button>
                </td>
            </tr>
        );
    }
}

export default UserItems;
import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class UserItems extends Component {

    onDelete = (userId) => {
        if(confirm('Bạn có chắc chắn muốn xóa không ?')){//eslint-disable-line  
            // console.log();
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
                    <Link to={`user/${user.id}/edit`} type="button" className="btn btn-warning mr-2 ">Sửa</Link>
                    <button type="button" className="btn btn-warning" onClick={()=>this.onDelete(user._id)}>Xóa</button>
                </td>
            </tr>
        );
    }
}

export default UserItems;
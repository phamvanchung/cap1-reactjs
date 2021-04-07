import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class UserItems extends Component {

    onDelete = (id) => {
        if(confirm('Bạn có chắc chắn muốn xóa không ?')){//eslint-disable-line  
            // console.log(id);
            this.props.onDelete(id)
        }
    }

    render() {
        var {user} =this.props;
        return (
            <tr>
                <th scope="row">{user._id} </th>
                <td>{user.name}</td>
                <td>{user.address}</td>
                <td>{user.phone}</td>
                <td/>
                <td>
                    <Link to={`user/${user.id}/edit`} type="button" className="btn btn-warning mr-2 ">Sửa</Link>
                    <button type="button" className="btn btn-warning" onClick={(id)=>this.onDelete(user.id)}>Xóa</button>
                </td>
            </tr>
        );
    }
}

export default UserItems;
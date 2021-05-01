import React, { Component } from 'react';
import {Link} from 'react-router-dom';
 
class PostsItems extends Component {


    onDelete = (postId) => {
        if(confirm('Bạn có chắc chắn muốn xóa hay không ?')){//eslint-disable-line
            // console.log(id);
            this.props.onDelete(postId)
        }
    }

    render() {
        var {post} = this.props;
        return (
            <tr>
                <th scope="row">{post._id}</th>
                <td> {post.name} </td>
                <td> {post.address} </td>
                <td>{post.description} </td>
                <td>{post.phone}</td>
                <td/>
                <td>
                    <Link to={`/admin/${post._id}/edit-post`} type="button" className="btn btn-warning mr-2 ">Sửa</Link>
                    <button type="button" className="btn btn-warning" onClick={()=> this.onDelete(post._id)}>Xóa</button>
                </td>
            </tr>
        );
    }
}

export default PostsItems;
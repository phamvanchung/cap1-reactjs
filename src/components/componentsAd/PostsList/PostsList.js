import React, { Component } from 'react';
// import PostsItems from '../PostsItems/PostsItems'
import {Link} from 'react-router-dom'


class PostsList extends Component {
    render() {
        return (
            <div className="mt-4">
                <div>
                <h3>Posts</h3>
                <Link to="/admin/add-post" type="button" className="btn btn-secondary">Add Post</Link>
                </div>

                <table className="table mt-4">
                <thead>
                    <tr>
                    <th scope="col">ID</th>
                    <th scope="col">The store</th>
                    <th scope="col">Address</th>
                    {/* <th scope="col">Description</th> */}
                    <th scope="col" colSpan={2}>Phone</th>
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

export default PostsList;
import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class AddUserPage extends Component {
    render() {
        return (
            <div className="mt-4">
            <h3>Quản lý người dùng</h3>
            <form method="POST"  onSubmit={this.onSaveAddPost} enctype="multipart/form-data" >
            <div className="form-group">
                <label>Tên người dùng</label>
                <input type="text" 
                className="form-control" 
                name="name" 
                />
            </div>
            <div className="form-group">
                <label>Email</label>
                <input type="email" 
                 className="form-control" 
                 name="email"  
                 />
            </div>
            <div className="form-group">
                <label>Password</label>
                <input type="password" 
                className="form-control" 
                name="password" 
                />
            </div>
            <div className="form-group">
                <label>Phone Number</label>
                <input type="text" 
                className="form-control" 
                name="phone" 
                />
            </div>
            <div className="form-group">
                <label>Image</label><br />
                <input type="file" className="form" 
                name="avatar" 
                ref={this.fileInput}
                />
            </div>
            <Link to="/users-list" className="btn btn-primary mr-2">
                Trở về
            </Link>
            <button type="submit" className="btn btn-primary" >Lưu lại</button>
            </form>
        </div>
        );
    }
}

export default AddUserPage;
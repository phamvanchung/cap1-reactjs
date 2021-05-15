import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class EditUserPage extends Component {
    render() {
        return (
            <div className="mt-4">
            <h3>Users management</h3>
            <form method="POST"  onSubmit={this.handleOnSubmit} encType="multipart/form-data" >
            <div className="form-group">
                <label>User Name</label>
                <input type="text" 
                className="form-control" 
                name="userName" 
                // value={userName ||''}
                onChange={this.handleOnchange}
                />
            </div>
            <div className="form-group">
                <label>Email</label>
                <input type="email" 
                 className="form-control" 
                //  name="email"  value={email || ''}
                onChange={this.handleOnchange}
                 />
            </div>
            <div className="form-group">
                <label>Password</label>
                <input type="password" 
                className="form-control" 
                // name="password" value={password ||''}
                onChange={this.handleOnchange}

                />
            </div>
            <div className="form-group">
                <label>Phone Number</label>
                <input type="text" 
                className="form-control" 
                // name="phoneUser" value={phoneUser|| ''}
                onChange={this.handleOnchange}
                />
            </div>
            <div className="form-group">
                <label>Avatar</label><br />
                <input type="file" className="form" 
                name="avatar" 
                onChange={this.handleOnchangeChooseFile}
                ref={this.fileInput}
                />
            </div>
            <Link to="/admin/users-list" className="btn btn-primary mr-2">
                Cancel
            </Link>
            <button type="submit" className="btn btn-primary" >Save</button>
            </form>
        </div>
        );
    }
}

export default EditUserPage;
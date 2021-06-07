import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {actAddUserReq} from '../../../actions/actUser';
class AddUserPage extends Component {
    constructor(props) {
        super(props);
        this.state={
            formUser:{
                id:'',
                userName:'',
                email:'',
                password:'',
                phone:'',
                avatar:'',
            }
        };
        this.fileInput = React.createRef();
    }
    
    handleOnchange =  (e) => {
        this.setState({
            formUser:{
                ...this.state.formUser,
                [e.target.name]:[e.target.value]
            }
        });
    }

    handleOnchangeChooseFile = (e) => {
        this.setState({
            formUser : {
                ...this.state.formUser,
                [e.target.name]:e.target.files[0]
            }
        });
    }

    handleOnSubmit = (e) => {
        e.preventDefault();
        const {history}= this.props;
        const {userName,email,password,phoneUser,avatar} = this.state.formUser;
        const user = new FormData();
        user.append('userName', userName);
        user.append('email', email);
        user.append('password', password);
        user.append('phoneUser', phoneUser);
        user.append('avatar', avatar);
        this.props.AddUser(user);
        history.goBack();
    }

    render() {
        const {userName, password, email,phoneUser}= this.state.formUser;
        return (
            <div className="mt-4">
            <h3>Users management</h3>
            <form method="POST"  onSubmit={this.handleOnSubmit} encType="multipart/form-data" >
            <div className="form-group">
                <label>User Name</label>
                <input type="text" 
                className="form-control" 
                name="userName" 
                value={userName ||''}
                required
                onChange={this.handleOnchange}
                />
            </div>
            <div className="form-group">
                <label>Email</label>
                <input type="email" 
                 className="form-control" 
                 required
                 name="email"  value={email || ''}
                onChange={this.handleOnchange}
                 />
            </div>
            <div className="form-group">
                <label>Password</label>
                <input type="password" 
                required
                className="form-control" 
                name="password" value={password ||''}
                onChange={this.handleOnchange}

                />
            </div>
            <div className="form-group">
                <label>Phone Number</label>
                <input type="text" 
                className="form-control" 
                name="phoneUser" value={phoneUser|| ''}
                onChange={this.handleOnchange}
                />
            </div>
            <div className="form-group">
                <label>Role</label>
                <select
                    className="form-control"
                    name="permissions"
                    onChange={this.handleOnchange}
                    >
                    <option>Permissions</option>
                    <option value="customer">Customer</option>
                    <option value="shop">Shop</option>
                    {/* <option value="admin">Admin</option> */}
                </select>
            </div>
            <div className="form-group">
                <label>Avatar</label><br />
                <input type="file" className="form" 
                name="avatar" 
                onChange={this.handleOnchangeChooseFile}
                ref={this.fileInput}
                required
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

const mapDispatchToProps = (dispatch, props)=>{
    return{
        AddUser:(user)=>{
            dispatch(actAddUserReq(user))
        }
    }
}

export default connect(null,mapDispatchToProps) (AddUserPage);
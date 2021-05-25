import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {actGetUserByIdReq,actUpdateUserReq} from '../../../actions/actUser';
class EditUserPage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            userName:'',
            email:'',
            password:'',
            phoneUser:'',
            avatar:'',
        }
    }

    componentDidMount(){
        let {match}= this.props;
        if(match){
            let {userId}= match.params;
            this.props.onEditingUser(userId);
        }
    }

    componentWillReceiveProps(nextProps){
        if(nextProps && nextProps.itemEditing){
            let {itemEditing} = nextProps;
            this.setState({
                userName:itemEditing.userName,
                email:itemEditing.email,
                password:itemEditing.password,
                phoneUser:itemEditing.phoneUser,
                avatar:itemEditing.avatar,
            })
            } 
        }

    handleOnchange=  (e) => {
        this.setState({
            [e.target.name] : e.target.value
        })
    }
    handleOnchangeChooseFile = (e) => {
        this.setState({
            [e.target.name] : e.target.files[0]
        })
    }

    handleOnSubmit =  (e) => {
        e.preventDefault();
        let { match } = this.props;
        let {history}= this.props;
        let {userId} = match.params;
        let {userName,email,password,phoneUser} = this.state;
        let user ={
            _id:userId,
            userName:userName,
            email:email,
            password:password,
            phoneUser:phoneUser
        }
        const myPromisePost = new Promise((myResolve, myReject) => {
            this.props.onUpdateUser(user);
            myResolve(
              'a',
            );
            myReject(
              'a',
            );
          });
          myPromisePost.then(() => {
            history.goBack();
          });
    }

    render() {
        const {userName, password, email,phoneUser}=this.state;
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
                onChange={this.handleOnchange}
                />
            </div>
            <div className="form-group">
                <label>Email</label>
                <input type="email" 
                 className="form-control" 
                 name="email"  value={email || ''}
                onChange={this.handleOnchange}
                 />
            </div>
            <div className="form-group">
                <label>Password</label>
                <input type="password" 
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
const mapStateToProps = state =>{
    return{
        itemEditing:state.itemEditing,
    }
}

const mapDispatchToProps =(dispatch, props)=>{
    return{
        onUpdateUser: (post)=>{
            dispatch(actUpdateUserReq(post))
        },
        onEditingUser:(postId)=>{
            dispatch(actGetUserByIdReq(postId))
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps) (EditUserPage);
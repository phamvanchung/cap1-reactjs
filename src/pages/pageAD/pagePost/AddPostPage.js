import React, { Component } from 'react';
import {Link } from "react-router-dom";
import {connect} from 'react-redux';
import {actAddPostsReq} from '../../../actions/actPosts';
import '../../../App.css';

class AddPostPage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            frmPost : {
                id:'',
                name:'',
                address:'',
                description:'',
                phone:'',
                avatar:'',
                }
        }
        this.fileInput = React.createRef();
    }

    handleInputOnChange = (e) => {
       this.setState({
        frmPost : {
            ...this.state.frmPost,  
            [e.target.name] : e.target.value,
            }
       })
    }
        
    handleOnchangeChooseFile = (e)=>{
        this.setState({
            frmPost : {
                ...this.state.frmPost,  
                [e.target.name] : e.target.files[0],
            }
        })
    }

    onSaveAddPost = (e) => {
        e.preventDefault();
        let {name,address,description,phone,avatar}= this.state.frmPost;
        const {history}= this.props;
        let post = new FormData();
        post.append('name',name);
        post.append('address',address);
        post.append('description',description);
        post.append('phone',phone);
        post.append('avatar',avatar);
        this.props.AddPosts(post);
        history.goBack();
    }
   

    render() {
        let {name,address,description,phone}=this.state.frmPost;
        return (
            <div className="mt-4">
                <h3>Posts management</h3>
                <form method="POST"  onSubmit={this.onSaveAddPost} encType="multipart/form-data" >
                <div className="form-group">
                    <label>The store</label>
                    <input type="text" 
                    className="form-control" 
                    name="name" value={name || ''}
                    onChange={this.handleInputOnChange}/>
                </div>
                <div className="form-group">
                    <label>Address</label>
                    <input  type="text" 
                     className="form-control" 
                     name="address" value={address || ''} 
                     onChange={this.handleInputOnChange}/>
                </div>
                <div className="form-group">
                    <label>Description</label>
                    <textarea className="form-control" 
                    name="description" 
                    value={description || ''} 
                    onChange={this.handleInputOnChange}
                    ></textarea>
                </div>
                <div className="form-group">
                    <label>Phone</label>
                    <input type="text" 
                    className="form-control" 
                    name="phone" 
                    value={phone||''} 
                    onChange={this.handleInputOnChange}/>
                </div>
                <div className="form-group">
                    <label>Image</label><br />
                    <input type="file" className="form" 
                    name="avatar" 
                    onChange={this.handleOnchangeChooseFile}/>
                </div>
                <Link to="/admin/posts-list" className="btn btn-primary mr-2">
                    Cancel
                </Link>
                <button type="submit" className="btn btn-primary" >Save</button>
                </form>
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch)=>{
    return{
        AddPosts:(post)=>{
            dispatch(actAddPostsReq(post))
        }
    }
}

export default connect(null,mapDispatchToProps) (AddPostPage);
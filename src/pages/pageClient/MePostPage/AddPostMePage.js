import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './AddPostMe.css';
import {connect} from 'react-redux';
import {actAddPostsReq} from '../../../actions/actPosts';

class AddPostMePage extends Component {
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
            <>
                <div className="container-post-me">
                <form className="well form-horizontal"
                    id="contact_form" 
                    onSubmit={this.onSaveAddPost} 
                    encType="multipart/form-data"
                    >
                <fieldset>
                    {/* Form Name */}
                    <legend className='post__me-label'>Create post</legend>
                    {/* Text input*/}
                    <div className="form-group">
                    <label className="col-md-12 control-label">The store</label>  
                    <div className="col-md-12 inputGroupContainer">
                        <div className="input-group">
                            <input className="form-control" 
                                type="text" name="name" 
                                value={name || ''}
                                onChange={this.handleInputOnChange}
                                />
                        </div>
                    </div>
                    </div>
                 
                    {/* Text input*/}
                    <div className="form-group">
                    <label className="col-md-12 control-label">Address</label>  
                    <div className="col-md-12 inputGroupContainer">
                        <div className="input-group">
                            <input className="form-control" 
                                type="text"
                                name="address" value={address || ''} 
                                onChange={this.handleInputOnChange}
                                />
                        </div>
                    </div>
                    </div>
                    {/* Text input*/}
                    <div className="form-group">
                    <label className="col-md-12 control-label">Phone</label>  
                    <div className="col-md-12 inputGroupContainer">
                        <div className="input-group">
                            <input className="form-control"
                                type="text"  name="phone" 
                                value={phone||''} 
                                onChange={this.handleInputOnChange} />
                        </div>
                    </div>
                    </div>
                    {/* Text area */}
                    <div className="form-group">
                    <label className="col-md-12 control-label">Description</label>
                    <div className="col-md-12 inputGroupContainer">
                        <div className="input-group">
                            <textarea className="form-control" 
                                    name="description"  
                                    value={description || ''} 
                                    onChange={this.handleInputOnChange}
                                    />
                        </div>
                    </div>
                    </div>
                    {/* Text input*/}
                    <div className="form-group-1">
                    <label className="col-md-12 control-label">Image</label>  
                    <div className="col-md-12 inputGroupContainer">
                        <input className="form-control-1" 
                                type="file" name="avatar" 
                                onChange={this.handleOnchangeChooseFile}
                            />
                    </div>
                    </div>

                    {/* Button */}
                    <div className="form-group">
                    <label className="col-md-12 control-label" />
                    <div className="col-md-4">
                        <Link to="/me/post" className="btn btn-warning btn-post-me">Cancel </Link>
                        <button type="submit" className="btn btn-warning btn-post-me">Save</button>
                    </div>
                    </div>
                </fieldset>
                </form>
            </div>
            </>
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
export default connect(null,mapDispatchToProps) (AddPostMePage);
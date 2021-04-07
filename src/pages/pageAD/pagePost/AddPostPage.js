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
    //    console.log('this.State:',this.state);
    }
        
    handleOnchangeChooseFile =async (e)=>{
        // console.log(e.target.files[0]);
        this.setState({
            avatar:this.fileInput.current.files[0].name
        })
        console.log(this.fileInput.current.files[0].name);
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
        // console.log(post,this.fileInput.current.files[0].name);
    }
   

    render() {
        let {name,address,description,phone}=this.state.frmPost;
        return (
            <div className="mt-4">
                <h3>Quản lý bài viết</h3>
                <form method="POST"  onSubmit={this.onSaveAddPost} enctype="multipart/form-data" >
                <div className="form-group">
                    <label>Tên cửa hàng</label>
                    <input type="text" 
                    className="form-control" 
                    name="name" value={name}
                    onChange={this.handleInputOnChange}/>
                </div>
                <div className="form-group">
                    <label>Địa chỉ</label>
                    <input  type="text" 
                     className="form-control" 
                     name="address" value={address} 
                     onChange={this.handleInputOnChange}/>
                </div>
                <div className="form-group">
                    <label>Mô tả</label>
                    <textarea className="form-control" 
                    name="description" 
                    value={description} 
                    onChange={this.handleInputOnChange}
                    ></textarea>
                </div>
                <div className="form-group">
                    <label>Sđt</label>
                    <input type="text" 
                    className="form-control" 
                    name="phone" 
                    value={phone} 
                    onChange={this.handleInputOnChange}/>
                </div>
                <div className="form-group">
                    <label>Image</label><br />
                    <input type="file" className="form" 
                    name="avatar" 
                    ref={this.fileInput}
                    onChange={this.handleOnchangeChooseFile}/>
                    {/* <div className="img_">
                        <img id="img_avatar" alt='' src='' className='' />
                    </div> */}
                </div>
                <Link to="/posts-list" className="btn btn-primary mr-2">
                    Trở về
                </Link>
                <button type="submit" className="btn btn-primary" >Lưu lại</button>
                </form>
            </div>
        );
    }
}

// const mapStateToProps =state =>{
//     return {

//     }
// }

const mapDispatchToProps = (dispatch, props)=>{
    return{
        AddPosts:(post)=>{
            dispatch(actAddPostsReq(post))
        }
    }
}

export default connect(null,mapDispatchToProps) (AddPostPage);
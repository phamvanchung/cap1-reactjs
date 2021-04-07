import React, { Component } from 'react'
import {Link } from "react-router-dom";
import {connect} from 'react-redux';
import {actUpdatePostsReq,actGetPostsReq} from '../../../actions/actPosts';

class EditPostPage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            id:'',
            name:'',
            address:'',
            description:'',
            phone:'',
            avatar:'',
        }
        this.fileInput = React.createRef();
    }

    componentDidMount () {
        let { match } = this.props;
        if(match){
            let postId = match.params._id;
            this.props.onEditingUser(postId);
        }
    }

    componentWillReceiveProps(nextProps){
    if(nextProps && nextProps.itemEditing){
        let {itemEditing} = nextProps;
        this.setState({
            id: itemEditing._id,
            name:itemEditing.name,
            address:itemEditing.address,
            description:itemEditing.description,
            phone:itemEditing.phone,
            avatar:itemEditing.avatar,
        })
    }        
    }

    handleInputOnChange= (e)=>{
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    handleOnchangeChooseFile = (e) => {

    }

    onSubmitFormUpdatePost = (e) => {
        e.preventDefault();
        let { match } = this.props;
        // let {name,address,description,phone,avatar}= this.state.frmPost;
        let {history}= this.props;
        var postId = match.params.postId;
        var post = {
            _id:postId,
            ...this.state
        }
        // let post = new FormData();
        // post.append('name',name);
        // post.append('address',address);
        // post.append('description',description);
        // post.append('phone',phone);
        // post.append('avatar',avatar);
        this.props.onUpdatePost(post);
        history.goBack();

    }

    render() {
        const {name,address,description,phone,avatar}=this.state;
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

const mapStateToProps = state =>{
    return{
        itemEditing:state.itemEditing,
    }
}


const mapDispatchToProps =(dispatch, props)=>{
    return{
        onUpdatePost: (post)=>{
            dispatch(actUpdatePostsReq(post))
        },
        onEditingUser:(postId)=>{
            dispatch(actGetPostsReq(postId))
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps) (EditPostPage);
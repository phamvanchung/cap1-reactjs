import React, { Component } from 'react'
import {Link } from "react-router-dom";
import {connect} from 'react-redux';
import {actUpdatePostsReq,actGetPostByIdReq} from '../../../actions/actPosts';

class EditPostPage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name:'',
            address:'',
            description:'',
            phone:'',
            avatar:'',
        }
    }

    componentDidMount () {
        let { match } = this.props;
        if(match){
            let {postId} = match.params;
            this.props.onEditingPost(postId);
        }
    }

    componentWillReceiveProps(nextProps){
    if(nextProps && nextProps.itemEditing){
        let {itemEditing} = nextProps;
        this.setState({
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
        this.setState({
            [e.target.name] : e.target.files[0]
        })
    }

    onSubmitFormUpdatePost = (e) => {
        e.preventDefault();
        let { match } = this.props;
        let {history}= this.props;
        let {postId} = match.params;
        let {name,address,description,phone}= this.state;
        let post = {
            _id:postId,
            name:name,
            address:address,
            description:description,
            phone:phone,
        }
        const myPromisePost = new Promise((myResolve, myReject) => {
            this.props.onUpdatePost(post);
            myResolve(
              'aaaaaaaaaaa',
            );
            myReject(
              'bbbbbbbbb',
            );
          });
          myPromisePost.then(() => {
            history.push('/admin/posts-list');
          });
    }

    render() {
        let {name,address,description,phone}=this.state;
        return (
            <div className="mt-4">
                <h3>Posts management</h3>
                <form onSubmit={this.onSubmitFormUpdatePost} encType="multipart/form-data" >
                <div className="form-group">
                    <label>The store</label>
                    <input type="text" 
                    className="form-control" 
                    name="name" value={name||''}
                    onChange={this.handleInputOnChange}/>
                </div>
                <div className="form-group">
                    <label>Address</label>
                    <input  type="text" 
                     className="form-control" 
                     name="address" value={address||''} 
                     onChange={this.handleInputOnChange}/>
                </div>
                <div className="form-group">
                    <label>Description</label>
                    <textarea className="form-control" 
                    name="description" 
                    value={description ||''}
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
        onEditingPost:(postId)=>{
            dispatch(actGetPostByIdReq(postId))
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps) (EditPostPage);
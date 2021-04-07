import React, { Component } from 'react';
// import callApi from '../../utils/apiCaller';
import {Link } from "react-router-dom";
import {actAddPostsReq,actGetPostsReq,actUpdatePostsReq} from '../../actions/actPosts'
import {connect} from 'react-redux';

class PostActionPage extends Component {

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
    }


    componentDidMount(){
        var {match}=this.props;
        if(match){
            var id = match.params._id;
            this.props.allEditPosts(id)      
        }
    }

    componentWillReceiveProps(nextProps){
    if(nextProps && nextProps.itemEditing){
        var {itemEditing} = nextProps;
        this.setState({
            id: itemEditing._id,
            name:itemEditing.name,
            address:itemEditing.address,
            description:itemEditing.description,
            phone:itemEditing.phone,
        })
    }        
    }

    onChange = (e) => {
        const target = e.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        this.setState({
            [name]: value
        })
    }

    onSave = (e) => {
        const {id,name,address,description,phone,avatar}= this.state;
        const {history}= this.props;
        let post = {
            id: id,
            name: name,
            address: address,
            description: description,
            phone: phone,
            avatar: avatar
        };
        e.preventDefault();
        if(id){
            this.props.allUpdatePosts(post)
        }else{
            this.props.allAddPosts(post);
            console.log(post);
        }
        history.goBack();
    }
    

    render() {
        const {name,address,description,phone,avatar}=this.state;
        return (
            <div className="mt-4">
                <h3>Quản lý bài viết</h3>
                <form method="POST"  onSubmit={this.onSave} enctype="multipart/form-data" >
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Tên cửa hàng</label>
                    <input type="text" className="form-control" required name="name" value={name} onChange={this.onChange}  />
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Địa chỉ</label>
                    <input  type="text"  className="form-control" required name="address" value={address} onChange={this.onChange} />
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Mô tả</label>
                    <textarea className="form-control" name="description" value={description} onChange={this.onChange}></textarea>
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Sđt</label>
                    <input type="text" className="form-control" required name="phone" value={phone} onChange={this.onChange} />
                </div>
                <div className="form-group">
                    <label>Image</label><br />
                    <input type="file" className="form" name="avatar" value={avatar} onChange={this.onChange} />
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


const mapStateToProps =state=>{
    return {
        itemEditing:state.itemEditing
    }
}

const mapDispatchToProps = (dispatch, props) =>{
    return {
        allAddPosts:(post) =>{
            dispatch(actAddPostsReq(post))
        },
        allEditPosts:(id) =>{
            dispatch(actGetPostsReq(id))
        },
        allUpdatePosts:(post) =>{
            dispatch(actUpdatePostsReq(post))
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps) (PostActionPage);
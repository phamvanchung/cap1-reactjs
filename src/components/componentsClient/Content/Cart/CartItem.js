import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {actFetchPostsReq} from '../../../../actions/actPosts';
import { connect } from "react-redux";
import {POST_IMG} from "../../../../constants/service";
import './CartItem.css';

class CartItem extends Component {

    componentDidMount(){
        this.props.fetchAllPosts();
    }

    showAllPost =  (posts) => {
        var result = null;
        if(posts.length > 0){
            result = posts.map((post,index)=>{
                return (
                    <div  key={index}>
                        <div className="card-list">
                        <div className="card-item ">
                         <Link to={`/detail-shop/${post._id}`}>
                            <img src={`${POST_IMG}/${post.avatar}`} alt="avatar" className="card-item--img" />
                        </Link>
                        </div>
                        <div className="card-list-wrap">
                            <div className="card-item">
                            <div className="card-item-wrap">
                                <Link to={`/detail-shop/${post._id}`} className="card-item--label">{post.name} </Link>
                            </div>
                            <Link to={`/detail-shop/${post._id}`} className="card-item--address">{post.address} </Link>
                            <p className='hotline'>Hotline: <span>{post.phone}</span> </p>
                            <p className="card-item--description">{post.description}</p>
                            </div>
                            <div className="card-item">
                            <div className="card-item-evaluate">
                                <div className="card-item-evaluate-wrap">
                                <div className="card-item-evaluate--label">Very good</div>
                                <div className="card-item-evaluate--text">100 reviews</div>
                                </div>
                                <div className="card-item-evaluate-pointer">8.0 </div>
                            </div>
                            <Link to={`/detail-shop/${post._id}`} className="btn btn-info btn-card">Details</Link>
                            </div>
                        </div>
                        </div>
                    </div>
                )
            })
        }
        return result;
    }
   
  
    render() {
        const {posts} = this.props;
         //search
        // posts = posts.filter((post) => {
        //     return post.address.toLowerCase().indexOf(keyword.toLowerCase())!== -1;
        //  })
        
        return (
            <div className='row'>
                {this.showAllPost(posts)}
            </div>
        );
    }
}
const mapStateToProps = (state)=>{
    return {
        posts:state.posts,
        // keyword: state.search
    }
}
const mapDispatchToProps = (dispatch, props) =>{
    return{
        fetchAllPosts: ()=>{
            dispatch(actFetchPostsReq())
        },
    }
}

export default connect(mapStateToProps,mapDispatchToProps) (CartItem);
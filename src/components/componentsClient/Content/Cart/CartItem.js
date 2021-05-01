import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {actFetchPostsReq} from '../../../../actions/actPosts';
import { connect } from "react-redux";


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
                            <img src={post.image} alt="" className="card-item--img" />
                        </div>
                        <div className="card-list-wrap">
                            <div className="card-item">
                            <div className="card-item-wrap">
                                <Link to="" className="card-item--label">{post.name} </Link>
                                {/* <span className="card-item-star">
                                <i className="fas fa-star" />
                                <i className="far fa-thumbs-up card-item-like" />
                                </span>   */}
                            </div>
                            <a href="##" className="card-item--address">{post.address} </a>
                            <p className='hotline'>Hotline: <span>{post.phone}</span> </p>
                            <p className="card-item--description">{post.description}</p>
                            </div>
                            <div className="card-item">
                            <div className="card-item-evaluate">
                                <div className="card-item-evaluate-wrap">
                                <div className="card-item-evaluate--label">Rất tốt</div>
                                <div className="card-item-evaluate--text">{post.evaluate} đánh giá</div>
                                </div>
                                <div className="card-item-evaluate-pointer">{post.point} </div>
                            </div>
                            <button className="btn btn-info btn-card">Xem chi tiết</button>
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
        return (
            <div className='row'>
            {this.showAllPost(posts)}

            </div>
        );
    }
}
const mapStateToProps = (state)=>{
    return {
        posts:state.posts
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
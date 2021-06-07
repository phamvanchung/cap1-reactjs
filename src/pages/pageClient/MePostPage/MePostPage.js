import React, { Component } from 'react';
import './MePostPage.css';
import {actFetchPostsReq} from '../../../actions/actPosts';
import {connect} from 'react-redux';
import {POST_IMG} from '../../../constants/service';
import {Link} from 'react-router-dom';


class mePostPage extends Component {
    componentDidMount() {
        window.scrollTo(0, 0);
        this.props.showPost();
    }

    showPostsItems(posts) {
        var result = null;
        if(posts.length > 0){
            result = posts.map((post, index)=>{
                return(
                    <div key={index}>
                        <table className="tbl-table" cellPadding={0} cellSpacing={0} border={0}>
                        <tbody>
                            <tr>
                            <td>
                                <img src={`${POST_IMG}/${post.avatar}`} alt="img" className="post__me-avatar"/>
                            </td>
                            <td>{post.name} </td>
                            <td>{post.address} </td>
                            <td>{post.phone}</td>
                            <td className="">
                                <button type="button" className="btn btn-info btn-custom">Update</button>
                                <button type="button" className="btn btn-info btn-custom">Delete</button>
                            </td>
                            </tr>
                        </tbody>
                        </table>
                    </div>
                )
            })
        }
        return result;
    }

    render() {
        return (
            <div className="table-wrapper">
                <section className="section-me">
                    <div className="tbl-label" >Table Posts</div>
                    <Link to="/me/add-post" type="button" className="btn btn-secondary post__me-btn">Create</Link>
                    <div className="tbl-header">
                        <table className="tbl-table" cellPadding={0} cellSpacing={0} border={0}>
                        <thead>
                            <tr>
                            <th>Avatar</th>
                            <th>The Repair Shop</th>
                            <th>Address</th>
                            <th>Phone</th>
                            <th></th>
                            </tr>
                        </thead>
                        </table>
                    </div>
                    <div className="tbl-content">
                        {this.showPostsItems(this.props.posts)}
                    </div>
                    </section>
                   
            </div>
        );
    }
}
const mapStateToProps = (state)=>{
    return {
        posts: state.posts
    }
}
const mapDispatchToProps = (dispatch, props)=>{
    return{
        showPost: (post)=>{
            dispatch(actFetchPostsReq(post))
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(mePostPage);
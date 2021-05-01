import React, { Component } from 'react'
import {connect} from 'react-redux';
import PostsList from '../../../components/componentsAd/PostsList/PostsList';
import PostsItems from '../../../components/componentsAd/PostsItems/PostsItems';
import {actFetchPostsReq,actDeletePostsReq} from '../../../actions/actPosts';


class AllPostPage extends Component {

    showPostsItems(posts) {
        var result = null;
        if(posts.length > 0){
            result = posts.map((post, index)=>{
                return(
                    <PostsItems
                        key={index}
                        post={post}
                        index={index}
                        onDelete={this.onDelete}
                    />
                )
            })
        }
        return result;
    }

    onDelete=(postId)=> {
        this.props.onDeletePosts(postId);
    }

    componentDidMount(){
        this.props.fetchAllPosts();
    }

    render() {
        var {posts} = this.props;
        return (
            <div>
                 <div className="flex-grid">
                    <PostsList>
                        {this.showPostsItems(posts)}
                    </PostsList>
                </div> 
            </div>
        )
    }
}

const mapStateToProps = (state) =>{
    return {
        posts: state.posts
    }
}

const mapDispatchToProps = (dispatch, props) =>{
    return{
        fetchAllPosts: (post)=>{
            dispatch(actFetchPostsReq(post))
        },
        onDeletePosts: (postId)=>{
            dispatch(actDeletePostsReq(postId))
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps) (AllPostPage);
import React, { Component } from 'react';
import PostsList from '../../components/PostsList/PostsList';
import PostsItems from '../../components/PostsItems/PostsItems';
import {connect} from 'react-redux';
// import callApi from '../../utils/apiCaller'
import {actFetchPostsReq,actDeletePostsReq} from '../../actions/actPosts';

class PostListPage extends Component {
    // constructor(props) {
    //     super(props)
    //     this.state = {
    //         posts:[]
    //     }
    // }
    
    showPosts(posts) {
        var result= null;
        if(posts.length > 0){
            result = posts.map((post,index)=>{
                return (
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

    //Delete Posts
    onDelete = (postId) => {
        this.props.onDeletePosts(postId);
    }

    //Get Posts
    componentDidMount(){
        this.props.fetchAllPosts();
    }

    render() {
        var {posts} =this.props;
        return (
            <div>
                 <div className="flex-grid">
                    <PostsList>
                        {this.showPosts(posts)}
                    </PostsList>
                </div> 
            </div>
        );
    }
}

const mapStateToProps = (state)=>{ 
    return {
        posts: state.posts
    }
}

const mapDispatchToProps = (dispatch,props)=>{
    return {
        fetchAllPosts:  () => {
            dispatch(actFetchPostsReq())
        },

        onDeletePosts: (postId)=>{
            dispatch(actDeletePostsReq(postId))
        }

    }
}

export default connect(mapStateToProps,mapDispatchToProps) (PostListPage);
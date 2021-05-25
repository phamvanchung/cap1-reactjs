import * as Types from "../constants/postActionType";
import callApi from '../utils/apiCaller';

export const actFetchPosts = (posts)=>{
    return {
        type : Types.FETCH_POSTS,
        posts
    }
}
export const actFetchPostsReq  =  () => {
    return  (dispatch) => {
        return callApi('api/posts','GET',null)
        .then((res) =>{
            dispatch(actFetchPosts(res.data))
        })
    }
}

//act get post id
export const actGetPostById = (post) => ({
    type: Types.GET_POSTS_BY_ID,
    post,
});
export const actGetPostByIdReq = (postId) => {
   return (dispatch) => { 
       return callApi(`api/posts/get-postId/${postId}`, 'GET', null)
    .then((res) => {
        dispatch(actGetPostById(res.data));
        })
    }
}

export const actAddPosts = (post) =>{
    return{
        type:Types.ADD_POSTS,
        post
    }
}
export const actAddPostsReq = (post) =>{
    return (dispatch) =>{
        return callApi('api/posts/add-post','POST',post)
        .then(res =>{
            dispatch(actAddPosts(res.data))
        })
    }
}

//delete action
export const actDeletePosts = (postId) =>{
    return {
        type:Types.DELETE_POSTS,
        postId
    }
}
export const actDeletePostsReq = (postId)=>{
    return (dispatch) =>{
        return callApi(`api/posts/delete-post/${postId}`,'DELETE',null)
        .then(res =>{
            dispatch(actDeletePosts(postId))
        })
    }
}


export const actUpdatePosts = (post) =>{
    return {
        type:Types.UPDATE_POSTS,
        post
    }
}
export const actUpdatePostsReq = (post) =>{
    return (dispatch) =>{
        return callApi(`api/posts/update-post/${post._id}`,'PUT',post)
        .then(res =>{
            dispatch(actUpdatePosts(res.data))
        })
    }
}


// export const actGetPosts =  (post) => {
//     return {
//         type:Types.EDIT_POSTS,
//         post
//     }
// }
// export const actGetPostsReq = (postId)=>{
//     return (dispatch) =>{
//         return callApi(`api/posts/${postId}`,'GET',null)
//         .then(res =>{
//             dispatch(actGetPosts(res.data));
//         })
//     }
// }
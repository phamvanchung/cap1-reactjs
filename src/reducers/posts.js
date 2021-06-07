import * as Types from "../constants/postActionType";
import Toastify from '../utils/toastify';

var initialState = [];

var findIndex = (posts, id) => {
    var result = -1;
    posts.forEach((post, index) => {
        if(post._id === id){
            result = index;
        }
    });
    return result;
}

const posts = (state = initialState, action) => {
    let index = -1;
    let {post,postId} = action;
    switch (action.type) {
        case Types.FETCH_POSTS:
            state = action.posts;
            return [...state];
        case Types.DELETE_POSTS:
            index = findIndex(state,postId);
            state.splice(index,1)
            return [...state];
        case Types.ADD_POSTS:
            state.push(action.post);
            Toastify({ msg: 'Create post successfully', type: 'dark' });
            return [...state];
        case Types.UPDATE_POSTS:
            index = findIndex(state,post.postId)
            state[index] = post;
            Toastify({ msg: 'Update post successfully', type: 'dark' });
            return [...state]

        case Types.SEARCH_POSTS:
            return [...state,action.payload]

        // case Types.GET_POSTS_BY_ID:
        //     return action.post;
        default: return[...state]
    }
}

export default posts;
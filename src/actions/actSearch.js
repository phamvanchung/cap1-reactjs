import * as TypesSearch from "../constants/postActionType";
import callApi from '../utils/apiCaller';

export const actSearchPost = (payload) => ({
    type: TypesSearch.SEARCH_POSTS,
    payload,
  });
  
export const actSearchOnPostReq = (q) => (dispatch) => callApi(`api/posts/get-all-post?q=${q}`, 'GET')
.then((res) => {
    // console.log(res.data)
    dispatch(actSearchPost(res.data));
});

// export const actSearch = (keyword) => {
//     return {
//         type: TypesSearch.SEARCH_POSTS,
//         keyword
//     }
// }
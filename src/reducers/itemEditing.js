import * as Types from "../constants/postActionType";
import * as TypesUser from "../constants/userActionType";
import * as TypesShop from "../constants/shopActionType";

var initialState = {};

const itemEditing =(state= initialState, action) =>{
    switch(action.type){
        case Types.GET_POSTS_BY_ID:
            return action.post;
        case TypesUser.GET_USERS_BY_ID:
            return action.user;
        case TypesShop.GET_SHOPS_BY_ID:
            return action.shop;
        default: return state;
    }
}

export default itemEditing;
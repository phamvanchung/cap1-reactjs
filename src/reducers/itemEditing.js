import * as Types from "../constants/postActionType";

var initialState = [];

const itemEditing =(state= initialState, action) =>{
    switch(action.type){
        case Types.EDIT_POSTS:
            return action.post
        default: return state;
    }
}

export default itemEditing;
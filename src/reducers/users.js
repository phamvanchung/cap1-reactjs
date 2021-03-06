import * as TypesUser from "../constants/userActionType";
import Toastify from '../utils/toastify';

var initialState = [];

var findIndex = (users, id) => {
    var result = -1;
    users.forEach((user, index) => {
        if(user._id === id){
            result = index;
        }
    });
    return result;
}

const users = (state= initialState, action) => {
    let index = -1;
    let {userId,user} = action;
    switch (action.type) {
        case TypesUser.FETCH_USERS:
            state =action.users;
            return [...state]
        case TypesUser.DELETE_USERS:
            index= findIndex(state, userId);
            state.splice(index,1);
            return [...state]
        case TypesUser.ADD_USERS:
            state.push(action.user);
            Toastify({ msg: 'Create user successfully', type: 'info' });
            return [...state];
        case TypesUser.UPDATE_USERS:
            index = findIndex(state,user.userId);
            state[index] = action.user;
            Toastify({ msg: 'Update user successfully', type: 'info' });
            return [...state];
            
        default: return[...state]
    }
}

export default users;
import * as TypesUser from "../constants/userActionType";

var initialState = [];

// var findIndex = (users, id) => {
//     var result = -1;
//     users.forEach((user, index) => {
//         if(user._id === id){
//             result = index;
//         }
//     });
//     return result;
// }

const users = (state= initialState, action) => {
    switch (action.type) {
        case TypesUser.FETCH_USERS:
            state =action.users;
            return [...state]
        default: return[...state]
    }
}

export default users;
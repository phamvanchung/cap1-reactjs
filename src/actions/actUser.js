import *as Types from "../constants/userActionType";
import callApi from '../utils/apiCaller';

export const actFetchUser = (users)=>{
    return {
        type: Types.FETCH_USERS,
        users
    }
}
export const actFetchUserReq = ()=>{
    return (dispatch)=>{
        return callApi('api/users','GET',null)
        .then(res =>{
            dispatch(actFetchUser(res.data));
        })
    }
}


export const actDeleteUser = (userId) =>{
    return {
        type:Types.DELETE_USERS,
        userId
    }
}
export const actDeleteUserReq = (userId) =>{
    return (dispatch) => {
        return callApi(`api/users/delete-user/${userId}`,'DELETE',null)
        .then(res =>{
            dispatch(actDeleteUser(userId));
        })
    }
}

export const actAddUser =(user)=>{
    
}
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
    return {
        type:Types.ADD_USERS,
        user
    }
    
}
export const actAddUserReq = (user)=>{
    return(dispatch)=>{
        return callApi('api/users/add-user','POST',user)
        .then(res=>{
            dispatch(actAddUser(res.data));
        })
    }
}

export const actGetUserById = (user) => ({
    type: Types.GET_USERS_BY_ID,
    user,
});
export const actGetUserByIdReq = (userId) => {
   return (dispatch) => { 
       return callApi(`api/users/get-userId/${userId}`, 'GET', null)
    .then((res) => {
        dispatch(actGetUserById(res.data));
        })
    }
}

export const actUpdateUser = (user) =>{
    return {
        type:Types.UPDATE_USERS,
        user
    }
}
export const actUpdateUserReq = (user) =>{
    return (dispatch) =>{
        return callApi(`api/users/update-user/${user._id}`,'PUT',user)
        .then(res =>{
            dispatch(actUpdateUser(res.data))
        })
    }
}

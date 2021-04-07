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
        return callApi('users','GET',null)
        .then(res =>{
            dispatch(actFetchUser(res.data));
        })
    }
}
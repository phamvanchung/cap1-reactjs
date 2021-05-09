import * as TypesLogin from '../constants/authActionType';
import callApi from '../utils/apiCaller';

export const actLogin = (dataUser) => ({
  type: TypesLogin.USER_LOGIN,
  dataUser
});

export const actLoginReq = (dataUser) =>{
    return (dispatch) =>{
        return callApi('api/login', 'POST', dataUser)
        .then((res) => {
            dispatch(actLogin(res.data));
        });
    }
}

export const actRegister = (dataUser) => ({
  type: TypesLogin.USER_REGISTER,
  dataUser
});
export const actRegisterReq = (dataUser) =>{
    return (dispatch) =>{
        return callApi('api/register', 'POST', dataUser)
        .then((res) => {
            dispatch(actRegister(res.data));
        });
    }
}
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';
import * as TypesAuth from '../constants/authActionType';

const initialState = {
  isLogin: false,
  dataUser: null,
};
const persistConfig = {
  key: 'login', // key localstorega
  storage,
  blacklist: [], // k bi thay doi hoac k dua va localstorage
};
const Auth = (state = initialState, action) => {
  switch (action.type) {
    case TypesAuth.USER_LOGIN:
      if (action.dataUser.code === 200) {
        state.isLogin = true;
        state.dataUser = action.dataUser;
      }
      return { ...state };
    case TypesAuth.USER_REGISTER:
      return { ...state };
    default: return { ...state };
  }
};

export default persistReducer(persistConfig, Auth);
import { combineReducers } from 'redux';
import posts from './posts';
import users from './users';
import itemEditing from './itemEditing';
import auth from './auth';

const appReducers = combineReducers({
    posts,
    users,
    itemEditing,
    auth,
})

export default appReducers;
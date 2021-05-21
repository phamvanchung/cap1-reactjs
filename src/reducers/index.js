import { combineReducers } from 'redux';
import posts from './posts';
import users from './users';
import search from './search';
import itemEditing from './itemEditing';
import auth from './auth';

const appReducers = combineReducers({
    posts,
    users,
    search,
    itemEditing,
    auth,
})

export default appReducers;
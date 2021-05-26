import { combineReducers } from 'redux';
import posts from './posts';
import users from './users';
import shops from './shops';
import search from './search';
import itemEditing from './itemEditing';
import auth from './auth';

const appReducers = combineReducers({
    posts,
    users,
    shops,
    search,
    itemEditing,
    auth,
})

export default appReducers;
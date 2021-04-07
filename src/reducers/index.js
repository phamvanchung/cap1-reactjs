import { combineReducers } from 'redux';
import posts from './posts';
import users from './users';
import itemEditing from './itemEditing';

const appReducers = combineReducers({
    posts,
    users,
    itemEditing
})

export default appReducers;
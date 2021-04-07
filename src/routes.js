import React from 'react';
import HomePage from './pages/HomePage/HomePage';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';
import AllPostPage from './pages/pageAD/pagePost/AllPostPage';
import AddPostPage from './pages/pageAD/pagePost/AddPostPage';
import EditPostPage from './pages/pageAD/pagePost/EditPostPage';
import UserListPage from './pages/UserListPage/UserListPage';
import UserActionPage from './pages/UserActionPage/UserActionPage';


const routes =[
    {
        path: '/',
        exact: true,
        main: ()=> <HomePage/>
    },
    {
        path: '/posts-list',
        exact: false,
        main: ()=> <AllPostPage/>
    },
    {
        path: '/posts/add-post',
        exact: false,
        main: ({history})=> <AddPostPage history={history}/>
    },
    {
        path: '/posts/:postId/edit',
        exact: false,
        main: ({match,history})=> <EditPostPage match={match} history={history}/>
    },
    {
        path: '/users-list',
        exact: false,
        main: ()=> <UserListPage/>
    },
    {
        path: '/users/add',
        exact: false,
        main: ({history})=> <UserActionPage history={history}/>
    },
    {
        path: '/users/:userId/edit',
        exact: false,
        main: ({match,history})=> <UserActionPage match={match} history={history}/>
    },
    {
        path: '',
        exact: false,
        main: ()=> <NotFoundPage/>
    },
    
]

export default routes;
import React from 'react';
import HomePage from './pages/HomePage/HomePage';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';
import AllPostPage from './pages/pageAD/pagePost/AllPostPage';
import AddPostPage from './pages/pageAD/pagePost/AddPostPage';
import EditPostPage from './pages/pageAD/pagePost/EditPostPage';
import AllUserPage from './pages/pageAD/pageUser/AllUserPage';
import AddUserPage from './pages/pageAD/pageUser/AddUserPage';
import EditUserPage from './pages/pageAD/pageUser/EditUserPage';

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
        main: ()=> <AllUserPage/>
    },
    {
        path: '/users/add-user',
        exact: false,
        main: ({history})=> <AddUserPage history={history}/>
    },
    {
        path: '/users/:userId/edit',
        exact: false,
        main: ({match,history})=> <EditUserPage match={match} history={history}/>
    },
    {
        path: '',
        exact: false,
        main: ()=> <NotFoundPage/>
    },
    
]

export default routes;
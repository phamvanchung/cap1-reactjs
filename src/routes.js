import React from 'react';

//import Admin
import HomePageAd from './pages/pageAD/HomePageAd/HomePageAd';
import AllPostPage from './pages/pageAD/pagePost/AllPostPage';
import AddPostPage from './pages/pageAD/pagePost/AddPostPage';
import EditPostPage from './pages/pageAD/pagePost/EditPostPage';
import AllUserPage from './pages/pageAD/pageUser/AllUserPage';
import AddUserPage from './pages/pageAD/pageUser/AddUserPage';
import EditUserPage from './pages/pageAD/pageUser/EditUserPage';
import AllShopsPage from './pages/pageAD/pageShop/AllShopPage';
import AddShopPage from './pages/pageAD/pageShop/AddShopPage';
import EditShopPage from './pages/pageAD/pageShop/EditShopPage';

//import Client
import HomePageClt from './pages/pageClient/HomePage/HomePage';
// import NotFoundPage from './pages/pageClient/NotFoundPage/NotFound';
import AllShopPage from './pages/pageClient/AllPostPage/AllPostPage';
import MeProfilePage from './pages/pageClient/MeProfilePage/meProfilePage';
import DetailPage from './components/componentsClient/Content/Cart/CartDetail';
import About from './components/componentsClient/About/About';
import BookingPage from './pages/pageClient/Booking/BookingPage';
import MePostPage from './pages/pageClient/MePostPage/MePostPage';
import AddPostMePage from './pages/pageClient/MePostPage/AddPostMePage';

//import Auth
import LoginPage from './pages/pageAuth/LoginPage/LoginPage';
import RegisterPage from './pages/pageAuth/RegisterPage/RegisterPage';



export const routesAuth=[
    {
        path: '/login',
        exact: false,
        main: ({match,history})=> <LoginPage match={match} history={history}/>
    },
    {
        path: '/register',
        exact:false,
        main: ({match,history})=> <RegisterPage match={match} history={history}/>
    }
]


export const routes =[
    {
        path:'/',
        exact:true,
        main:  () => <HomePageClt/>
    },
    {
        path:'/about',
        exact:false,
        main: () => <About/>
    },
    {
        path:'/all-shop',
        exact:false,
        main: ({match}) => <AllShopPage match={match} />
    },
    {
        path:'/detail-shop/:postId',
        exact:false,
        main: ({match,history}) => <DetailPage match={match} history={history}/>
    },
    {
        path: '/me/profile',
        exact:false,
        main: () => <MeProfilePage/>
    },
    {
        path: '/me/post',
        exact:false,
        main: () => <MePostPage/>
    },
    {
        path: '/me/add-post',
        exact:false,
        main: ({match,history}) => <AddPostMePage match={match} history={history}/>
    },
    {
        path: '/my-order/:posId/booking',
        exact:false,
        main: ({match,history}) => <BookingPage match={match} history={history}/>
    },
    // {
    //     path:'*',
    //     exact:false,
    //     main: () => <NotFoundPage/>
    // }

]



export const routesAd =[
    {
        path: '/admin',
        exact: true,
        main: ()=> <HomePageAd/>
    },
    {
        path: '/admin/posts-list',
        exact: false,
        main: ()=> <AllPostPage/>
    },
    {
        path: '/admin/add-post',
        exact: false,
        main: ({history})=> <AddPostPage history={history}/>
    },
    {
        path: '/admin/:postId/edit-post',
        exact: false,
        main: ({match,history})=> <EditPostPage match={match} history={history}/>
    },
    {
        path: '/admin/users-list',
        exact: false,
        main: ()=> <AllUserPage/>
    },
    {
        path: '/admin/add-user',
        exact: false,
        main: ({history})=> <AddUserPage history={history}/>
    },
    {
        path: '/admin/:userId/edit-user',
        exact: false,
        main: ({match,history})=> <EditUserPage match={match} history={history}/>
    },
    {
        path: '/admin/shops-list',
        exact: false,
        main:()=> <AllShopsPage/>
    },
    {
        path: '/admin/add-shop',
        exact: false,
        main:({history})=> <AddShopPage history={history}/>
    },
    {
        path: '/admin/:shopId/edit-shop',
        exact: false,
        main:({match,history})=> <EditShopPage match={match} history={history}/>
    }

    // {
    //     path: '',
    //     exact: false,
    //     main: ()=> <NotFoundPage/>
    // },
    
]

import React, { Component } from 'react';
import { Route,Link } from "react-router-dom";

const menus = [
    {
        name:'Home',
        to:'/admin',
        exact: true,
    },
    {
        name:'Users',
        to:'/admin/users-list',
        exact: false,
    },
    {
        name:'Posts',
        to:'/admin/posts-list',
        exact: false,
    },
    {
        name:'Shops',
        to:'/admin/shops-list',
        exact: false,
    }

];

const MenuLink = ({label,to,activeOnlyWhenExact})=>{
    return (
        <Route
            path={to}
            exact={activeOnlyWhenExact}
            children={({match})=>{
                var active = match ? 'active' : '';
                return(
                    <li className={active}>
                        <Link to={to}>
                            {label}
                        </Link>
                    </li>
                )
            }}
        />
    )
}


class Menu extends Component {

    showMenus = (menus) => {
        var result =null;
        if(menus.length > 0){
            result = menus.map((menu,index)=>{
                return(
                    <MenuLink
                        key={index}
                        label={menu.name}
                        to={menu.to}
                        activeOnlyWhenExact={menu.exact}
                    />
                )
            })
        }

        return result;
    }

    render() {
        return (
            <nav>
            <div className='header-admin'>
                {/* <img src="../../../public/" alt='logo'/> */}
                <span />
                FFW
                {/* <a>  </a> */}
            </div>
            <ul className="nav-list">
                <li className="nav-item"><span>Admin</span></li>
                {/* <li className="nav-item"><a href="/" >Home</a></li>
                <li className="nav-item"><a href="/">Users</a></li>
                <li className="nav-item"><a href="/">Posts</a></li> */}
                {this.showMenus(menus)}
            </ul>
            </nav>
        );
    }
}

export default Menu;
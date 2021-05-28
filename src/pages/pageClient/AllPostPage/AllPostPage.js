import React, { Component } from 'react';
import AllPostList from '../../../components/componentsClient/Content/Cart/CartList';

class AllShopPage extends Component {
    componentDidMount() {
        window.scrollTo(0, 0);
    }
    render() {
        return (
            <div>
                <AllPostList/>
            </div>
        );
    }
}

export default AllShopPage;
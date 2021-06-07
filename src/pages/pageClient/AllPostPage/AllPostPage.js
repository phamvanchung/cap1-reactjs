import React, { Component } from 'react';
import AllPostList from '../../../components/componentsClient/Content/Cart/CartList';

class AllShopPage extends Component {
    componentDidMount() {
        window.scrollTo(0, 0);
    }
    render() {
        return (
            <>
                <AllPostList match={this.props.match}/>
            </>
        );
    }
}

export default AllShopPage;
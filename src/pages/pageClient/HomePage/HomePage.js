import React, { Component } from 'react';
import Slide from '../../../components/componentsClient/Slides/Slides';
import Content from '../../../components/componentsClient/Content/Cart/Cart';
import Contact from '../../../components/componentsClient/Contact/Contact';

class HomePage extends Component {
    componentDidMount() {
        window.scrollTo(0, 0);
    }
    render() {
        return (
            <>
                <Slide/>
                <Content/>
                <Contact/>
            </>
        );
    }
}

export default HomePage;
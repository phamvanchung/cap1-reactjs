import React, { Component } from 'react';
import {Link} from 'react-router-dom';
// import './Footer.scss';
class Footer extends Component {
    render() {
        return (
            <footer className="footer">
            <span className="footer-title">FIX FAST WEBSITE</span>
            <p>Copyright @2021 <Link to="#">FFW</Link>. All Rights Reserved.</p>
            </footer>
    );
    }
}

export default Footer;
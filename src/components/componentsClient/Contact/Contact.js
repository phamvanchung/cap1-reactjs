import React, { Component } from 'react';

class Contact extends Component {
    render() {
        return (
            <div>
            {/*Contact section*/}
            <section className="contact" id="contact">
                <div className="title reveal">
                <h2 className="section-title">Contact</h2>
                </div>
                <div className="content">
                <div className="row">
                    <div className="card reveal">
                    <div className="contact-icon">
                        <i className="fas fa-map-marker-alt" />
                    </div>
                    <div className="info">
                        <h3>Address</h3>
                        <span>Address, City, Country</span>
                    </div>
                    </div>
                    <div className="card reveal">
                    <div className="contact-icon">
                        <i className="fas fa-phone" />
                    </div>
                    <div className="info">
                        <h3>Phone</h3>
                        <span>+00 0000 000 000</span>
                    </div>
                    </div>
                    <div className="card reveal">
                    <div className="contact-icon">
                        <i className="fas fa-envelope" />
                    </div>
                    <div className="info">
                        <h3>Email Address</h3>
                        <span>contact@email.com</span>
                    </div>
                    </div>
                    <div className="card reveal">
                    <div className="contact-icon">
                        <i className="fas fa-globe" />
                    </div>
                    <div className="info">
                        <h3>Website</h3>
                        <span>mywebsite.com</span>
                    </div>
                    </div>
                </div>
                </div>
            </section>
            </div>
        );
    }
}

export default Contact;
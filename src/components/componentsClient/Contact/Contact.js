import React, { Component } from 'react';

class Contact extends Component {
    render() {
        return (
            <>
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
                        <span>Hà Huy Tập, ĐN, VN</span>
                    </div>
                    </div>
                    <div className="card reveal">
                    <div className="contact-icon">
                        <i className="fas fa-phone" />
                    </div>
                    <div className="info">
                        <h3>Phone</h3>
                        <span>+1900 10001</span>
                    </div>
                    </div>
                    <div className="card reveal">
                    <div className="contact-icon">
                        <i className="fas fa-envelope" />
                    </div>
                    <div className="info">
                        <h3>Email Address</h3>
                        <span>FFW@email.com</span>
                    </div>
                    </div>
                    <div className="card reveal">
                    <div className="contact-icon">
                        <i className="fas fa-globe" />
                    </div>
                    <div className="info">
                        <h3>Website</h3>
                        <span>FFW.com</span>
                    </div>
                    </div>
                </div>
                </div>
            </section>
            </>
        );
    }
}

export default Contact;
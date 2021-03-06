import React, { Component } from 'react';
import {Link} from 'react-router-dom';
class Cart extends Component {
    render() {
        return (
            <>
            {/*image card layout start*/}
            <section className="contact" id="services">
                <div className="title reveal">
                <h2 className="section-title">Service</h2>
                </div>
                <div className="row">
                {/*image card start*/}
                <Link to="/all-shop" className="image">
                    <img src="https://vcdn-vnexpress.vnecdn.net/2019/02/20/IMG-8444-8451-1550678975.jpg" alt="" />
                    <div className="details">
                    <h2>Đà Nẵng</h2>
                    <div className="more">
                        <p className="read-more">Your <span>Location</span></p>
                    </div>
                    </div>
                </Link>
                {/*image card start*/}
                <Link to="/all-shop" className="image">
                    <img src="./assets/img/quảng trị 1.jpg" alt="" />
                    <div className="details">
                    <h2>Quảng Trị</h2>
                    <div className="more">
                        <p className="read-more">Your <span>Location</span></p>
                    </div>
                    </div>
                </Link>
                {/*image card start*/}
                <Link to="/all-shop" className="image">
                    <img src="./assets/img/had nội 4.jpg" alt="" />
                    <div className="details">
                    <h2>Hà Nội</h2>
                    <div className="more">
                        <p className="read-more">Your<span>Location</span></p>
                    </div>
                    </div>
                </Link>
                </div>
                {/*image row start*/}
                <div className="row">
                {/*image card start*/}
                <Link to="/all-shop" className="image">
                    <img src="./assets/img/quang nam 1.jpg" alt="" />
                    <div className="details">
                    <h2>Quảng Nam</h2>
                    <div className="more">
                        <p className="read-more">Your <span>Location</span></p>
                    </div>
                    </div>
                </Link>
                {/*image card start*/}
                <Link to="/all-shop" className="image">
                    <img src="./assets/img/daklak.jpg" alt="" />
                    <div className="details">
                    <h2>Dak Lak</h2>
                    <div className="more">
                        <p className="read-more">Your <span>Location</span></p>
                    </div>
                    </div>
                </Link>
                {/*image card start*/}
                <Link to="/all-shop" className="image">
                    <img src="./assets/img/sài gòn.jpg" alt="" />
                    <div className="details">
                    <h2>Sài Gòn</h2>
                    <div className="more">
                        <p className="read-more">Your <span>Location</span></p>
                    </div>
                    </div>
                </Link>
                </div>
            </section>
            {/*image card layout end*/}
            </>
        );
    }
}

export default Cart;
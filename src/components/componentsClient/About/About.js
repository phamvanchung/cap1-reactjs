import React, { Component } from 'react';
import './about.scss';

class About extends Component {
    render() {
        return (
            <div>
                <div className="content">
                <div className="introduce">
                <div className="content_intro">
                    <h5>Fix Fast Website</h5>
                    <h1>About</h1>
                    <p>This is a project for Capstone 1 of Team C1SE.01.</p>
                </div>
                <div className="logo_intro">
                    <img src="./image/unnamed.jpg" alt="avatar" className="logo_img" />
                </div>
                </div>
                <div className="member_intro">
                <div className="avatar_member">
                    <img src="./assets/img/179529812_263015158862776_1569009766995198780_n.jpg" alt="" className="avatar" />
                </div>
                <div className="intro_1">
                    <div className="name_member">
                    <h4>Scrum Master</h4>
                    <h2>Nguyen Quang Huy</h2>
                    </div>
                    <div className="slogan_member">
                    <p>"Stopping is failure"</p>
                    </div>
                </div>
                </div>
                <div className="intro_2">
                <div className="member_intro">
                    <div className="intro_1">
                    <div className="name_member">
                        <span className="name_member-label">Member</span>
                        <span className="name_member-1">Pham Van Chung</span>
                    </div>
                    <div className="slogan_member">
                        <p>"If you want to go far go together"</p>
                    </div>
                    </div>
                    <div className="avatar_member">
                    <img src="./assets/img/179529812_263015158862776_1569009766995198780_n.jpg" alt="" className="avatar" />
                    </div>
                </div>
                </div>
                <div className="member_intro">
                <div className="avatar_member">
                    <img src="./assets/img/179529812_263015158862776_1569009766995198780_n.jpg" alt="" className="avatar" />
                </div>
                <div className="intro_1">
                    <div className="name_member">
                    <h4>Member</h4>
                    <h2>Vo Nhu Hung</h2>
                    </div>
                    <div className="slogan_member">
                    <p>"No pressure, no diamonds"</p>
                    </div>
                </div>
                </div>
                <div className="intro_2">
                <div className="member_intro">
                    <div className="intro_1">
                    <div className="name_member">
                        <h4>Member</h4>
                        <h2>Pham Quoc Hung</h2>
                    </div>
                    <div className="slogan_member">
                        <p>"Friend is all"</p>
                    </div>
                    </div>
                    <div className="avatar_member">
                    <img src="./assets/img/179529812_263015158862776_1569009766995198780_n.jpg" alt="" className="avatar" />
                    </div>
                </div>
                </div>
            </div>
            </div>
        );
    }
}

export default About;
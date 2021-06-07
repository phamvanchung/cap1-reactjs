import React, { Component } from 'react';
import './about.css';

class About extends Component {
    componentDidMount() {
        window.scrollTo(0, 0);
    }
    render() {
        return (
            <>
                <div className="content-about">
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
                    <img src="https://scontent-hkg4-1.xx.fbcdn.net/v/t1.6435-1/p200x200/183623030_2025077850977058_113938380665667666_n.jpg?_nc_cat=108&ccb=1-3&_nc_sid=7206a8&_nc_ohc=fqCe41TkcAkAX_1-Sy1&_nc_ht=scontent-hkg4-1.xx&tp=6&oh=06260e9ab39b3d0cce64d0a42acebf22&oe=60D2EDF6" alt="" className="avatar" />
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
                    <img src="https://scontent-hkg4-1.xx.fbcdn.net/v/t1.6435-9/69016294_2375651029357198_7747339386655604736_n.jpg?_nc_cat=103&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=i3Qzsls-9XkAX9JQad_&_nc_ht=scontent-hkg4-1.xx&oh=fa22242042bb9faf0cfba7063426259c&oe=60D3EC6C" alt="" className="avatar" />
                    </div>
                </div>
                </div>
                <div className="member_intro">
                <div className="avatar_member">
                    <img src="https://scontent-hkg4-1.xx.fbcdn.net/v/t1.15752-9/186452069_316543533369744_860870048765678860_n.jpg?_nc_cat=107&ccb=1-3&_nc_sid=ae9488&_nc_ohc=99ucjVh6AAgAX-56uqf&_nc_ht=scontent-hkg4-1.xx&oh=2a4c006dbd47afae7fa657f5872291ba&oe=60D119C8" alt="" className="avatar" />
                </div>
                <div className="intro_1">
                    <div className="name_member">
                    <h4>Member</h4>
                    <h2>Vo Nhu Hung</h2>
                    </div>
                    <div className="slogan_member">
                    <p>"I don't always have time to study but when i do i still don't"</p>
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
                        <p>"Nothing is impossible"</p>
                    </div>
                    </div>
                    <div className="avatar_member">
                    <img src="https://scontent.fdad2-1.fna.fbcdn.net/v/t1.6435-9/84645598_202508854133914_269238236927229952_n.jpg?_nc_cat=100&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=nUU8VD76_w8AX9eD_nR&_nc_ht=scontent.fdad2-1.fna&oh=a56877628ff749e67a7be202b9981673&oe=60D08AA1" alt="" className="avatar" />
                    </div>
                </div>
                </div>
            </div>
            </>
        );
    }
}

export default About;
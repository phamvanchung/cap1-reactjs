import React, { Component } from 'react';
import {connect} from 'react-redux';
import {USER_IMG} from '../../../constants/service';
import './meProfilePage.css';
class meProfilePage extends Component {
    componentDidMount(){
        window.scrollTo(0, 0);
    }
    render() {
        const {auth} = this.props;
        return (
            <div className="main-container">
            <div className="card-title">
            <span className="name-title">My Profile</span>
            <span className="content-title">Manage profile information for account security</span>
            </div>
            <div className="card-profile">
            <form className="content-file">
                <div className="form-profile">
                <div className="title-profile">User name</div>
                <div className="content">
                    {auth.dataUser.user.userName}
                </div>
                </div>
                <div className="form-profile">
                    <div className="title-profile">Name</div>
                    <div className="content-input">
                        <input className="form-input-profile" type="text" />
                    </div>
                </div>
                <div className="form-profile">
                    <div className="title-profile">Email</div>
                    <div className="content">{auth.dataUser.user.email}</div>
                </div>
                <div className="form-profile">
                    <div className="title-profile">Phone Number</div>
                    <div className="content">{auth.dataUser.user.phoneUser}</div>
                </div>
                <div className="form-profile">
                    <div className="title-profile">Shop Name</div>
                    <div className="content-input">
                        <input className="form-input-profile" type="text" defaultValue={auth.dataUser.user.userName} />
                    </div>
                </div>
                <div className="button">
                    <button className="submit">Save</button>
                </div>
            </form>
            <div className="avatar-file">
                <div className="avatar-profile">
                <img src={`${USER_IMG}/${auth.dataUser.user.avatar}`} alt="avatar" className="avatar-profile" />
                </div>
                <div className="choose-avat">
                <input type="file" className="choose" />
                </div>
                <div className="note">
                    <div className="content">Maximum file size 1 MB</div>
                    <div className="content">Format: .JPEG, .PNG</div>
                </div>
            </div>
            </div>
        </div>
        );
    }
}

const mapStateToProps = (state) =>{
    return {
        auth:state.auth
    }
}

export default connect(mapStateToProps,null) (meProfilePage);
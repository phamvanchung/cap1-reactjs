import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';
import {POST_IMG} from '../../../constants/service';
import {actGetPostByIdReq} from '../../../actions/actPosts.js';
import {actAddToCartReq} from "../../../actions/actCart";
import swal from 'sweetalert';

import './booking.css';


class bookingPage extends Component {
 
    constructor(props) {
        super(props)
        this.state = {
           formBk: {
            firstName:'',
            lastName:'',
            email:'',
            confirmEmail:'',
            address:'',
            phone:'',
           }
        }
    }

    componentDidMount() {
        window.scrollTo(0, 0);
    }

    showAlert = () => {
        swal("Successful Appointment!", "The store will contact you as soon as possible!", "success");
    }
    
    handleOnChange = (e) => {
        this.setState({
            formBk:{
                ...this.state.formBk,
                [e.target.name]:e.target.value
            }
        })
    }
    
    handleSubmit = (e)=>{
        e.preventDefault();
        const userId = this.props.login.dataUser.user._id;
        const postId = this.props.match.params.posId;
        const booking = this.state.formBk;
        if(this.props.login.isLogin===true){
            this.props.AddToCart({userId,postId,booking})
            this.showAlert();
            this.setState({
                formBk: {
                    firstName:'',
                    lastName:'',
                    email:'',
                    confirmEmail:'',
                    address:'',
                    phone:'',
                   }
            })
        }
        else{
            this.props.history.push('/login')
        }
    }

    showDetailPostId = (post) => {
        if(post){
            return(
                <div className="cart-wrapper">
                <img className="cart-img" src={`${POST_IMG}/${post.avatar}`} alt="avatar" />
                <div className="cart-content">
                    <span className="cart-lable">{post.name}</span>
                    <span className="cart-address">{post.address}</span>
                    <span className="cart-point">Khách đã cho điểm 8,4!</span>
                    <ul className="cart-three-list">
                        <li className="cart-three-item">Sửa xe giá rẻ</li>
                        <li className="cart-three-item">Phục vụ tận nơi</li>
                    </ul>
                </div>
                </div>
            ) 
        }
    }
    
    render() {
        const {firstName, lastName, email,confirmEmail,address, phone}=this.state.formBk;
        let {posts} = this.props;
        return (
            <>
                <div className="grid">
                <div className="grid__row">
                <div className="grid_colum_1">
                    <div className="table-discount">
                    <p className="table-discount-lable">Sign in to get Genius prices</p>
                    <div className="table-discount-wrapper">
                        <img className="table-discount-img" src="https://cf.bstatic.com/static/img/genius/genius_trial/ge_closed_gift_refresh/46a8d74e6aafd0fd350d21aa13af5b617cc84d48.svg" alt="img" />
                        <p className="table-discount-content">Genius guests can save as little as 10% on booking. Please login to see if you are eligible <Link className="table-discount-link" to="/login">Login</Link></p>
                    </div>
                    <div className="table-discount-footer">
                        <span className="table-discount-footer-lable">Loyalty Program FFW.com</span>
                    </div>
                    </div>
                    <div className="table-booking-include">
                    <div className="table-booking-include-lable">Booking includes:</div>
                    <ul className="table-booking-include-list">
                        <li className="table-booking-include-items">Can pay online</li>
                        <li className="table-booking-include-items">Serving customers at home</li>
                    </ul>
                    </div>
                    <div className="table-notes">
                    <div className="table-notes-labe">Note</div>
                    <p className="table-notes-content">Customers can pay by bank transfer or pay in cash when the repair is completed. The shop will contact you when you make an appointment.</p>
                    <p className="table-notes-content">Please let us know the current condition of your vehicle. Customers can contact the shop directly using the contact information listed in the booking confirmation.</p>
                    </div>
                </div>
                <div className="grid_colum_2 ">
                    {this.showDetailPostId(posts)}
                    <div className="table-login">
                        <span className="table-login-content"><Link className="table-login-link" to="/login">Login</Link> to book an appointment with your saved information or<Link to="/register" className="table-login-link"> registration</Link> to manage your bookings wherever you are!</span>
                    </div>
                    <span className="form-lable">Enter your details</span>
                    <form className="form-booking" onSubmit={this.handleSubmit}>
                    <div className="form-book-wrapper">
                    <div className="form-table">
                        <p className="form-table-lable">Almost done! Just fill in the information section<span className="star"> * </span>required </p>
                        <p className="form-table-lable-2">Please fill in the information in Vietnamese or English</p>
                        <div className="form-table-wrapper">
                        <div className="form-table-two">
                            <div className="form-table-name">Surname<span className="star"> *</span></div>
                            <input type="text" 
                                className="form-table-input"  
                                name='firstName' value={firstName} 
                                required
                                onChange={this.handleOnChange}
                                />
                                
                        </div>
                        <div className="form-table-two">
                            <div className="form-table-name">Name<span className="star"> *</span></div>
                            <input type="text" 
                                className="form-table-input" 
                                name='lastName' value={lastName}
                                required
                                onChange={this.handleOnChange}
                                />
                        </div>
                        </div>
                        <div className="form-table-wrapper-2">
                        <span className="form-table-name">Email address<span className="star"> *</span></span>
                        <input type="email" 
                            className="form-table-input w5"
                            required
                            name='email' value={email} 
                            onChange={this.handleOnChange}
                            />
                        <span className="form-table-email">Booking confirmation email will be sent to this address</span>
                        </div>
                        <div className="form-table-wrapper-2">
                        <div className="form-table-name">Verify email address<span className="star"> *</span></div>
                        <input type="email" 
                            className="form-table-input w5"
                            required
                            name='confirmEmail' value={confirmEmail}
                            onChange={this.handleOnChange}
                            />
                        </div>
                        <div className="form-table-wrapper-2">
                        <div className="form-table-name">Address<span className="star"> *</span></div>
                        <input type="text" 
                            className="form-table-input w5"
                            required
                            name='address' value={address}
                            onChange={this.handleOnChange}
                            />
                        </div>
                        <div className="form-table-wrapper-2">
                        <div className="form-table-name">Phone (preferably mobile number)<span className="star"> *</span></div>
                        <input type="number"
                            className="form-table-input w5"
                            required
                            name='phone' value={phone}
                            onChange={this.handleOnChange} 
                            />
                        </div>
                    </div>
                    </div>
                    <button type="submit" className="btn btn-info btn_custom">Complete booking</button>
                </form>
                </div>
                </div>
            </div>
            </>
        );
    }
}

const mapStateToProps=(state)=>{
    return{
    posts: state.itemEditing,
    login: state.auth,
}}
const mapDispatchToProps = (dispatch) =>({
    getPostByIdBooking: (postId)=>{
        dispatch(actGetPostByIdReq(postId))
    },
    AddToCart:(post)=>{
        dispatch(actAddToCartReq(post))
    }
})

export default connect(mapStateToProps,mapDispatchToProps) (bookingPage);
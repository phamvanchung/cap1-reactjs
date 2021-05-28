import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './booking.css';

class bookingPage extends Component {
    componentDidMount() {
        window.scrollTo(0, 0);
    }
    constructor(props) {
        super(props)
        this.state={
            firstName:'',
            lastName:'',
            email:'',
            ConfirmEmail:'',
            phone:'',
        }
    }
    
    handleOnChange = (e) => {
        const { name, value} =e.target;
        this.setState({
            [name]:value
        })
    }
    
    handleOnClick = (e)=>{
        
    }
    
    render() {
        const {firstName, lastName, email,confirmEmail, phone}=this.state;

        return (
            <div>
                <div className="grid">
                <div className="grid__row">
                <div className="grid_colum_1">
                    <div className="table-discount">
                    <p className="table-discount-lable">Đăng nhập để nhận giá Genius</p>
                    <div className="table-discount-wrapper">
                        <img className="table-discount-img" src="https://cf.bstatic.com/static/img/genius/genius_trial/ge_closed_gift_refresh/46a8d74e6aafd0fd350d21aa13af5b617cc84d48.svg" alt="img" />
                        <p className="table-discount-content">Khách Genius có thể tiết kiệm được ít nhất 10% khi đặt lịch. Hãy đăng nhập để xem bạn có đạt đủ điều kiện không <Link className="table-discount-link" to="/login"> Đăng nhập</Link> </p>
                    </div>
                    <div className="table-discount-footer">
                        <span className="table-discount-footer-lable">Chương trình khách hàng thân thiết của FFW.com</span>
                    </div>
                    </div>
                    <div className="table-booking-include">
                    <div className="table-booking-include-lable">Đặt lịch bao gồm:</div>
                    <ul className="table-booking-include-list">
                        <li className="table-booking-include-items">Có thể thanh toán online</li>
                        <li className="table-booking-include-items">Phục vụ khách hàng tận nhà</li>
                    </ul>
                    </div>
                    <div className="table-notes">
                    <div className="table-notes-labe">Ghi chú</div>
                    <p className="table-notes-content">Khách hàng có thể thanh toán qua chuyển khoản ngân hàng hoặc thanh toán bằng tiền mặt khi sửa xong. Shop sẽ liên hệ với bạn khi bạn đặt lịch.</p>
                    <p className="table-notes-content">Vui lòng thông báo tình trạng xe của bạn hiện tại. Khách hàng có thể liên lạc trực tiếp với shop qua các thông tin liên hệ được ghi trong xác nhận đặt lịch.</p>
                    </div>
                </div>
                <div className="grid_colum_2 ">
                    <div className="cart-wrapper">
                    <img className="cart-img" src="https://spro.vn/image/catalog/tin-tuc/tiem-sua-xe/mo-tiem-sua-xe-may-can-bao-nhieu-von-la-du-thiet-bi-sua-xe-may2.jpg" alt="" />
                    <div className="cart-content">
                        <span className="cart-lable">Tiệm sửa xe Đức Thương</span>
                        <span className="cart-address">18 Nguyễn Thị Minh Khai, Tp.Đà Nẵng</span>
                        <span className="cart-point">Khách đã cho điểm 8,4!</span>
                        <ul className="cart-three-list">
                        <li className="cart-three-item">Sửa xe giá rẻ</li>
                        <li className="cart-three-item">Phục vụ tận nơi</li>
                        </ul>
                    </div>
                    </div>
                    <div className="table-login">
                    <span className="table-login-content"><Link className="table-login-link" to="/login">Đăng nhập</Link> để đặt lịch với thông tin đã lưu của bạn hoặc <Link to="/register" className="table-login-link">đăng ký</Link> để quản lý lịch đặt của bạn mọi lúc mọi nơi!</span>
                    </div>
                    <span className="form-lable">Nhập thông tin chi tiết của bạn</span>
                    <div className="form-book-wrapper">
                    <div className="form-table">
                        <p className="form-table-lable">Gần xong rồi! Chỉ cần điền phần thông tin * bắt buộc</p>
                        <p className="form-table-lable-2">Vui lòng điền thông tin bằng Tiếng Việt hoặc Tiếng Anh</p>
                        <div className="form-table-wrapper">
                        <div className="form-table-two">
                            <div className="form-table-name">Họ</div>
                            <input type="text" className="form-table-input" name={firstName} onChange={this.handleOnChange}/>
                        </div>
                        <div className="form-table-two">
                            <div className="form-table-name">Tên</div>
                            <input type="text" className="form-table-input" name={lastName} onChange={this.handleOnChange}/>
                        </div>
                        </div>
                        <div className="form-table-wrapper-2">
                        <span className="form-table-name">Địa chỉ email</span>
                        <input type="email" className="form-table-input w5" name={email} onChange={this.handleOnChange}/>
                        <span className="form-table-email">Email xác nhận đặt lịch sẽ được gửi đến địa chỉ này</span>
                        </div>
                        <div className="form-table-wrapper-2">
                        <div className="form-table-name">Xác nhận địa chỉ email</div>
                        <input type="email" className="form-table-input w5" name={confirmEmail} onChange={this.handleOnChange}/>
                        </div>
                        <div className="form-table-wrapper-2">
                        <div className="form-table-name">Điện thoại (ưu tiên số ĐTDĐ)</div>
                        <input type="number" className="form-table-input w5" name={phone} onChange={this.handleOnChange} />
                        </div>
                    </div>
                    </div>
                    <button onClick={this.handleOnClick} type="text" className="btn btn-info btn_custom">Đặt lịch</button>
                </div>
                </div>
            </div>
            </div>
        );
    }
}

export default bookingPage;
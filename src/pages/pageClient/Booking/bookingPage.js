import React, { Component } from 'react';
import './booking.scss'

class bookingPage extends Component {
    render() {
        return (
            <div>
                <div className="grid">
                <div className="grid__row">
                <div className="grid_colum_1">
                    <div className="table-discount">
                    <p className="table-discount-lable">Đăng nhập để nhận giá Genius</p>
                    <div className="table-discount-wrapper">
                        <img className="table-discount-img" src="https://cf.bstatic.com/static/img/genius/genius_trial/ge_closed_gift_refresh/46a8d74e6aafd0fd350d21aa13af5b617cc84d48.svg" alt="img" />
                        <p className="table-discount-content">Khách Genius có thể tiết kiệm được ít nhất 10% khi đặt lịch. Hãy đăng nhập để xem bạn có đạt đủ điều kiện không <a className="table-discount-link" href="##"> Đăng nhập</a> </p>
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
                    <p className="table-notes-content">Khách được yêu cầu thanh toán qua chuyển khoản ngân hàng trước khi tới nơi. Chỗ nghỉ sẽ liên hệ với bạn sau khi đặt phòng để hướng dẫn chuyển khoản.</p>
                    <p className="table-notes-content">Vui lòng thông báo trước cho Kings Hotel Dalat về thời gian đến dự kiến của quý khách. Khách có thể sử dụng ô Yêu cầu Đặc biệt khi đặt phòng hoặc liên lạc trực tiếp với chỗ nghỉ qua các thông tin liên hệ được ghi trong xác nhận đặt phòng.</p>
                    </div>
                </div>
                <div className="grid_colum_2 ">
                    <div className="cart-wrapper">
                    <img className="cart-img" src="https://cf.bstatic.com/xdata/images/hotel/square200/264038280.webp?k=4fc7d66804135755f8eab3738b437bb938255d05cdb5da0fd819bc16aa244c0a&o=" alt="" />
                    <div className="cart-content">
                        <span className="cart-lable">Kings Hotel Dalat</span>
                        <span className="cart-address">10 Bui Thi Xuan, Đà Lạt, Việt Nam</span>
                        <span className="cart-point">Chỗ ở này có vị trí tốt. Khách đã cho điểm 8,4!</span>
                        <ul className="cart-three-list">
                        <li className="cart-three-item">Sửa xe giá rẻ</li>
                        <li className="cart-three-item">Phục vụ tận nơi</li>
                        </ul>
                    </div>
                    </div>
                    <div className="table-login">
                    <span className="table-login-content"><a className="table-login-link" href="/login">Đăng nhập</a> để đặt lịch với thông tin đã lưu của bạn hoặc <a href="/register" className="table-login-link">đăng ký</a> để quản lý lịch đặt của bạn mọi lúc mọi nơi!</span>
                    </div>
                    <span className="form-lable">Nhập thông tin chi tiết của bạn</span>
                    <div className="form-book-wrapper">
                    <div className="form-table">
                        <p className="form-table-lable">Gần xong rồi! Chỉ cần điền phần thông tin * bắt buộc</p>
                        <p className="form-table-lable-2">Vui lòng điền thông tin bằng Tiếng Việt hoặc Tiếng Anh</p>
                        <div className="form-table-wrapper">
                        <div className="form-table-two">
                            <div className="form-table-name">Họ</div>
                            <input type="text" className="form-table-input" />
                        </div>
                        <div className="form-table-two">
                            <div className="form-table-name">Tên</div>
                            <input type="text" className="form-table-input" />
                        </div>
                        </div>
                        <div className="form-table-wrapper-2">
                        <span className="form-table-name">Địa chỉ email</span>
                        <input type="email" className="form-table-input" />
                        <span className="form-table-email">Email xác nhận đặt lịch sẽ được gửi đến địa chỉ này</span>
                        </div>
                        <div className="form-table-wrapper-2">
                        <div className="form-table-name">Xác nhận địa chỉ email</div>
                        <input type="email" className="form-table-input" />
                        </div>
                    </div>
                    </div>
                    <button type="text" className="btn btn-info btn_custom">Đặt lịch</button>
                </div>
                </div>
            </div>
            </div>
        );
    }
}

export default bookingPage;
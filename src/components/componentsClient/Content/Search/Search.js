import React, { Component } from 'react';

class Search extends Component {
    render() {
        return (
            <div className="gird__colum-1">.
            <form className="form-wrapper">
                <h2 className="form-header">Search</h2>
                <div className="form-group1">
                <label className="form-label">Tìm kiếm cửa hàng</label>
                <div>
                    {/* <i class="fas fa-search"></i> */}
                    <input className="form-input" type="text" placeholder="Enter..." />
                </div>
                </div>
                <div className="form-group1">
                <label className="form-label">Loại phương tiện</label>
                <div>
                    {/* <i class="fas fa-traffic-light"></i> */}
                    <input className="form-input" type="text" placeholder="Enter..." />
                </div>
                </div>
                <div className="form-group1">
                <label className="form-label">Vị trí hiện tại</label>
                <div>
                    {/* <i class="fas fa-search"></i> */}
                    <input className="form-input" type="text" placeholder="Enter..." />
                </div>
                </div>
                <div className="form-group1">
                <select className="form-select">
                    <option value className="form-option">Tình trạng hiện tại</option>
                    <option value className="form-option">Hư hỏng nhẹ</option>
                    <option value className="form-option">Hư hỏng nặng</option>
                    <option value className="form-option">Tình trạng khác</option>
                </select>
                </div>
                <button className="btn btn-info">Tìm</button>
            </form>
            </div>
        );
    }
}

export default Search;
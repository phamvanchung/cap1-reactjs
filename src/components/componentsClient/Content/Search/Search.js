import React, { Component } from 'react';

class Search extends Component {
    render() {
        return (
            <div>
            <form className="form-wrapper">
                <h2 className="form-header">Search</h2>
                <div className="form-group1">
                <label className="form-label">Tìm kiếm cửa hàng</label>
                <div>
                    <input className="form-input" type="text" placeholder="Enter..." />
                </div>
                </div>
                <div className="form-group1">
                <label className="form-label">Loại phương tiện</label>
                <div>
                    <input className="form-input" type="text" placeholder="Enter..." />
                </div>
                </div>
                <div className="form-group1">
                <label className="form-label">Vị trí hiện tại</label>
                <div>
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
            <div className="gg_map">
                <iframe title="gg-map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9108318.918524707!2d103.99135499900542!3d16.691289340530655!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31157a4d736a1e5f%3A0xb03bb0c9e2fe62be!2zVmnhu4d0IE5hbQ!5e0!3m2!1svi!2s!4v1621585632465!5m2!1svi!2s" width={268} height={400} style={{border: 0}} allowFullScreen loading="lazy" />
            </div>
            </div>
        );
    }
}

export default Search;
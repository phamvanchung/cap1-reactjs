import React, { Component } from 'react';
import './meProfilePage.scss';

class mePostPage extends Component {
    render() {
        return (
            <div className="table-wrapper">
                <section className="section-me">
                    <div className="tbl-label" >Table Posts</div>
                    <div className="tbl-header">
                        <table className="tbl-table" cellPadding={0} cellSpacing={0} border={0}>
                        <thead>
                            <tr>
                            <th>The Repair Shop</th>
                            <th>Address</th>
                            <th>Phone</th>
                            <th>Description</th>
                            <th></th>
                            </tr>
                        </thead>
                        </table>
                    </div>
                    <div className="tbl-content">
                        <table className="tbl-table" cellPadding={0} cellSpacing={0} border={0}>
                        <tbody>
                            <tr>
                            <td>AAC</td>
                            <td>AUSTRALIAN COMPANY </td>
                            <td>$1.38</td>
                            <td>+2.01</td>
                            <td className="">
                                <button type="button" className="btn btn-info btn-custom">Update</button>
                                <button type="button" className="btn btn-info btn-custom">Delete</button>
                            </td>
                            </tr>
                        </tbody>
                        </table>
                    </div>
                    </section>
                   
            </div>
        );
    }
}

export default mePostPage;
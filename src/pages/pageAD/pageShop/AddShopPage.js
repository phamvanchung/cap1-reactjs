import React, { Component } from 'react';
import {Link } from "react-router-dom";
import {connect} from 'react-redux';
import {actAddShopsReq} from '../../../actions/actShop';

class AddShopPage extends Component {
    constructor(props) {
        super(props);
        this.state={
            formShop:{
                nameShop:'',
                email:'',
                password:'',
                phoneShop:'',
                avatar:'',
            }
        }
    }
    handleOnchange =  (e) => {
        this.setState({
            formShop:{
                ...this.state.formShop,
                [e.target.name]:[e.target.value]
            }
        });
    }

    handleOnchangeChooseFile = (e) => {
        this.setState({
            formShop : {
                ...this.state.formShop,
                [e.target.name]:e.target.files[0]
            }
        });
    }

    handleOnSubmit = (e) => {
        e.preventDefault();
        const {history}= this.props;
        const {nameShop,email,password,phoneShop,avatar} = this.state.formShop;
        const shop = new FormData();
        shop.append('nameShop',nameShop);
        shop.append('email', email);
        shop.append('password', password);
        shop.append('phoneShop', phoneShop);
        shop.append('avatar', avatar);
        this.props.AddShop(shop);
        history.goBack();
    }

    render() {
        const {nameShop, email, password, phoneShop}= this.state.formShop;
        return (
            <div className="mt-4">
            <h3>Shops management</h3>
            <form method="POST"  onSubmit={this.handleOnSubmit} encType="multipart/form-data" >
            <div className="form-group">
                <label>Name Shop</label>
                <input type="text" 
                className="form-control" 
                name="nameShop" 
                value={nameShop ||''}
                required
                onChange={this.handleOnchange}
                />
            </div>
            <div className="form-group">
                <label>Email</label>
                <input type="email" 
                 className="form-control" 
                 required
                 name="email"  value={email || ''}
                onChange={this.handleOnchange}
                 />
            </div>
            <div className="form-group">
                <label>Password</label>
                <input type="password" 
                required
                className="form-control" 
                name="password" value={password ||''}
                onChange={this.handleOnchange}
                />
            </div>
            <div className="form-group">
                <label>Phone Number</label>
                <input type="text" 
                className="form-control" 
                name="phoneShop" value={phoneShop|| ''}
                onChange={this.handleOnchange}
                />
            </div>
            <div className="form-group">
                <label>Avatar</label><br />
                <input type="file" className="form" 
                name="avatar" 
                onChange={this.handleOnchangeChooseFile}
                // required
                />
            </div>
            <Link to="/admin/users-list" className="btn btn-primary mr-2">
                Cancel
            </Link>
            <button type="submit" className="btn btn-primary" >Save</button>
            </form>
        </div>
        );
    }
}

const mapDispatchToProps = (dispatch, props)=>{
    return{
        AddShop:(shop)=>{
            dispatch(actAddShopsReq(shop))
        }
    }
}

export default connect(null,mapDispatchToProps) (AddShopPage);
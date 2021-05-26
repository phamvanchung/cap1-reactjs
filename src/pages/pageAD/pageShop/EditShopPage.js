import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {actGetShopByIdReq,actUpdateShopReq} from '../../../actions/actShop';


class EditShopPage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            nameShop:'',
            email:'',
            password:'',
            phoneShop:'',
            avatar:'',
        }
    }
    componentDidMount(){
        let {match}= this.props;
        if(match){
            let {shopId}= match.params;
            this.props.onEditingShop(shopId);
        }
    }
    componentWillReceiveProps(nextProps){
        if(nextProps && nextProps.itemEditing){
            let {itemEditing} = nextProps;
            this.setState({
                nameShop:itemEditing.nameShop,
                email:itemEditing.email,
                password:itemEditing.password,
                phoneShop:itemEditing.phoneShop,
                avatar:itemEditing.avatar,
            })
            } 
        }

    handleOnchange =  (e) => {
        this.setState({
            [e.target.name] : e.target.value
        })
    }
    handleOnchangeChooseFile = (e) => {
        this.setState({
            [e.target.name] : e.target.files[0]
        })
    }

    handleOnSubmit = (e) => {
        e.preventDefault();
        let { match } = this.props;
        let {history}= this.props;
        let {shopId} = match.params;
        let {nameShop,email,password,phoneShop} = this.state;
        let shop ={
            _id:shopId,
            nameShop:nameShop,
            email:email,
            password:password,
            phoneShop:phoneShop
        }
        const myPromiseShop = new Promise((myResolve, myReject) => {
            this.props.onUpdateShop(shop);
            myResolve(
              'a',
            );
            myReject(
              'a',
            );
          });
          myPromiseShop.then(() => {
            history.goBack();
          });
    }
    render() {
        const {nameShop, email, password, phoneShop}= this.state;
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
            <Link to="/admin/shops-list" className="btn btn-primary mr-2">
                Cancel
            </Link>
            <button type="submit" className="btn btn-primary" >Save</button>
            </form>
        </div>
        );
    }
}
const mapStateToProps = state =>{
    return{
        itemEditing:state.itemEditing,
    }
}

const mapDispatchToProps =(dispatch, props)=>{
    return{
        onUpdateShop: (shop)=>{
            dispatch(actUpdateShopReq(shop))
        },
        onEditingShop:(shopId)=>{
            dispatch(actGetShopByIdReq(shopId))
        }
    }
}
export default connect (mapStateToProps,mapDispatchToProps) (EditShopPage);
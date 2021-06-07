import React, { Component } from 'react';
import {connect} from 'react-redux';
import {actFetchAllShopReq,actDeleteShopsReq} from '../../../actions/actShop';
import ShopList from '../../../components/componentsAd/ShopsList/ShopList';
import ShopItem from '../../../components/componentsAd/ShopItems/ShopItem';


class AllShopPage extends Component {

    showPostsItems(shops) {
        var result = null;
        if(shops.length > 0){
            result = shops.map((shop, index)=>{
                return(
                    <ShopItem
                        key={index}
                        shop={shop}
                        index={index}
                        onDelete={this.onDelete}
                    />
                )
            })
        }
        return result;
    }
    onDelete = (shopId) => {
        this.props.onDeleteShop(shopId)
    }
    componentDidMount = () => {
        this.props.fetchAllShop()
    }
    render() {
        var {shops}=this.props;
        return (
            <div>
                 <ShopList>
                        {this.showPostsItems(shops)}
                </ShopList>
            </div>
        );
    }
}
const mapStateToProps = (state)=>({
    shops : state.shops
})
const mapDispatchToProps = (dispatch)=>{
    return{
        fetchAllShop: (shop)=>{
            dispatch(actFetchAllShopReq(shop))
        },
        onDeleteShop: (shopId)=>{
            dispatch(actDeleteShopsReq(shopId))
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps) (AllShopPage);
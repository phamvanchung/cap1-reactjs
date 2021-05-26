import * as TypesShop from "../constants/shopActionType";
import callApi from '../utils/apiCaller';

export const actFetchAllShop = (shops)=>{
    return {
        type: TypesShop.FETCH_SHOPS,
        shops
    }
}
export const actFetchAllShopReq = ()=>{
    return (dispatch)=>{
        return callApi('api/shops','GET',null,)
        .then(res=>{
            dispatch(actFetchAllShop(res.data))
        })
    }
}

export const actGetShopById = (shop)=>{
    return{
        type:TypesShop.GET_SHOPS_BY_ID,
        shop
    }
}
export const actGetShopByIdReq = (shopId) =>{
    return(dispatch)=>{
        return callApi(`api/shops/get-shopId/${shopId}`,'GET',null)
        .then(res =>{
            dispatch(actGetShopByIdReq(shopId))
        })
    }
}

export const actAddShops = (shop) =>{
    return {
        type:TypesShop.ADD_SHOPS,
        shop
    }
}
export const actAddShopsReq = (shop)=>{
    return (dispatch) =>{
        return callApi('api/shops/add-shop','POST',shop)
        .then(res =>{
            dispatch(actAddShops(res.data))
            console.log('rres:',res);
        })
    }
}

export const actDeleteShops = (shopId) =>{
    return {
        type:TypesShop.DELETE_SHOPS,
        shopId
    }
}
export const actDeleteShopsReq = (shopId)=>{
    return (dispatch) =>{
        return callApi(`api/shops/delete-shop/${shopId}`,'DELETE',null)
        .then(res =>{
            dispatch(actDeleteShops(shopId))
        })
    }
}

export const actUpdateShop = (shop) =>{
    return {
        type:TypesShop.UPDATE_SHOPS,
        shop
    }
}
export const actUpdateShopReq = (shop) =>{
    return (dispatch) =>{
        return callApi(`api/shops/update-shop/${shop._id}`,'PUT',shop)
        .then(res =>{
            dispatch(actUpdateShop(res.data))
        })
    }
}
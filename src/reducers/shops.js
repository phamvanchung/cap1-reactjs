import * as TypesShop from "../constants/shopActionType";

var initialState = [];

var findIndex = (shops, id) => {
    var result = -1;
    shops.forEach((shop, index) => {
        if(shop._id === id){
            result = index;
        }
    });
    return result;
}

const shops = (state= initialState, action) => {
    let index =-1;
    let {shop,shopId} = action;
    switch (action.type) {
        case TypesShop.FETCH_SHOPS:
            state = action.shops;
            return [...state];
        case TypesShop.DELETE_SHOPS:
            index = findIndex(state,shopId);
            state.splice(index,1)
            return [...state];
        case TypesShop.ADD_SHOPS:
            state.push(action.shop);
            return [...state];
        case TypesShop.UPDATE_SHOPS:
            index = findIndex(state,shop.shopId)
            state[index] =shop;
            return [...state]
        default: return[...state]
    }
}

export default shops;

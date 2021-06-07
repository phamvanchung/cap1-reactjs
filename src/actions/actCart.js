import * as TypesCart from '../constants/cartActionType';
import callApi from '../utils/apiCaller';

export const actAddToCart = (post) => ({
  type: TypesCart.ADD_TO_CART,
  post, // post : post
});
export const actAddToCartReq = (post) => (dispatch) =>{
    callApi('api/cart/add-to-cart','POST',post)
    .then(res =>{
        dispatch(actAddToCart(res.data))
    })
}
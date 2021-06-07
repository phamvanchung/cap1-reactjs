import * as TypesCart from '../constants/cartActionType';
import Toastify from '../utils/toastify';

// const data = JSON.parse(localStorage.getItem('CART'));
const initialState = [];

// const findPostInCart = (cart, post) => {
//   let index = -1;
//   if (cart.length > 0) {
//     for (let i = 0; i < cart.length; i++) {
//       if (cart[i].post._id === post._id) {
//         index = i;
//         break;
//       }
//     }
//   }
//   return index;
// };

const Cart = (state = initialState, action)=> {
    const { isSuccess  } = action;
    
    switch (action.type) {
        case TypesCart.ADD_TO_CART:
            if (isSuccess) {
                Toastify({ msg: 'Appointment successful', type: 'success' });
                state.push(action.post);
              }
            return [...state];
        
        default: return state;
    }
}

export default Cart;
const Cart = [];

// export default function cartReducer(state = productsInCart, action) {
//     switch (action.type) {
//         case 'ADDTOCART':
//             state.items.push(item);
//             return state;
//         case 'DELETEFROMCART':
//             return {
//                 state: state.splice(state.findIndex(product => product.id === action.productId), 1),
//             };
//         default:
//             return state;
//     }
//}
const cartReducer = (state = Cart, action) => {
    
    if (action.type === "ADD_TO_CART") {
            const productindex = state.findIndex(p => p.id === action.payload.id);
            if (productindex === -1) {
                debugger
                action.payload.qty = action.index;
                console.log(Cart)
                return [...state, action.payload]
            }
            else {
                debugger
                state[productindex].qty += action.index;
                state[productindex].price *= state[productindex].qty;
                return state;
            }
        // }


    }
    if (action.type === "DELETE_FROM_CART")
        state = state.filter(p => p.code != action.payload.code)
    console.log(Cart)
    return state
};
export default cartReducer;
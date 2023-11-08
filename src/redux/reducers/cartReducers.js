const Cart = [];
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
        state = state.filter(p => p.id !== action.payload.id)
    console.log(Cart)
    return state
};
export default cartReducer;
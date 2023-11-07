export const deleteFromCart = (product) => {

    return {
        type: "DELETE_FROM_CART",
        payload: product
    }
}

export const addToCart = (product, amount) => {
    return {
        type: "ADD_TO_CART",
        payload: product,
        index: amount
    }
}
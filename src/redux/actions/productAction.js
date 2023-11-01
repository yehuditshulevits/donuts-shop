export const changeAddQty = (id, qty) => {
    return {
        type:ADDQTY,
        payload:qty,
        productId:id
    }
}

export const  changeDecreaseQty= (id, qty) => {
    return {
        type:DECREASEQTY,
        payload:qty,
        productId:id
    }
}
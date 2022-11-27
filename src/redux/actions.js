export function addOrder(order) {
    return {
        type: 'cart/addOrder',
        payload: order
    }
}

export function increaseAmount(orderId) {
    return {
        type: 'cart/increaseAmount',
        payload: orderId
    }
}

export function decreaseAmount(orderId) {
    return {
        type: 'cart/decreaseAmount',
        payload: orderId
    }
}
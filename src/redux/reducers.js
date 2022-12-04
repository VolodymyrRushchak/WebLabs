

export function cartReducer(cart = {}, action) {
    if (action.type === 'cart/addOrder' && !Object.keys(cart).includes(action.payload.hamster.id)) {
        let newCart = {...cart};
        newCart[action.payload.hamster.id] = action.payload;
        return newCart;
    }
    else if (action.type === 'cart/increaseAmount') {
        let newCart = {...cart};
        newCart[action.payload].amount += 1;
        return newCart;
    } 
    else if (action.type === 'cart/decreaseAmount') {
        let newCart = {...cart};
        newCart[action.payload].amount -= 1;
        if (newCart[action.payload].amount <= 0)
            delete newCart[action.payload];
        return newCart;
    }
    return cart;
}
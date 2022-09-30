import *as ActionTypes from "../ActionType"

const initialState = {
    isLoading: false,
    cart: [],
    error: ''
}

export const cartReducer = (state = initialState, action) => {
    console.log(action.type, action.payload);
    // CART
    switch (action.type) {
        case ActionTypes.ADD_TO_CART:
            const itemInCart = state.cart.find((item) => item.id === action.payload.id);
            console.log(itemInCart, "cartin");
            if (itemInCart) {
                itemInCart.quntity++;
            } else {
                state.cart.push({ ...action.payload, quntity: 1 });
            }
            return {
                ...state,
                isLoading: false,
                error: ''
            }
        case ActionTypes.GET_TO_CART:
            return {
                ...state,
                isLoading: false,
                error: ''
            }
        case ActionTypes.DELETE_CART:
            return {
                ...state,
                isLoding: false,
                cart: state.cart.filter((d, i) => d.id !== action.payload),
                error: ''
            }

        // COUNTER
        case ActionTypes.INCREMENT_COUNTER:
            return {
                ...state,
                isLoading: false,
                cart: state.cart.map((c) => {
                    if (c.id === action.payload) {
                        return {
                            id: c.id,
                            quntity: c.quntity + 1
                        }
                    }
                    else {
                        return c
                    }
                })
            }

        case ActionTypes.DECREMENT_COUNTER:
            return {
                ...state,
                isLoading: false,
                cart: state.cart.map((c) => {
                    if (c.id === action.payload) {
                        return {
                            id: c.id,
                            quntity: c.quntity - 1
                        }
                    }
                    else {
                        return c
                    }
                })
            }
        default:
            return state
    }
}
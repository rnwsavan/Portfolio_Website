import *as ActionTypes from "../ActionType"

const initialState = {
    isLoading: false,
    cart: [],
    error: ''
}

export const cartReducer = (state = initialState, action) => {
    console.log(action.type, action.payload);
    switch (action.type) {
        case ActionTypes.ADD_TO_CART:
            return {
                ...state,
                isLoading: false,
                cart: state.cart.concat(action.payload),
                error: ''
            }
        case ActionTypes.GET_TO_CART:
            return {
                ...state,
                isLoading: false,
                cart: state.cart.concat(action.payload),
                error: ''
            }
        default:
            return state
    }
}
import * as ActionTypes from "../ActionType"

const initialState = {
    isLoading: false,
    product: [],
    errors: ''
}

export const productreducer = (state = initialState, action) => {
    // console.log(action.type, action.payload, state);
    switch (action.type) {
        case ActionTypes.GET_PRODUCTS:
            return {
                ...state,
                isLoading: false,
                product: action.payload,
                errors: ''
            }
        case ActionTypes.ADD_PRODUCTS:
            return {
                ...state,
                isLoading: false,
                product: state.product.concat(action.payload),
                errors: ''
            }
        case ActionTypes.UPDATE_PRODUCTS:
            return {
                ...state,
                isLoading: false,
                product: state.product.map((d) => {
                    if (d.id === action.payload.id) {
                        return action.payload
                    } else {
                        return d;
                    }
                }),
                errors: ''
            };
        case ActionTypes.DELETE_PRODUCTS:
            return {
                ...state,
                isLoading: false,
                product: state.product.filter((d,i) => d.id !== action.payload),
                errors: ''
            }

        case ActionTypes.ERROR_PRODUCTS:
            return {
                ...state,
                isLoading: false,
                product: [],
                errors: action.payload
            }
        default:
            return state
    }
}
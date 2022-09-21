import *as ActionTypes from "../ActionType"

export const addtocart = (r) => (dispatch) => {
    dispatch({ type: ActionTypes.ADD_TO_CART, payload:{id:r.id, qty:1} })
}

export const gettocart = () => (dispatch) => {
    dispatch({ type: ActionTypes.GET_TO_CART })
}

// export const emptytocart = () => (dispatch) => {
//     dispatch({ type: ActionTypes.EMPTY_TO_CART })
// }
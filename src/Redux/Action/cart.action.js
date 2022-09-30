import *as ActionTypes from "../ActionType"

// CART
export const addtocart = (r) => (dispatch) => {
    dispatch({ type: ActionTypes.ADD_TO_CART, payload:{id:r.id, quntity:1} })
}

export const gettocart = () => (dispatch) => {
    dispatch({ type: ActionTypes.GET_TO_CART })
}

export const DeletecartAction = (data) => (dispatch) => {
    dispatch({ type: ActionTypes.DELETE_CART, payload: data })
}


// COUNTER
export const incrementcounter = (id) => (dispatch) => {
    dispatch({type : ActionTypes.INCREMENT_COUNTER, payload: id})
}

export const decrementcounter = (id) => (dispatch) => {
    dispatch({type : ActionTypes.DECREMENT_COUNTER, payload: id})
}

// export const emptytocart = () => (dispatch) => {
//     dispatch({ type: ActionTypes.EMPTY_TO_CART })
// }
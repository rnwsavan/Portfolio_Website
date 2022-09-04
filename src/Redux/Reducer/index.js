import { combineReducers } from "redux";
import { alertReducer } from "./alert.reducer";
import { authReducer } from "./auth.reducer";
import { cartReducer } from "./cart.reducer";

export const rootReducer = combineReducers({
    cart : cartReducer,
    auth : authReducer,
    alert : alertReducer
})
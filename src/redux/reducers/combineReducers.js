import { combineReducers } from "redux";
import productsReducer from "./productsReducers";

const allReducers = combineReducers(
    {
        productsReducer: productsReducer,
        // cartReducer: cartReducer
    }
)
export default allReducers


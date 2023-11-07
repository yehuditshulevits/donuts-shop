import { combineReducers } from "redux";
import productsReducers from "./productsReducers";
import cartReducers from "./cartReducers";

const AllReducers = combineReducers(
    {
        productsReducers: productsReducers,
        cartReducers: cartReducers,
    }
)
export default AllReducers


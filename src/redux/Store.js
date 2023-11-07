import { createStore } from "redux";
import AllReducers from "./reducers/combineReducers";

const Store=createStore(
    AllReducers
);
Store.getState();
export default Store;

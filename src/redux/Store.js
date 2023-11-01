import { createStore } from "redux";
import allReducers from './reducers/combineReducers';
const Store = createStore(
    allReducers,
);
Store.getState();
export default Store;

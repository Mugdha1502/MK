import { combineReducers } from "@reduxjs/toolkit";
import amountReducer from "./amountReducer"
import reducer from "./amountReducer";
const reducers = combineReducers({
    amount: amountReducer
})


export default reducers;
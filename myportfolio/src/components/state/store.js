import { configureStore } from "@reduxjs/toolkit";
import Reducers from "./Reducers";




export  const store = configureStore(Reducers,{}, {})
import {createStore, combineReducers, applyMiddleware} from '@reduxjs/toolkit'

import thunkMiddleware from "redux-thunk";
import {reducer} from "./reducer";

let Reducer = combineReducers({
    reducer: reducer
})

export let store = createStore(Reducer, applyMiddleware(thunkMiddleware))





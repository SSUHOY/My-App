import { configureStore } from "@reduxjs/toolkit"
import trackReducer from "./reducers/tracks"
import thunk from "redux-thunk"



//configureStore объединяет все Reducers
export const store = configureStore({
    reducer:{
        player: trackReducer,
    },
    middleware:[thunk], 
})
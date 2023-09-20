import { configureStore } from "@reduxjs/toolkit"
import trackReducer from "./reducers/tracks"
import thunk from "redux-thunk"
import authReducer from "./reducers/authReducer"



//configureStore объединяет все Reducers
export const store = configureStore({
    reducer:{
        player: trackReducer,
        auth: authReducer,
    },
})


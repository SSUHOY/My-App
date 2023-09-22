import { configureStore } from "@reduxjs/toolkit"
import trackReducer from "./reducers/tracks"
import thunk from "redux-thunk"
import authReducer from "./reducers/authReducer"
import { playlistApi } from "../components/services/playlistApi"



//configureStore объединяет все Reducers
export const store = configureStore({
    reducer:{
        player: trackReducer,
        auth: authReducer,
        [playlistApi.reducerPath]:playlistApi.reducer,
    },
    middleware:(getDefaultMiddleWare) => 
    getDefaultMiddleWare().concat(playlistApi.middleware)
})


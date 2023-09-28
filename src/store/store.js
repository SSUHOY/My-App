import { configureStore } from "@reduxjs/toolkit"
import trackReducer from "./reducers/tracks"
import authReducer from "./reducers/authReducer"
import { playlistApi } from "../components/services/playlistApi"
import { catalogSelectionApi } from "../components/services/catalogSelectionApi"



//configureStore объединяет все Reducers
export const store = configureStore({
    reducer:{
        player: trackReducer,
        auth: authReducer,
        [playlistApi.reducerPath]:playlistApi.reducer,
        [catalogSelectionApi.reducerPath]:catalogSelectionApi.reducer,
    },
    middleware:(getDefaultMiddleWare) => [

        ...getDefaultMiddleWare(),
        
        playlistApi.middleware,
        catalogSelectionApi.middleware,
    ] 
})


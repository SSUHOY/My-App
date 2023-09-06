import { Routes, Route } from "react-router-dom"
import AuthPage from "./pages/login/Auth/AuthPage"
import { NotFound } from "./pages/notFound/404"
import { ProtectedRoute } from "./components/protected-route"
import { Playlist } from "./pages/playlists/PlayListPage_1"
import Favorites from "./pages/favorites/FavoritesTracks"
import { Main } from "./pages/main"
import { useState } from "react"
import { useAuthContext } from "./context/AuthContext"
import { Layout } from "./pages/pageLayout/Layout"


export const AppRoutes = ({}) => {
    const { user } = useAuthContext()
return (
    <Routes>
        <Route path="/login" element={<AuthPage />} />
        <Route path="/register" element={<AuthPage />} />
        <Route element={<ProtectedRoute isAllowed={Boolean(user)} />}>
        <Route path="/" element={<Layout />}>
        <Route index element={
        <Main/>}/>
        <Route path="/category/:id" element={<Playlist />}
        />
        <Route path="/favorites" element={<Favorites />}
        />
    </Route>
            <Route path="*" element={<NotFound />} /> 
            </Route> 
    </Routes>
)

}
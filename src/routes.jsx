import { Routes, Route } from "react-router-dom"
import AuthPage, { About, Login } from "./pages/login/Auth/AuthPage"
import { NotFound } from "./pages/notFound/404"
import { ProtectedRoute } from "./components/protected-route"
import { Playlist } from "./pages/playlists/PlayListPage_1"
import Favorites from "./pages/favorites/FavoritesTracks"
import { Main } from "./pages/main"
import { useState } from "react"
import { useAuthContext } from "./context/AuthContext"


export const AppRoutes = ({isAuthenticated , onLogin, onLogout, isLoading}) => {
    const { user } = useAuthContext()
return (
    <Routes>
        <Route path="/login" element={<AuthPage />} />
      <Route path="/register" element={<AuthPage />} />
<Route element={<ProtectedRoute isAllowed={Boolean(user)} />}>
         <Route path='/' element={
         <Main/>}/>
            <Route path="/category/:id" element={<Playlist />}
        />
        <Route path="/favorites" element={<Favorites />}
        />
      </Route>
<Route path="*" element = {<NotFound/>}/> 
    </Routes>
)

}
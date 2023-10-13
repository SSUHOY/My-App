import { Routes, Route } from "react-router-dom"
import AuthPage from "./pages/login/Auth/AuthPage"
import { NotFound } from "./pages/notFound/404"
import { ProtectedRoute } from "./components/protected-route"
import { Playlist } from "./pages/playlists/categoryPages"
import { Main } from "./pages/main"
import { useAuthContext } from "./context/AuthContext"
import { Layout } from "./pages/pageLayout/Layout"
import FavoriteTracks from "./pages/favorites/favoriteTracks"

export const AppRoutes = ({}) => {
    const { user } = useAuthContext()

return (
    <Routes>
        <Route path="/login" element={<AuthPage />} />
        <Route path="/register" element={<AuthPage />} />
        <Route element={<ProtectedRoute isAllowed={Boolean(user)} />}>
        <Route path="/" element={<Layout/>}>
        <Route index element={
        <Main />}/>
        <Route path="/category/:id" element={<Playlist />}
        />
        <Route path="/favorites" element={<FavoriteTracks />} 
        />
        </Route>
    </Route>
            <Route path="*" element={<NotFound />} /> 
    </Routes>
)

}
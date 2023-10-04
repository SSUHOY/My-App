import { Routes, Route } from "react-router-dom"
import AuthPage from "./pages/login/Auth/AuthPage"
import { NotFound } from "./pages/notFound/404"
import { ProtectedRoute } from "./components/protected-route"
import { Playlist } from "./pages/playlists/categoryPages"
import { Main } from "./pages/main"
import { useAuthContext } from "./context/AuthContext"
import { Layout } from "./pages/pageLayout/Layout"
import FavoriteTracks from "./pages/favorites/favoriteTracks"
import { useState } from "react"
import { selectCurrentTrack } from "./store/selectors/tracks"
import { useSelector } from "react-redux"

export const AppRoutes = ({}) => {
    const { user } = useAuthContext()
    const [isFavorite, setIsFavorite] = useState(false)
    const currentTrack = useSelector(selectCurrentTrack);

return (
<Routes>
  <Route path="/login" element={<AuthPage />} />
  <Route path="/register" element={<AuthPage />} />
  <Route element={<ProtectedRoute isAllowed={Boolean(user)} />}>
    <Route path="/" element={<Layout isFavorite={isFavorite} setIsFavorite={setIsFavorite} currentTrack={currentTrack}/>}>
      <Route index element={<Main />} />
      <Route path="/category/:section" element={<Playlist isFavorite={isFavorite} setIsFavorite={setIsFavorite} currentTrack={currentTrack} />} />
      <Route path="/favorites" element={<FavoriteTracks />} />

      <Route path="*" element={<NotFound />} />
    </Route>
  </Route>
</Routes>
)

}
import { Routes, Route } from "react-router-dom"
import { About, Login } from "./pages/login/loginPage"
import { NotFound } from "./pages/notFound/404"
import { ProtectedRoute } from "./components/protected-route"
import { Playlist } from "./pages/playlists/PlayListPage_1"
import Favorites from "./pages/favorites/FavoritesTracks"
import { Register } from "./pages/register/registerPage"
import { Main } from "./pages/main"
import { useState } from "react"


export const AppRoutes = ({isAuthenticated , onLogin, onLogout, isLoading}) => {

return (
    <Routes>
      <Route
        path="/login"
        element={
          <Login
            isAuthenticated={isAuthenticated}
            onLogin={onLogin}
            onLogout={onLogout}
          />
        }
      />
      <Route path='/register' element={<Register />}/>
<Route element={<ProtectedRoute isAllowed={Boolean(isAuthenticated)} />}>
         <Route path='/' element={
         <Main/>}/>
        <Route
          path="/"
          element={
            <Login
            isLoading={isLoading}
            isAuthenticated={isAuthenticated}
            onLogin={onLogin}
            onLogout={onLogout}
           
            />
          }
        />
        <Route path="/category/:id" element={<Playlist />}
        />
        <Route path="/favorites" element={<Favorites />}
        />
      </Route>
<Route path="*" element = {<NotFound/>}/> 
    </Routes>
)

}
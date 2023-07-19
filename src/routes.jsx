import { Routes, Route } from "react-router-dom"
import { Main } from "./pages/main"
import { About } from "./pages/about"
import { NotFound } from "./pages/notFound/404"
import { Profile } from "./components/profile"
import { Account } from "./components/account"
import { ProtectedRoute } from "./components/protected-route"

export const AppRoutes = ({user}) => {
return (
    <Routes>
<Route path="/" element = {<Main/>}/>
<Route path="/about" element = {<About/>}/>
<Route path="/profile/:id" element={<Profile />} />
<Route
        path="/account"
        element={
          <ProtectedRoute isAllowed={Boolean(user)}>
            <Account />
          </ProtectedRoute>
        }
      />
<Route path="*" element = {<NotFound/>}/>
    </Routes>
)

}
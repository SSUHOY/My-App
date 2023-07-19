import { Routes, Route } from "react-router-dom"
import { Main } from "./pages/main"
import { About } from "./pages/about"
import { NotFound } from "./pages/notFound/404"

export const AppRoutes = ({user}) => {
return (
    <Routes>
<Route path="/" element = {<Main/>}/>
<Route path="/about" element = {<About/>}/>
<Route path="*" element = {<NotFound/>}/>
    </Routes>
)

}
import GlobalStyling from "../../components/styles/global/global"
import { Outlet } from "react-router-dom"
import Footer from "../../components/mainWrappers/footer"
import { useState } from "react"
import BarContentForm from "../../components/basicPage/barContentForm"
import { Container } from "../../components/mainWrappers/container"



const Layout = ({isFavorite , setIsFavorite, currentTrack}) => {

    const [isPlaying, setIsPlaying] = useState(true);
   
    return (
      <>
      <Container>
         <GlobalStyling />
         <Outlet />
         {currentTrack && (
            <BarContentForm
            currentTrack={currentTrack}
            isPlaying={isPlaying}
            setIsPlaying={setIsPlaying}
            isFavorite={isFavorite}
            setIsFavorite={setIsFavorite}
            />
         )}
         <Footer />
      </Container>
      
      </>
    )
}

export {Layout}


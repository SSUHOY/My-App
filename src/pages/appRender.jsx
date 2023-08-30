import { useState } from "react";
import BarContentForm from "../components/basicPage/barContentForm";
import { Container } from "../components/mainWrappers/container";
import Footer from "../components/mainWrappers/footer";
import Main from "../components/mainWrappers/main";
import GlobalStyling from "../components/styles/global/global";

function AppRender({onLogout}) {

  const [currentTrack, setCurrentTrack] = useState(null)
  const [isPlaying, setIsPlaying] = useState(false);
  console.log(currentTrack);

  return (
    <Container>
    <GlobalStyling/>
    <Main onLogout={onLogout} currentTrack={currentTrack} setCurrentTrack={setCurrentTrack}  isPlaying={isPlaying} setIsPlaying={setIsPlaying} />
      {currentTrack ? <BarContentForm onLogout={onLogout} currentTrack={currentTrack} isPlaying={isPlaying} setIsPlaying={setIsPlaying}/>:null}
    <Footer/>
    </Container>
  )
   
  }
  
  export default AppRender;
  
import { useState } from "react";
import BarContentForm from "../components/basicPage/barContentForm";
import { Container } from "../components/mainWrappers/container";
import Footer from "../components/mainWrappers/footer";
import Main from "../components/mainWrappers/main";
import GlobalStyling from "../components/styles/global/global";
import { selectCurrentTrack } from "../store/selectors/tracks";
import { useSelector } from "react-redux";

function AppRender({onLogout}) {
// передали трек в стор, сначала трек был в стейтах
  const currentTrack = useSelector(selectCurrentTrack);
  const [isPlaying, setIsPlaying] = useState(true);

  return (
    <Container>
      <Main
        onLogout={onLogout}
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying} />
      {currentTrack &&
        <BarContentForm
        onLogout={onLogout}
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying} />
       }
    </Container>
  )
   
  }
  
  export default AppRender;
  
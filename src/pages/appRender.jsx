import Main from "../components/mainWrappers/main";

function AppRender({isPlaying, currentTrack, setIsPlaying}) {

  
  return (
      <Main
        currentTrack={currentTrack}
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying} />
  )
   
  }
  
  export default AppRender;
  
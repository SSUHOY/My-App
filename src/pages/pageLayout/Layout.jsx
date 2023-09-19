import GlobalStyling from "../../components/styles/global/global"
import { Outlet } from "react-router-dom"
import Footer from "../../components/mainWrappers/footer"
import { ThemeSwitcher } from "../../utils/theme-switcher/switchButton"
import { ThemeContext } from "styled-components"
import { useRef, useState } from "react"
import { themes } from "../../utils/theme-switcher/theme"
import BarContentForm from "../../components/basicPage/barContentForm"
import { selectCurrentTrack } from "../../store/selectors/tracks"
import { useSelector } from "react-redux"
import { Container } from "../../components/mainWrappers/container"



const Layout = () => {

    const [isPlaying, setIsPlaying] = useState(true);
    const currentTrack = useSelector(selectCurrentTrack);
    const audioRef = useRef(null);


    return (
    <>
       <Container>
       <GlobalStyling />
       <Outlet/>
    {currentTrack &&
        <BarContentForm
        audioRef={audioRef}
        currentTrack={currentTrack}
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying} />
       }
    <Footer/>
       </Container>
  
    </>
    )
}

export {Layout}


// доработать изменение темы 
// const [currentTheme, setCurrentTheme] = useState(themes.light);

// const toggleTheme = () => {
//     if(currentTheme === themes.dark) {
//         setCurrentTheme(themes.light);
//         return;
//     }
//     setCurrentTheme(themes.dark);
// }

//  <ThemeContext.Provider value={{theme:currentTheme, toggleTheme}}>
//     </ThemeContext.Provider>
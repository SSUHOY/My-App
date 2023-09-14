import GlobalStyling from "../../components/styles/global/global"
import { Outlet } from "react-router-dom"
import Footer from "../../components/mainWrappers/footer"
import { ThemeSwitcher } from "../../utils/theme-switcher/switchButton"
import { ThemeContext } from "styled-components"
import { useState } from "react"
import { themes } from "../../utils/theme-switcher/theme"



const Layout = () => {

    const [currentTheme, setCurrentTheme] = useState(themes.light);

    const toggleTheme = () => {
        if(currentTheme === themes.dark) {
            setCurrentTheme(themes.light);
            return;
        }
        setCurrentTheme(themes.dark);
    }
    return (
    <>
    <ThemeContext.Provider value={{theme:currentTheme, toggleTheme}}>
    <GlobalStyling />
    <Outlet/>
    <Footer/>
    </ThemeContext.Provider>
    
    </>
    )
}

export {Layout}
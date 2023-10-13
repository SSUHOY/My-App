import React, { useContext } from "react"

export const themes ={
    light:{
        color:"#F6F5F3",
        background: "#fff"
    },
    dark: {
        color: "#FFFFFF",
        background: "#313131"
    },
}

export const ThemeContext = React.createContext({
    theme: themes.dark,
    toggleTheme: () => {},
})
   
export const useThemeContext = () =>{
    const theme = useContext(ThemeContext);
    
    if(!theme) return theme.dark;

    return theme;
}

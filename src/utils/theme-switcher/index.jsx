import { useState } from "react"
import { themes } from "./theme"
import { ThemeContext } from "styled-components";
import { ThemeSwitcher } from "./switchButton";

export const DynamicContext2App = () => {
    const [currentTheme, setCurrentTheme] = useState(themes.dark);

    const toggleTheme = () => {
        if(currentTheme === themes.dark) {
            setCurrentTheme(themes.light);
            return;
        }
        setCurrentTheme(themes.light);
    }
    return (
        <ThemeContext.Provider value={{theme:currentTheme, toggleTheme}}>
            <ThemeSwitcher/>
        </ThemeContext.Provider>
    )
}
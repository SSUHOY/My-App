import { LightThemeSwitcher } from "../../components/basicPage/icons";
import { useThemeContext } from "./theme"

export const ThemeSwitcher = () =>{
    const {toggleTheme} = useThemeContext();
    return <button onClick={{toggleTheme}}><LightThemeSwitcher/></button>
}
import AppRender from "../appRender";

export const Main = ({handleLogin, handleLogout}) => {
    return (
        <AppRender
        onLogin={handleLogin}
        onLogout={handleLogout}
       />
    )
};
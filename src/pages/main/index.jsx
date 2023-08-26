import AppRender from "../appRender";

export const Main = ({ isLoading, isAuthenticated, handleLogin, handleLogout}) => {
    return (
        <AppRender
        isLoading={isLoading}
        isAuthenticated={isAuthenticated}
        onLogin={handleLogin}
        onLogout={handleLogout}
       />
    )
};
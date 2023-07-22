import AppRender from "../appRender";

export const Main = () => {
    return (
        <AppRender 
         isLoading={isLoading}
        isAuthenticated={isAuthenticated}
        onLogin={handleLogin}
        onLogout={handleLogout}/>
    )
};
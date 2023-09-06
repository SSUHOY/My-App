import AppRender from "../appRender";

export const Main = ( isLoading, isAuthenticated, handleLogin, handleLogout, currentTrack, setCurrentTrack) => {
    return (
        <AppRender
        isLoading={isLoading}
        isAuthenticated={isAuthenticated}
        onLogin={handleLogin}
        onLogout={handleLogout}
        currentTrack={currentTrack} 
         setCurrentTrack={setCurrentTrack}
       />
    )
};
import { useState } from 'react';
import './App.css';
import { AppRoutes } from './routes';

function App() {

  const [isLoading] = useState(true)

  const getCookie = (name) => {
    const value = `; ${document.cookie}`
    const parts = value.split(`; ${name}=`)

    if (parts.length === 2) {
      return true
    } else {
      return false
    }
  }

  const [isAuthenticated, setIsAuthenticated] = useState(getCookie('token'))

  const handleLogin = () => {
    document.cookie =
      'token=password; expires=Thu, 01 Jan 2024 00:00:00 UTC; path=/'
    setIsAuthenticated(true)
  }

  const handleLogout = () => {
    document.cookie = 'token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/'
    setIsAuthenticated(false)
  }

  return (  
<>
    <AppRoutes
         isLoading={isLoading}
         isAuthenticated={isAuthenticated}
         onLogin={handleLogin}
         onLogout={handleLogout}
    />
</>


  )
}

export default App;

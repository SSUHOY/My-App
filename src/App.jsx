import { useState } from 'react';
import './App.css';
import { NavBar } from './components/nav-bar/index';
import AppRender from './pages/appRender';
import { AppRoutes } from './routes';

function App() {

  const [user, setUser] = useState(null);

  const handleLogin = () => setUser({ login: "taradam" });

  const handleLogout = () => setUser(null);


  return (  
    <AppRoutes user = {user}>
    <NavBar user={user}
          onAuthButtonClick={user ? handleLogout : handleLogin}/>
   <AppRender/>
    </AppRoutes>
  )
}

export default App;

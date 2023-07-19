import './App.css';
import { NavBar } from './components/nav-bar/index';
import AppRender from './pages/appRender';
import { AppRoutes } from './routes';

function App() {
  return (
    <AppRoutes>
   <AppRender/>
   <NavBar/>
    </AppRoutes>
  )
}

export default App;

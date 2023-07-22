import BarContentForm from "../components/basicPage/barContentForm";
import { Container } from "../components/mainWrappers/container";
import Footer from "../components/mainWrappers/footer";
import Main from "../components/mainWrappers/main";
import GlobalStyling from "../components/styles/global/global";

function AppRender() {


  return (
    <Container>
    <GlobalStyling/>
    <Main onLogout={onLogout}/>
    <BarContentForm onLogout={onLogout}/>
    <Footer/>
    </Container>
  )
   
  }
  
  export default AppRender;
  
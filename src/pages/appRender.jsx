import BarContentForm from "../components/basicPage/barContentForm";
import { Container } from "../components/mainWrappers/container";
import Footer from "../components/mainWrappers/footer";
import Main from "../components/mainWrappers/main";

function AppRender() {
  return (
    <Container>
<Main/>
<BarContentForm/>
<Footer/>
    </Container>
  )
   
  }
  
  export default AppRender;
  
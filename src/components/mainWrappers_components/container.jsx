import BarContentForm from "../basicPage_components/barContentForm";
import Main from "./main";


export function Container() {
  return (
    <div className="container">
   <Main/>
  <div className="bar">
    <BarContentForm />
  </div>
  <footer className="footer"></footer>
</div>
  )
}
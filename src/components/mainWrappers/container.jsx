import BarContentForm from "../basicPage/barContentForm";
import Main from "./main";


export function Container({children}) {
  return (
    <div className="wrapper">
       <div className="container">{children}</div>
    </div>
  );
}

{/* <div className="container">
   <Main/>
  <div className="bar">
    <BarContentForm />
  </div>
  <footer className="footer"></footer>
</div>
  ) */}
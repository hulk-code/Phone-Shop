import { Outlet } from "react-router-dom";
import Navber from "../SharedPage/Navber";
import Footer from "../SharedPage/Footer";




const Root = () => {
    return (
        <div> 
            <Navber></Navber> 
          <Outlet></Outlet>
          <Footer></Footer>  
        </div>
    );
};

export default Root;
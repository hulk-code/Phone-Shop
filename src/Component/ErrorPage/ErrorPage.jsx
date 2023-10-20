import { Link } from "react-router-dom";
import img from "../../assets/404-page.jpg"

const ErrorPage = () => {
    return (
        <div>
         <div className="text-center">
         <Link to='/'><button className="btn btn-warning bg-orange-600 text-white">Back to home</button>  </Link>
         </div>
         <img className="w-screen" src={img} alt="" /> 
        </div>
    );
};

export default ErrorPage;




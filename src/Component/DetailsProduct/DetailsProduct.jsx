import { useParams } from "react-router-dom";
import Footer from "../SharedPage/Footer";


const DetailsProduct = () => {
    const{details}=useParams()
    console.log(details)
    return (
        <div>
            <p>{details}</p>
            <Footer></Footer>
        </div>
    );
};

export default DetailsProduct;
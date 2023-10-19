import { useParams } from "react-router-dom";


const DetailsProduct = () => {
    const{details}=useParams()
    console.log(details)
    return (
        <div>
            <p>{details}</p>
        </div>
    );
};

export default DetailsProduct;
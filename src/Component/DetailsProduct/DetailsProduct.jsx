import  { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Swal from "sweetalert2";

const DetailsProduct = () => {
    const { productId } = useParams();
    const [product, setProduct] = useState(null);
    const [control, setControl]= useState(false);

    useEffect(() => {
        // Fetch product details based on the productId
        fetch(`http://localhost:5000/mobileDetails/${productId}`)
            .then((response) => response.json())
            .then((data) => {
                setProduct(data);
                console.log(data);
                setControl(control)
            });
    }, [productId,control]);

    if (!product) {
        return <div>Loading...</div>;
    }

const handleAddToCart = (data) =>{
    console.log(data);
    fetch('http://localhost:5000/addToCart',{
        method: "POST",
        headers: {
            "content-type": "application/json"
        },
        body:JSON.stringify(data)
    })
    .then(res => res.json())
    .then(data => {
        console.log("posted data", data);
        if(data.insertedId){
            Swal.fire({
                icon:'success',
                title: 'cart added successfully'
            })
        }
    })
}

    return (
        <div className="">
            
           
            <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <img src={product.Image} className="max-w-sm rounded-lg shadow-2xl" />
    <div>
      <h1 className="text-3xl font-bold">Product Name:{product.Name}</h1>
      <p className="py-6">Price: {product.Price}</p>
      <p className="py-6">Rating: {product.Rating}</p>
      <p className="py-6">Details: {product.Details}</p>
      
      <button onClick={()=>handleAddToCart(product)} className="btn btn-primary">Add to Cart</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default DetailsProduct;

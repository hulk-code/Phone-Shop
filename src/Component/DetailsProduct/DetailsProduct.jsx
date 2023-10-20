import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
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
            <h1 className="h-2 text-3xl text-center"> Product Name:{product.BrandNAme
            } </h1>
            <div>
                <div className=" mx-auto">
                    <img src={product.Image} alt={product.Name} />
                </div>
                <p>{product.BrandNAme}</p>
                <p>{product.Type}</p>
                <p>Price: {product.Price}</p>
                <p>Rating: {product.Rating}</p>
                <p>Details: {product.Details}</p>
            <button onClick={()=>handleAddToCart(product)} className="btn btn-primary">Add to Cart</button>
                {/* Add other product details here */}
            </div>
        </div>
    );
};

export default DetailsProduct;

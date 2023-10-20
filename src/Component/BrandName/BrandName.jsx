
import { useEffect, useState } from "react";
import { Link} from "react-router-dom"; // Import Link from react-router-dom

const BrandName = () => {
  const [datas , setdatas]=useState([])
  useEffect(() =>{
  fetch('http://localhost:5000/brandName')
  .then(res =>res.json())
  .then(data =>{
    console.log(data)
    setdatas(data)
  })
  },[])
  
    
  return (
    <div> 
      <p className="font-bold text-5xl text-center mt-10"  >Select Your Brand</p>
      <div className="grid grid-cols-3">
      {datas?.map(data => (
        <Link key={data._id} to={`/product/${data.category}`}> {/* Use Link to create a clickable card */}
          <div className="card w-96 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
              <img src={data.Image} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">{data.name}</h2>
             
              
            </div>
          </div>
        </Link>
      ))}
    </div>
    </div>
  );
};

export default BrandName;

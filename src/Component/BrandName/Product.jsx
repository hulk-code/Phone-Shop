import { Link, useLoaderData } from "react-router-dom";
import Footer from "../SharedPage/Footer";
import { useState } from "react";


const Product = () => {
 
  const produts = useLoaderData()
  console.log(produts)
const [message, setMessage]= useState('')
if(!produts){
  setMessage("Sorry We have no available items now");
}

  return (

    <div className="mb-10">
     <div>
     <div className="carousel w-full h-[450px] lg:mb-16">
  <div id="slide1" className="carousel-item relative w-full">
    <img src="https://i.ibb.co/YD3fv88/boat.png" className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide4" className="btn btn-circle">❮</a> 
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide2" className="carousel-item relative w-full">
    <img src="https://i.ibb.co/wpSgb61/apple.jpg" className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide1" className="btn btn-circle">❮</a> 
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide3" className="carousel-item relative w-full">
    <img src="https://i.ibb.co/8PLJ1MZ/sumsmg.jpg" className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide2" className="btn btn-circle">❮</a> 
      <a href="#slide4" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide4" className="carousel-item relative w-full">
    <img src="https://i.ibb.co/Z2250zW/iphone-14.png" className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide3" className="btn btn-circle">❮</a> 
      <a href="#slide1" className="btn btn-circle">❯</a>
    </div>
  </div>
</div>
     </div >
     <h3>{message}</h3>
     <div className="w-3/4 mx-auto grid lg:grid-cols-2 grid-cols-1 ">
     {
        produts[1]? produts.map(card => <div key={card.Name}>
          <div className="card w-96 bg-base-100 shadow-xl">
            <figure><img className="h-[200px]" src=
              {card.Image} /></figure>
            <div className="card-body">
              <h1>{card.BrandName}</h1>
              <h2 className="card-title">
               {card.Name}
                <div className="badge badge-secondary">NEW</div>
              </h2>
              <p>{card.Type}</p>
              <div className="flex justify-between">
              <h1>Price:{card.Price}</h1>
              <h1>Rating:{card.Rating}</h1>
              </div>
              <div className="card-actions justify-end">
                <Link to={`/detailsproduct/${card._id}`}><button className="btn btn-primary">details</button></Link>
               <Link to={`/update/${card._id}`}> <button  className="btn btn-primary">Update
               
                </button></Link>
              </div>
            </div>
          </div>
        </div>) : <> <h1  className="text-3xl font-bold text-center">Sorry We have no available items now</h1></> 
      }

     </div>
    </div>
  );
};

export default Product;
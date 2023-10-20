import { Link, useLoaderData } from "react-router-dom";
import Footer from "../SharedPage/Footer";


const Product = () => {
 
  const produts = useLoaderData()
  console.log(produts)

  const handleUpdate = (produts) =>{
    fetch(`http://localhost:5000/mobilebrand/${products._id}` ,{
      method:"PUT",
      headers:{
          'content-type':"application/json"
      },
      body:JSON.stringify(produts)
  })

  .then(res =>res.json())
  .then(data =>{
      console.log(data)
  })
  }
  

  return (

    <div className="">
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
     <div className="w-3/4 mx-auto grid lg:grid-cols-2 grid-cols-1 ">
     {
        produts?.map(card => <div key={card.Name}>
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
                {/* <Link  key={card._id} to={`/update/${card._id}`} {id=card._id} ><button className="btn btn-primary">Update</button></Link> */}
               <Link to={`/update/${card._id}`}> <button onClick={()=>handleUpdate()} className="btn btn-primary">Update
               {/* <Update 
                key={card._id}
                handleUpdate ={handleUpdate}
                card={card}
                ></Update> */}
                </button></Link>
              </div>
            </div>
          </div>
        </div>)
      }

     </div>
      
      <Footer></Footer>
    </div>
  );
};

export default Product;
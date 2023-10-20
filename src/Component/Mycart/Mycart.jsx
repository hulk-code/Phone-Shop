import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";


const Mycart = () => {
    const [addCarts , setAddCarts]=useState([])
    const [control, setControl]= useState(false);
    useEffect(() =>{
    fetch('http://localhost:5000/addToCart')
    .then(res =>res.json())
    .then(data =>{
      console.log(data)
      setAddCarts(data)
    })
    },[])

    const handleDelete = (id)=>{
       
            Swal.fire({
              title: 'Are you sure?',
              text: "You won't be able to revert this row!",
              icon: 'warning',
              showCancelButton: true,
              confirmButtonColor: '#3085d6',
              cancelButtonColor: '#d33',
              confirmButtonText: 'Yes, delete it!'
            }).then((result) => {
              if (result.isConfirmed) {
                fetch(`http://localhost:5000/addToCart/${id}`,{
                  method: "DELETE",
                })
                .then(res => res.json())
                .then(data =>{
                  if(data.deletedCount>0){
                    setControl(!control); 
                    window.location.reload();
                Swal.fire(
                  'Deleted!',
                  'This card has been deleted.',
                  'success'
                )
                  }
                })
                
              }
            })
            
        
          
        }
    return (
        <div className="mb-10">
         <div className="grid grid-cols-1 lg:grid-cols-3">
      {addCarts?.map(data => (
        <Link key={data._id}> {/* Use Link to create a clickable card */}
          <div className="card w-96 bg-base-200 shadow-xl">
            <figure className="px-10 pt-10">
              <img src={data.Image} alt="Shoes" className="rounded-xl w-[350px] h-[200px]" />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">{data.Name}</h2>
              <h2 className="card-title">{data.BrandNAme}</h2>
              <h2 className="card-title">{data.Price}</h2>
              <h2 className="card-title">{data.Types}</h2>
             
              <button onClick={()=>handleDelete(data._id)} className="btn btn-primary">Remove</button>
            </div>
          </div>
        </Link>
      ))}
    </div>   
        </div>
    );
};

export default Mycart;
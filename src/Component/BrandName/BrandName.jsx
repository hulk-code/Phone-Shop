
import { Link, useLoaderData } from "react-router-dom"; // Import Link from react-router-dom

const BrandName = () => {
  const datas = useLoaderData();
  console.log(datas)
    
  return (
    <div> 
      <p className="font-bold text-5xl text-center mt-10"  >Select Your Brand</p>
      <div className="grid grid-cols-3">
      {datas.map(data => (
        <Link key={data._id} to={`/product/${data._id}`}> {/* Use Link to create a clickable card */}
          <div className="card w-96 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
              <img src={data.Photo} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">{data.BrandName}</h2>
              <p>If a dog chews shoes whose shoes does he choose?</p>
              
            </div>
          </div>
        </Link>
      ))}
    </div>
    </div>
  );
};

export default BrandName;

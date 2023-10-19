import { Link, useLoaderData, useParams } from "react-router-dom";


const Product = () => {
  const produts = useLoaderData()

  const { id } = useParams()
  console.log(id, produts)
  const produtId = produts.find(product => product._id == id)
  console.log(produtId)
  const { category } = produtId;

  console.log(category)

  return (

    <div>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, earum!
        {category.length}
      </p>
      {
        category.map(card => <div key={card.Name}>
          <div className="card w-96 bg-base-100 shadow-xl">
            <figure><img src=
              {card.Image} /></figure>
            <div className="card-body">
              <h2 className="card-title">
                Shoes!
                <div className="badge badge-secondary">NEW</div>
              </h2>
              <p>If a dog chews shoes whose shoes does he choose?</p>
              <div className="card-actions justify-end">
                <Link to={`/detailsproduct/${card.Details}`}><button className="btn btn-primary">details</button></Link>
                <Link  key={card.BrandName}><button className="btn btn-primary">Update</button></Link>
                
              </div>
            </div>
          </div>
        </div>)
      }

      
    </div>
  );
};

export default Product;
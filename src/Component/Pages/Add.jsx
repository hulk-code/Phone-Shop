
import Swal from "sweetalert2";


// Add button
const Add = () => {
    const handleSubmite = e => {
        e.preventDefault()
        console.log(e)
        const form = e.target;
        console.log(form)
        const Name = form.name.value;
        const BrandName = form.brandname.value;
        const Type = form.Producttype.value;
        const Image = form.Photo.value;
        const  Details= form.Description.value;
        const Price = form.price.value;
        const Rating = form.rating.value;
        const category=form.category.value;
        const FormData = { Name, BrandName, Type, Image, Details, Price, Rating,category }
        console.log(FormData)
        fetch('https://phone-shop-server-9jkzunhkt-sumiyaakhi.vercel.app/mobilebrand' ,{
            method:"POST",
            headers:{
                'content-type':"application/json"
            },
            body:JSON.stringify(FormData)
        })
    
        .then(res =>res.json())
        .then(data =>{
            console.log(data)
            Swal.fire({
                icon:'success',
                title:'Card added successful'
            });
            form.reset();
            
        })
    }
    return (
        <div className="mb-12">
            <h1 className="text-3xl font-serif font-semibold text-center my-5">Add product from here</h1>
            <div className="w-1/2 mx-auto " >
            <form onSubmit={handleSubmite}>
                <div className="lg:flex gap-10 ">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <label className="input-group">

                            <input type="text" name="name" placeholder="Enter Name" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Brand Name</span>
                        </label>
                        <label className="input-group">

                            <input type="text" name="brandname" placeholder="Enter Name" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                <div className="lg:flex gap-10 ">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Product_type</span>
                        </label>
                        <label className="input-group">

                            <input type="text" name="Producttype" placeholder="Product_type" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Photo</span>
                        </label>
                        <label className="input-group">

                            <input type="text" name="Photo" placeholder="Photo URL" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                <div className="lg:flex gap-10 ">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Price</span>
                        </label>
                        <label className="input-group">

                            <input type="text" name="price" placeholder="Price" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Description</span>
                        </label>
                        <label className="input-group">

                            <input type="text" name="Description" placeholder="Description" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>


               <div className="lg:flex gap-10 mb-4">
               <div className="form-control md:w-1/2">
                    <label className="label">
                        <span className="label-text">Category</span>
                    </label>
                    <label className="input-group">

                        <input type="text" name="category" placeholder="category" className="input input-bordered w-full" />
                    </label>
                </div>
               <div className="form-control md:w-1/2">
                    <label className="label">
                        <span className="label-text">Rating</span>
                    </label>
                    <label className="input-group">

                        <input type="text" name="rating" placeholder="rating" className="input input-bordered w-full" />
                    </label>
                </div>
               </div >
                <div className="text-center"><input type="submit" className="bg-slate-900 text-white p-4 rounded hover:bg-slate-500" value="Add Product" /></div>
            </form>
           
        </div>
       
        </div>
    );
};

export default Add;
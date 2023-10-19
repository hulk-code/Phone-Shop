
// Image
// Name
// Brand Name
// Type (If you choose the Technology and Electronics category ,then the types of products will be phone, computer, headphone, etc)
// Price
// Short description
// Rating
// Add button
const Add = () => {
    const handleSubmite = e => {
        e.preventDefault()
        console.log(e)
        const form = e.target;
        console.log(form)
        const name = form.name.value;
        const brandNAme = form.brandname.value;
        const productTypes = form.Producttype.value;
        const Photo = form.Photo.value;
        const description = form.Description.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const FormData = { name, brandNAme, productTypes, Photo, description, price, rating }
        console.log(FormData)
        fetch('http://localhost:5000/mobilebrand' ,{
            method:"POST",
            headers:{
                'content-type':"application/json"
            },
            body:JSON.stringify(FormData)
        })
    
        .then(res =>res.json())
        .then(data =>{
            console.log(data)
        })
    }
    return (
        <div className="w-1/2 mx-auto " >
            <form onSubmit={handleSubmite}>
                <div className="flex gap-10 ">
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
                <div className="flex gap-10 ">
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
                <div className="flex gap-10 ">
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
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Rating</span>
                    </label>
                    <label className="input-group">

                        <input type="text" name="rating" placeholder="rating" className="input input-bordered" />
                    </label>
                </div>
                <input type="submit" className="bg-slate-900 text-white p-4 w-full" value="Add Product" />
            </form>
        </div>
    );
};

export default Add;
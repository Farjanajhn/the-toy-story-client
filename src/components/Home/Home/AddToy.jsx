import { useContext } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../../Provider/AuthProvider";


const AddToy = () => {
  const { user } = useContext(AuthContext);
  console.log(user)
  const handleAddToy = (event) => {

    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const price = form.price.value;
    const description = form.description.value;
    const rating = form.rating.value;
    const photo = form.photo.value;
    const email = user?.email;
    const toyName = form.toyName.value;
    const category = form.category.value;
    const quantity = form.quantity.value;
    const newToy = { name, toyName, price, quantity, category, description, rating, photo, email };

    console.log(newToy)
    fetch("https://toy-story-server-one.vercel.app/addProduct", {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body:JSON.stringify(newToy)
    })
      .then(res => res.json())
      .then(result => {
        console.log(result);
        if (result.acknowledged == true) {
          Swal.fire('Added a new item!')
          form.reset();
        }
      })
    
    
  }
  return (
    <div>
          <h1 className="text-center my-4 font-bold text-5xl"> Add a toy</h1>
    <div className="w-3/4 mx-auto my-8  bg-indigo-200 px-8 rounded-xl">
       
      <form className="py-8 w-3/4 mx-auto" onSubmit={handleAddToy}>
      <div className="form-control">
  <label className="label">
    <span className="label-text">Product Name</span>
  </label>
 
    <input type="text" name="toyName" placeholder="toy name" required className="input input-bordered" />
  <label className="label">
    <span className="label-text">Image</span>
  </label>
 
    <input type="text" placeholder="photoUrl" required name="photo" className="input input-bordered" />
  <label className="label">
    <span className="label-text">Seller name</span>
  </label>
 
    <input type="text" placeholder="sellerName" value={user?.displayName} readOnly name="name" className="input input-bordered" />
  <label className="label">
    <span className="label-text">Seller Email</span>
  </label>
 
    <input type="text" value={user?.email} readOnly className="input input-bordered" />
  <label className="label">
    <span className="label-text">Sub-Category</span>
  </label>
 
    <input type="text" placeholder="category"  required name="category" className="input input-bordered" />
  <label className="label">
    <span className="label-text">Price</span>
  </label>
 
    <input type="number" placeholder="price" className="input input-bordered"  required name="price"  />
  <label className="label">
    <span className="label-text">Rating</span>
  </label>
 
    <input type="text" name="rating" placeholder="rating" className="input required input-bordered" />
  <label className="label">
    <span className="label-text">Available Quantity</span>
  </label>
 
    <input type="text" name="quantity"placeholder="quantity" className="input required input-bordered" />
  <label className="label">
    <span className="label-text">Detail description</span>
  </label>
 
          <input type="text" placeholder="description" className="input required input-bordered"name="description" />
        
        </div>
        <button className="btn btn-block my-4 bg-indigo-800">Add a new one</button>
      </form>
    </div>
</div>
  );
};

export default AddToy;
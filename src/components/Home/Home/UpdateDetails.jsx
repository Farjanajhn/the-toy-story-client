import { useContext } from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";




const UpdateDetails = () => {
  const {user}=useContext(AuthContext)

    const [detail, setDetail] = useState([]);
    const { id } = useParams();
  /*   console.log(id); */
    useEffect(() => {
      fetch('http://localhost:4000/products')
        .then(res => res.json())
        .then(data => {
          const foundDetail = data.find(d=>d._id == id);
          setDetail(foundDetail);
      })
    })
  const handleUpdate = (event) => {
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
    fetch(`http://localhost:4000/updateProducts/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body:JSON.stringify(newToy)
    })
      .then(res => res.json())
      .then(result => {
      console.log(result)
    })
   }
  return (
    <div>
      <h1>Update a toy:{detail.toyName}</h1>
      <div className="w-3/4 mx-auto mt-4 bg-indigo-200">
       <h1 className="text-center my- font-bold text-5xl"> Add a toy</h1>
      <form onSubmit={handleUpdate}>
      <div className="form-control">
  <label className="label">
    <span className="label-text">Product Name</span>
  </label>
 
    <input type="text" name="toyName" defaultValue={detail.toyName} placeholder="toy name" className="input input-bordered" />
  <label className="label">
    <span className="label-text">Image</span>
  </label>
 
    <input type="text" placeholder="photoUrl"  name="photo" defaultValue={detail.photo} className="input input-bordered" />
  <label className="label">
    <span className="label-text">Seller name</span>
  </label>
 
    <input type="text" placeholder="sellerName" defaultValue={detail.name}  name="name" className="input input-bordered" />
  <label className="label">
    <span className="label-text">Seller Email</span>
  </label>
 
    <input type="text"   value={user?.email || ''} className="input input-bordered" />
  <label className="label">
    <span className="label-text">Category</span>
  </label>
 
    <input type="text" placeholder="category" defaultValue={detail.category}  name="category" className="input input-bordered" />
  <label className="label">
    <span className="label-text">Price</span>
  </label>
 
    <input type="text" placeholder="price" className="input input-bordered"  defaultValue={detail.price} name="price"  />
  <label className="label">
    <span className="label-text">Rating</span>
  </label>
 
    <input type="text" name="rating" defaultValue={detail.rating} placeholder="rating" className="input input-bordered" />
  <label className="label">
    <span className="label-text">Available Quantity</span>
  </label>
 
    <input type="text" name="quantity"placeholder="quantity" defaultValue={detail.quantity} className="input input-bordered" />
  <label className="label">
    <span className="label-text">Detail description</span>
  </label>
 
            <input type="text" placeholder="description"
              defaultValue={detail.description} className="input input-bordered" name="description" />
        
        </div>
        <button className="btn btn-block my-4">Update</button>
      </form>
    </div>
    </div>
  );
};

export default UpdateDetails;
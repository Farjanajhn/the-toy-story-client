
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";





const UpdateDetails = () => {


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
    const price = form.price.value;
    const description = form.description.value;
    const quantity = form.quantity.value;
    const newToy = { price, quantity, description };
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
      <h1 className="text-center my-8 font-bold text-2xl "> Update a toy:{detail.toyName}</h1>
     <div className="w-3/4 my-8 mx-auto mt-4 bg-indigo-200 px-8 rounded-lg">
     
     <form  className="px-auto"onSubmit={handleUpdate}>
     <div className="form-control">


 <label className="label">
   <span className="label-text">Price</span>
 </label>

   <input type="text" placeholder="price" className="input input-bordered"  defaultValue={detail.price} name="price"  />

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
       <button className="btn btn-block my-4 bg-indigo-800">Update</button>
     </form>
   </div>
   </div>

  );
};

export default UpdateDetails;
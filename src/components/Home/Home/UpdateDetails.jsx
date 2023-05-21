
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";
import useTitle from "../../../hooks/useTitle";





const UpdateDetails = () => {

  const navigate = useNavigate();
  useTitle('updateDetails')
    const [detail, setDetail] = useState([]);
    const { id } = useParams();
  /*   console.log(id); */
    useEffect(() => {
      fetch('https://toy-story-server-one.vercel.app/products')
        .then(res => res.json())
        .then(data => {
          const foundDetail = data.find(d=>d._id == id);
          setDetail(foundDetail);
      })
    },[id])
  const handleUpdate = (event) => {
 
    event.preventDefault();
    const form = event.target;
    const price = form.price.value;
    const description = form.description.value;
    const quantity = form.quantity.value;
    const newToy = { price, quantity, description };
    console.log(newToy);
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, Update it!'
    }).then((result) => {
      if (result.isConfirmed) {
   /*      Swal.fire(
          'Deleted!',
          'Your file has been deleted.',
          'success'
        ) */
        fetch(`https://toy-story-server-one.vercel.app/updateProducts/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body:JSON.stringify(newToy)
    })
      .then(res => res.json())
      .then(result => {
        console.log(result)
        if (result.acknowledged == true) {
          Swal.fire(
            'Updated!',
            'Your file has been updated successfully.',
            'success')
        }
        navigate('/myToy')

    })
      }
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
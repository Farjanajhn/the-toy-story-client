import { Link } from "react-router-dom";



const ToyList = ({ data,handleDelete }) => {
  const { _id,name, toyName, price, quantity, category, rating, photo, email } = data;
  
  return (
   
    <tr>
      
        <td>
          
        
              <div className="mask mask-squircle w-12 h-12">
          <img src={photo} alt="Avatar Tailwind CSS Component" />
              </div>
           
        </td>
      <td>{toyName}</td>
        <td>
       {name}
         
        </td>
      <td>{category}</td>
      <td>{price}</td>
      <td>{quantity}</td>
      <td>{rating}</td>
      <td>{email}</td>

        <td>
         <Link to={`/update/${_id}`}><button  className="btn  btn-ghost btn-xs bg-indigo-400">Update</button></Link> 
         
        
        </td>
        <td>
          <button onClick={()=>handleDelete(_id)}className="btn btn-ghost btn-xs bg-indigo-400">delete</button>
        </td>
      </tr>
  );
};

export default ToyList;
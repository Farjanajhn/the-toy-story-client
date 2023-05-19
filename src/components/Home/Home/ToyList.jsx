


const ToyList = ({ data }) => {
  const {name, toyName, price, quantity, category, description, rating, photo, email  } = data;
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

        <th>
          <button className="btn btn-ghost btn-xs bg-indigo-400">Update</button>
        </th>
        <th>
          <button className="btn btn-ghost btn-xs bg-indigo-400">delete</button>
        </th>
      </tr>
  );
};

export default ToyList;
import { Link } from "react-router-dom";


const ShowToyes = ({ product }) => {
  const {_id,toyName,name,category,price,quantity}=product
  return (
      <tr>
              <td>{name }</td> 
              <td>{toyName}</td> 
              <td>{category}</td> 
              <td>{price}</td> 
              <td>{quantity}</td> 
              <td>
              <button className="btn btn-outline btn-primary"><Link to={`/products/${_id}`}>View Details</Link></button>
              </td>
      </tr>

  );
};

export default ShowToyes;
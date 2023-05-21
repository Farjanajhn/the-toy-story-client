import { useContext } from "react";
import { Link, useNavigation } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../Provider/AuthProvider";


const ShowToyes = ({ product }) => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigation();

  const showAToast = () => {
    if (!user) {
   
      Swal.fire('You have to log in first to view details! ')
      navigate('/login')
    }
  
  }
 
  const {_id,toyName,name,category,price,quantity}=product
  return (
      <tr>
              <td>{name }</td> 
              <td>{toyName}</td> 
              <td>{category}</td> 
              <td>{price}</td> 
              <td>{quantity}</td> 
              <td>
              <button onClick={showAToast} className="btn btn-outline btn-primary"><Link to={`/allToy/${_id}`}>View Details</Link></button>
              </td>
      </tr>
  

  );
};

export default ShowToyes;
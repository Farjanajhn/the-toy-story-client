import { useEffect } from "react";
import { useState } from "react";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import ToyList from "./ToyList";


const MyToy = () => {
  const { user } = useContext(AuthContext);
  const [myData, setMyData] = useState([]);

  const url = `http://localhost:4000/products?email=${user?.email}` 
  useEffect(() => {
    fetch(url)
      .then(res => res.json())
    .then(data=>setMyData(data))
  }, [])
  
  
  return (
    <div >
      <h1>{myData.length}</h1>
      <div className="overflow-x-auto w-full">
  <table className="table w-full">
    {/* head */}
    <thead>
      <tr>
        <th>
          <label>
            <input type="checkbox" className="checkbox" />
          </label>
        </th>
        <th>Toy Name</th>
        <th>Name</th>
        <th>Category</th>
        <th>Price</th>
        <th>Quantity</th>
        <th>Rating</th>
        <th>Email</th>
        
        <th></th>
        <th></th>
      </tr>
    </thead>
    <tbody>

     
            {
              myData.map(data => <ToyList
                key={data._id} data={data}></ToyList>)
   }
     
    </tbody>

   
  </table>
</div>
    

  </div>
  );
};

export default MyToy;
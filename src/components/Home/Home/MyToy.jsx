import { useEffect } from "react";
import { useState } from "react";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import ToyList from "./ToyList";


const MyToy = () => {
  const { user } = useContext(AuthContext);
  const [myData, setMyData] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:4000/myProducts?email=${user?.email}`)
      .then(res => res.json())
      .then(data => setMyData(data))
  }, [user])

  const handleDelete = id => {
    const proceed = confirm('are you sure you want to delete?')
    if (proceed) {
      fetch(`http://localhost:4000/products/${id}`,
        {
          method: "DELETE"
        })
        .then(res => res.json())
        .then(data => { console.log(data);
      if (data.deletedCount > 0) {
        alert('deleted suncessfull');
        const remainingData = myData.filter(data => data._id !== id)
        setMyData(remainingData);
      }
    })
  }
}
  
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
                key={data._id} handleDelete={handleDelete} data={data}></ToyList>)
   }
     
    </tbody>

   
  </table>
</div>
    

  </div>
  );
};

export default MyToy;


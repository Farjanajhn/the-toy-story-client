import { useEffect } from "react";
import { useState } from "react";
import ShowToyes from "./ShowToyes";


const AllToy = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch('http://localhost:4000/products')
      .then(res => res.json())
    .then(data=>setProducts(data))
  })
  return (
    <div>
      <div className="overflow-x-auto">
  <table className="table table-compact w-full">
    <thead>
      
      
        <th>Name</th> 
        <th>Toy Name</th> 
        <th>Category</th> 
        <th>Price</th> 
        <th>Available Quantity</th> 
        <th></th>
   
    </thead> 
          <tbody>
          {
        products.map(product=><ShowToyes key={product._id} product={product}></ShowToyes>)
    }
    </tbody>
    
   
  
  </table>
</div>
  </div>

  );
};

export default AllToy;
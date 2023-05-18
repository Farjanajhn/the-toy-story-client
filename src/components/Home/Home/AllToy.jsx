import { useEffect } from "react";
import { useState } from "react";


const AllToy = () => {
  const [products, setProducts] = useState();
  useEffect(() => {
    fetch('http://localhost:4000/products')
      .then(res => res.json())
    .then(data=>setProducts(data))
  })
  return (
    <div>
      <h1>toy</h1>
    </div>
  );
};

export default AllToy;
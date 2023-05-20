import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";


const ViewDetails = () => {
  const [detail, setDetail] = useState([]);
  const { id } = useParams();
  console.log(id);
  useEffect(() => {
    fetch(`http://localhost:4000/products/${id}`)
      .then(res => res.json())
      .then(data => {
        const foundDetail = data.find(d=>d._id == id);
        setDetail(foundDetail);
    })
  })

  return (
    <div className="">

      <div className="card card-compact w-96 bg-base-100 shadow-xl ">
  <figure><img src={detail.photo} alt="" /></figure>
  <div className="card-body">
          <h2 className="card-title">{detail.toyName}</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>
    </div>
  );
};

export default ViewDetails;
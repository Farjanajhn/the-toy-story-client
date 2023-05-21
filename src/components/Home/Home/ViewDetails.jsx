import { useLoaderData } from "react-router-dom";
import useTitle from "../../../hooks/useTitle";





const ViewDetails = () => {

  const detail = useLoaderData();
  useTitle('viewDetails');
/*   console.log(detail) */
  return (
    <div className="">
    


      <div className="card card-compact w-96 bg-base-100 shadow-xl my-8 mx-auto ">
  <figure><img src={detail.photo} alt="" /></figure>
  <div className="card-body">
          <h2 className="card-title">{detail.toyName}</h2>
         
          <p className="text-lg">Description:{detail.description}</p>
          <p className="text-sm">Price:{detail.price}$</p>

          <div className="flex">
          <p className="text-sm">Seller Name: {detail.name}</p>
          <p className="text-sm"> email: {detail.email}</p>
    
          </div>
          <div className="flex">
            <p className="text-sm">Rating:{detail.rating}</p>
          <p className="text-xm">Quantity:{detail.quantity }</p></div>
         
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>

    </div>
  );
};

export default ViewDetails;





 /*  const detail = useLoaderData();
  console.log(detail) */
  

  /* const [detail, setDetail] = useState([]);
  const { id } = useParams();
  console.log(id);
  useEffect(() => {
    fetch(`https://toy-story-server-one.vercel.app/products/${id}`)
      .then(res => res.json())
      .then(data => {
        const foundDetail = data.find(d=>d._id == id);
        setDetail(foundDetail);
    }) */
  
  

 /*  return (
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
  */

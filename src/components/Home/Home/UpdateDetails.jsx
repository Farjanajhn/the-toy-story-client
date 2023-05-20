import { useLoaderData } from "react-router-dom";



const UpdateDetails = () => {

  const data = useLoaderData();
  console.log(data)
  /* const { _id,name, toyName, price, quantity, category, rating, photo, email } = data; */
  return (
    <div>
      <h1>Update a toy:</h1>
    </div>
  );
};

export default UpdateDetails;
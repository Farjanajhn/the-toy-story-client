
import { Link } from "react-router-dom";
import  banner from '../../../assets/banner.avif'


const Banner = () => {

  return (
    <div className="hero my-4 rounded-lg">
    <img className="w-screen  h-screen"src={banner} alt="" />
<div className="hero-overlay rounded-lg"></div>
<div className="hero-content text-center text-neutral-content">
<div className="w-5/6">
  <h1 className="mb-5 text-5xl font-bold text-black">Explore your imagination</h1>
  <p className="mb-5 text-black font-semibold text-xl ml-2">
Welcome to our toy wonderland, where imagination knows no bounds! Discover a captivating collection of toys that will ignite the joy and curiosity in children of all ages. From cuddly companions to mind-boggling puzzles, our online store offers a treasure trove of entertainment. Explore our vibrant selection, embrace the power of play, and bring endless smiles to the faces of your little ones. <br></br><span style={{ color: 'indigo' }} >Start your magical journey with us today!</span></p>
          <div>
            <Link to="/registration"><button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg  border-none bg-indigo-800">Registration</button></Link>
          <p className="text-black font-semibold text-xl ">OR</p>
          <Link to ="/login"><button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg  border-none bg-indigo-800">Login</button></Link>
         </div>
</div>
</div>
</div>
  );
};

export default Banner;
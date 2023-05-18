import { Link } from "react-router-dom";


const Banner = () => {
  return (
    <div className="hero max-h-screen">
    <img src="https://img.freepik.com/premium-vector/children-with-simple-geometry-forms-different-geometric-shape-educational-geometry-children-back-school_253263-121.jpg?w=2000" alt="" />
<div className="hero-overlay bg-opacity-30"></div>
<div className="hero-content text-center text-neutral-content">
<div className="max-w-lg">
  <h1 className="mb-5 text-5xl font-bold text-black">Hello there</h1>
  <p className="mb-5 text-black font-semibold text-xl">
Welcome to our toy wonderland, where imagination knows no bounds! Discover a captivating collection of toys that will ignite the joy and curiosity in children of all ages. From cuddly companions to mind-boggling puzzles, our online store offers a treasure trove of entertainment. Explore our vibrant selection, embrace the power of play, and bring endless smiles to the faces of your little ones. Start your magical journey with us today!</p>
          <div>
            <Link to="registration"><button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg  bg-indigo-400">Registration</button></Link>
          <p className="text-black font-semibold text-xl ">OR</p>
          <Link to ="registration"><button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg  bg-indigo-400">Login</button></Link>
         </div>
</div>
</div>
</div>
  );
};

export default Banner;
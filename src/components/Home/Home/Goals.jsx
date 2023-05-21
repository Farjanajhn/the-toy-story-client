import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";


const Goals = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <div className="hero max-h-min rounded-lg bg-indigo-200 my-4">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <img className="h-80"src="https://momblogsociety.com/wp-content/uploads/2020/02/lego-1.jpg" />
    <div  data-aos="fade-up">
      <h1 className="text-5xl font-bold">Our Business Goal!</h1>
      <p className="py-6">To foster creativity and cognitive development in babies, our LEGO Baby Business set is specifically designed to engage their senses and fine motor skills. With larger, chunky bricks that are easy to grasp and manipulate, this set encourages early exploration and imaginative play. The bright colors and various shapes of the bricks stimulate visual and tactile senses, while the simple building activities promote problem-solving and spatial awareness. Our LEGO Baby Business set is an ideal choice for parents and caregivers who want to introduce their little ones to the world of LEGO and support their early learning journey.</p>
      <button className="btn btn-primary">Here you can find More</button>
    </div>
  </div>
</div>
  );
};

export default Goals;
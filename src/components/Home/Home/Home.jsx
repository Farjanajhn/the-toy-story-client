
import useTitle from "../../../hooks/useTitle";
import Banner from "./Banner";
/* import Category from "./Category"; */
import Gallary from "./Gallary";
import Goals from "./Goals";
import HelpSection from "./HelpSection";




const Home = () => {
  useTitle('home')
  return (
    <div>
      <Banner></Banner>
      <Gallary></Gallary>
   {/*    <Category></Category> */}
      <Goals> </Goals>
      <HelpSection></HelpSection>

    </div>
  );
};

export default Home;
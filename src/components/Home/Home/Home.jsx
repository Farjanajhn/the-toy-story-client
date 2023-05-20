import CountDownSection from "../../CountDownSection";
import Banner from "./Banner";
import Category from "./Category";
import Gallary from "./Gallary";
import Goals from "./Goals";


const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Gallary></Gallary>
      <Category></Category>
      <CountDownSection></CountDownSection>
      <Goals></Goals>

    </div>
  );
};

export default Home;
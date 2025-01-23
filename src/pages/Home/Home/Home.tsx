import Banner from "../../../components/Banner/Banner";

import DayDeal from "../../../components/DayDeal/DayDeal";
import Demo from "../../../components/Demo/Demo";
import ExploreCatagories from "../../../components/ExploreCatagories/ExploreCatagories";
import Extra from "../../../components/Extra/Extra";
import Hero from "../../../components/Hero/Hero";
import MarketingCarts from "../../../components/Marketing carts/MarketingCarts";
import Tricky from "../../../components/Tricky/Tricky";
import Container from "../../../Layouts/Container/Container";

const Home = () => {
  return (
    <div>
      <Hero></Hero>
      <ExploreCatagories></ExploreCatagories>
      <DayDeal></DayDeal>
      <Extra></Extra>
      <Banner></Banner>

      <Container>
        <Demo></Demo>
      </Container>

      <Tricky></Tricky>

      <Container>
        <MarketingCarts></MarketingCarts>
      </Container>
    </div>
  );
};

export default Home;

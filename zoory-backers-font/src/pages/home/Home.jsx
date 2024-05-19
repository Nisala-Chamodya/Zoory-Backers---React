import React from "react";
import Banner from "../../component/Banner";
import Categories from "../../component/Categories";
import SpecialDishes from "../../component/SpecialDishes";
import Testimonials from "../../component/Testimonials";
import OurServices from "../../component/OurServices";

const Home = () => {
  return (
    <div>
      <Banner />
      <Categories />
      <SpecialDishes />
      <Testimonials />
      <OurServices />
    </div>
  );
};

export default Home;

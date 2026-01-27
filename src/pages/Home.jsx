import React from "react";
import Hero from "../components/home/Hero";
import Featured from "../components/home/Featured";
import Category from "../components/home/Category";
import Why from "../components/home/Why";

const Home = () => {
  return (
    <div>
      <div>
        <Hero />
        <Featured />
        <Category />
        <Why />
      </div>
    </div>
  );
};

export default Home;

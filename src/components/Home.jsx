import React from "react";
import Hero from "../HomeComponents/Hero";
import Charts from "../HomeComponents/Charts";
import "../styles/Home.css";
import Section1 from "../HomeComponents/Section1";
import Section2 from "../HomeComponents/Section2";
import Section3 from "../HomeComponents/Section3";
import Section4 from "../HomeComponents/Section4";

const Home = () => {
  return (
    <div>
      <Hero />
      <Charts />
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
    </div>
  );
};

export default Home;

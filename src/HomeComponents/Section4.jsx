import React from "react";
import "../styles/Section4.css";
import ireti from "../assets/Ireti.svg";
import bayo from "../assets/Bayo.svg";
import olagoke from "../assets/Olagoke.svg";

const Section4 = () => {
  return (
    <div className="section-4 container">
      <h2>Customer's Review</h2>
      <div className="cards">
        <div className="card">
          <div>
            <img src={ireti} alt="Ireti" />
          </div>
          <div>
            <h4>Ireti</h4>
            <h6>Nigeria</h6>
          </div>
        </div>
        <div className="card">
          <div>
            <img src={bayo} alt="Bayo" />
          </div>
          <div>
            <h4>Bayo</h4>
            <h6>USA</h6>
          </div>
        </div>
        <div className="card">
          <div>
            <img src={olagoke} alt="Olagoke" />
          </div>
          <div>
            <h4>Olagoke</h4>
            <h6>Nigeria</h6>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section4;

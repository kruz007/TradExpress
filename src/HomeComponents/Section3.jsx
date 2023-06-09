import React from "react";
import "../styles/Section3.css";
import { Link } from "react-router-dom";
import appstore2 from "../assets/Get on stores 2.svg";

const Section3 = () => {
  return (
    <div className="section-3">
      <h6>Ready to trade Buy/Sell cryptocurrencies in just 10 minutes?</h6>
      <h2>Create your account for free and start trading today!</h2>
      <Link to="/Misc" className="get-started">
        <p>Get Started</p>
      </Link>
      <a href="https://shorturl.at/cdv25" target="_blank">
        <img src={appstore2} alt="" />
      </a>
    </div>
  );
};

export default Section3;

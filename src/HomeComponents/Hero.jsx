import React from "react";
import "../styles/Hero.css";
import appstore from "../assets/Get on stores.svg";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="hero">
      <div className="container">
        <h1>
          Buy, sell and manage your <br /> Crypto on TradExpress.
        </h1>
        <p>
          Easily Trade Cryptocurrencies like BTC, USDT, ETH, LTC <br /> & XRP
          with NGN.
        </p>
        <Link to="/Misc" className="hero-get-started">
          <p>Get Started</p>
        </Link>
        <a href="https://shorturl.at/cdv25" target="_blank">
          <img src={appstore} alt="Download The App" />
        </a>
      </div>
      <div className="big-circle"></div>
      <div className="small-circle"></div>
    </div>
  );
};

export default Hero;

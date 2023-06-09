import React from "react";
import "../styles/Section4.css";
import ireti from "../assets/Ireti.svg";
import bayo from "../assets/Bayo.svg";
import olagoke from "../assets/Olagoke.svg";
import quote from "../assets/quote.svg";
import quotationMark from "../assets/quotation mark.svg";

const Section4 = () => {
  return (
    <div className="section-4 container">
      <h2>Customer's Review</h2>
      <div className="cards">
        <div className="card">
          <div className="positioning">
            <img className="quotation-mark" src={quotationMark} alt="" />
            <p className="quotation-text">
              Trading on TradExpress mobile & web platforms has been a smooth
              experience for me quite easy to navigate.
            </p>
            <img src={quote} alt="" />
          </div>
          <div className="inner">
            <div>
              <img src={ireti} alt="Ireti" />
            </div>
            <div>
              <h4>Ireti</h4>
              <h6>Nigeria</h6>
            </div>
          </div>
        </div>
        <div className="card">
        <div className="positioning">
            <img className="quotation-mark" src={quotationMark} alt="" />
            <p className="quotation-text">
              Trading on TradExpress mobile & web platforms has been a smooth
              experience for me quite easy to navigate.
            </p>
            <img src={quote} alt="" />
          </div>
          <div className="inner">
            <div>
              <img src={bayo} alt="Bayo" />
            </div>
            <div>
              <h4>Bayo</h4>
              <h6>USA</h6>
            </div>
          </div>
        </div>
        <div className="card">
        <div className="positioning">
            <img className="quotation-mark" src={quotationMark} alt="" />
            <p className="quotation-text">
              Trading on TradExpress mobile & web platforms has been a smooth
              experience for me quite easy to navigate.
            </p>
            <img src={quote} alt="" />
          </div>
          <div className="inner">
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
    </div>
  );
};

export default Section4;

import React, { useState } from "react";
import "../styles/Section1.css";
import payment from "../assets/Payment.svg";
import financialFreedom from "../assets/Financial Freedom.svg";
import investment from "../assets/Investment.svg";
import { Link } from "react-router-dom";

const Section1 = () => {
  const [show, setShow] = useState(true);
  const [seeText, setSeeText] = useState("See Less");
  let see = () => {
    if (show === true) {
      setShow(false);
      setSeeText("See More");
    } else {
      setShow(true);
      setSeeText("See Less");
    }
  };
  return (
    <div className="section-1">
      <div className="container">
        <h2>Why do people get involved with Cryptocurrencies?</h2>
        <Link className="see-style" onClick={see}>
          <p>{seeText}</p>
        </Link>

        {show && (
          <div className="cards">
            <div className="card">
              <img src={payment} alt="Payment" />
              <h4>Easy Mode of Payment</h4>
              <h6>
                People can now easily send and receive money from anywhere in
                the world to purchase goods and pay for services.
              </h6>
            </div>
            <div className="card">
              <img src={financialFreedom} alt="Financial Freedom" />
              <h4>Financial Freedom</h4>
              <h6>
                Just like the internet no single entity controls the Crypto
                network which provides users transparency and privacy, which
                puts you in absolute control of your money.
              </h6>
            </div>
            <div className="card">
              <img src={investment} alt="Investments" />
              <h4>Investment</h4>
              <h6>
                The constant demand as made Cryptocurrecies a Digital Gold used
                for alternative store of wealth on long term investments.
              </h6>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Section1;

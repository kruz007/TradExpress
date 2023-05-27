import React, { useEffect } from "react";
import "../styles/Charts.css";
import Marquee from "react-fast-marquee";
import down from "../assets/down.svg";
import up from "../assets/up.svg";

const Charts = () => {
  let rates = async () => {
    try {
      let response = await fetch(
        "https://api.coinlore.net/api/tickers/?start=1&limit=6"
      );
      let coins = await response.json();
      return coins;
    } catch (e) {
      console.log("Error!");
      console.log(e);
    }
  };
  useEffect(() => {
    rates();
  }, []);
  return (
    <div className="charts">
      <div className="container">
        <Marquee behavior="" direction="left" pauseOnHover="true">
          <div className="currencies">
            <div className="currency">
              <div className="top">
                <p>BTC/NGN</p>
                <p>
                  -3.21%
                  <img src={down} alt="" />
                </p>
              </div>
              <p>20,560.101.59 NGN</p>
            </div>
            <div className="currency">
              <div className="top">
                <p>USDT/NGN</p>
                <p>
                  +10.20%
                  <img src={up} alt="" />
                </p>
              </div>
              <p>453.44 NGN</p>
            </div>
            <div className="currency">
              <div className="top">
                <p>BTC/NGN</p>
                <p>
                  -3.21%
                  <img src={down} alt="" />
                </p>
              </div>
              <p>20,560.101.59 NGN</p>
            </div>
            <div className="currency">
              <div className="top">
                <p>USDT/NGN</p>
                <p>
                  +10.20%
                  <img src={up} alt="" />
                </p>
              </div>
              <p>453.44 NGN</p>
            </div>
            <div className="currency">
              <div className="top">
                <p>BTC/NGN</p>
                <p>
                  -3.21%
                  <img src={down} alt="" />
                </p>
              </div>
              <p>20,560.101.59 NGN</p>
            </div>
            <div className="currency">
              <div className="top">
                <p>USDT/NGN</p>
                <p>
                  +10.20%
                  <img src={up} alt="" />
                </p>
              </div>
              <p>453.44 NGN</p>
            </div>
          </div>
        </Marquee>
      </div>
    </div>
  );
};

export default Charts;

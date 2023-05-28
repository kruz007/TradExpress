import React, { useEffect, useState } from "react";
import "../styles/Charts.css";
import Marquee from "react-fast-marquee";
import down from "../assets/down.svg";
import up from "../assets/up.svg";

const Charts = () => {
  const [coins, setCoins] = useState([]);
  let rates = async () => {
    try {
      let response = await fetch(
        "https://api.coinlore.net/api/tickers/?start=0&limit=5"
        // "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=5&page=1&sparkline=false"
      );
      let apiData = await response.json();
      setCoins(apiData.data);
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
        <Marquee
          behavior=""
          direction="left"
          autoFill="true"
          pauseOnHover="true"
        >
          <div className="currencies">
            {coins.map((coin) => {
              return (
                <div className="currency" key={coin.id}>
                  <div className="top">
                    <p>{coin.symbol}/NGN</p>
                    <p>
                      {coin.percent_change_24h}%
                      {coin.percent_change_24h > 0 ? (
                        <img src={up} alt="in" />
                      ) : (
                        <img src={down} alt="de" />
                      )}
                    </p>
                  </div>
                  <p>{Math.round(coin.price_usd * 461.5)} NGN</p>
                </div>
              );
            })}
          </div>
        </Marquee>
      </div>
    </div>
  );
};

export default Charts;

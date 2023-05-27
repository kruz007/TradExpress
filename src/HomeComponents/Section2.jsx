import React from "react";
import "../styles/Section2.css";
import keycap1 from "../assets/emojione-monotone_keycap-1.svg";
import device from "../assets/Device.svg";
import keycap2 from "../assets/emojione-monotone_keycap-2.svg";
import piggy from "../assets/Piggy.svg";
import keycap3 from "../assets/emojione-monotone_keycap-3.svg";
import bitcoin from "../assets/Bitcoin.svg";

const Section2 = () => {
  return (
    <div className="section-2">
      <div className="container">
        <h1>Buy and Sell your Cryptocurrency in 3 simple steps</h1>
        <h5>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Est lectus
          faucibus et nunc id sollicitudin pretium nulla. Et nunc tempus mauris
          ullamcorper mauris, rhoncus sed magna. Eu consectetur nulla aliquam
          consectetur lectus. Rutrum feugiat et, tellus mattis donec et odio
          molestie amet.
        </h5>
        <div className="number-1">
          <div>
            <img src={device} alt="Device" />
          </div>
          <div className="inner">
            <div>
              <img src={keycap1} alt="" />
            </div>
            <div>
              <h2>Create a free Account</h2>
              <h6>
                Sign up for your free TradExpress Wallet on web, iOS, or Android
                devices and follow our <br /> easy process to set up your
                profile.
              </h6>
            </div>
          </div>
        </div>
        <div className="number-2">
          <div>
            <img src={piggy} alt="Piggy" />
          </div>
          <div className="inner">
            <div>
              <img src={keycap2} alt="" />
            </div>
            <div>
              <h2>Deposit</h2>
              <h6>
                Choose your preferred deposit option like bank transfer,
                credit/debit card or send digital <br /> asset directly to your
                wallet for easy funding/withdrawal.
              </h6>
            </div>
          </div>
        </div>
        <div className="number-3">
          <div>
            <img src={bitcoin} alt="Bitcoin" />
          </div>
          <div className="inner">
            <div>
              <img src={keycap3} alt="" />
            </div>
            <div>
              <h2>Buy/ Sell Crypto</h2>
              <h6>
                Sign up for your free TradExpress Wallet on web, iOS, or Android
                devices and follow our <br /> easy process to set up your
                profile.
              </h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section2;

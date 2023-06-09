import React from "react";
import "../styles/Footer.css";
import twitterLogo from "../assets/twitter.svg";
import telegramLogo from "../assets/telegram.svg";
import whatsappLogo from "../assets/whatsapp.svg";
import facebookLogo from "../assets/facebook.svg";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-div">
        <div className="container">
          <div className="headings">
            <h5>Products</h5>
            <a href="">
              <h6>Bitcoin</h6>
            </a>
            <a href="">
              <h6>Alt</h6>
            </a>
            <a href="">
              <h6>Fiat</h6>
            </a>
            <a href="">
              <h6>Refill</h6>
            </a>
            <a href="">
              <h6>P2P</h6>
            </a>
          </div>
          <div className="headings">
            <h5>Learn</h5>
            <a href="">
              <h6>Blog</h6>
            </a>
            <a href="">
              <h6>Help Center</h6>
            </a>
          </div>
          <div className="headings">
            <h5>Contact</h5>
            <a href="">
              <h6>hello@tradexpress.com</h6>
            </a>
            <a href="">
              <h6>support@tradexpress.com</h6>
            </a>
            <div className="communities">
              <div className="community">
                <a href="https://twitter.com/TradeXpress" target="_blank">
                  <img src={twitterLogo} alt="Twitter" />
                </a>
              </div>
              <div className="community">
                <a
                  href="https://t.me/s/jointradeXpres?before=487"
                  target="_blank"
                >
                  <img src={telegramLogo} alt="Telegram" />
                </a>
              </div>
              <div className="community">
                <a
                  // href="https://shorturl.at/wJLR9"
                  href="https://wa.me/2347060440986?text=BadManDev"
                  target="_blank"
                >
                  <img src={whatsappLogo} alt="Whatsapp" />
                </a>
              </div>
              <div className="community">
                <a href="https://shorturl.at/lmO47" target="_blank">
                  <img src={facebookLogo} alt="Facebook" />
                </a>
              </div>
            </div>
          </div>
          <div className="headings">
            <h5>Company</h5>
            <a href="">
              <h6>About Us</h6>
            </a>
            <a href="">
              <h6>Careers</h6>
            </a>
            <a href="">
              <h6>Rates</h6>
            </a>
            <a href="">
              <h6>Mobile</h6>
            </a>
          </div>
          <div className="headings">
            <h5>Legal</h5>
            <a href="">
              <h6>Privacy Policy</h6>
            </a>
            <a href="">
              <h6>Anti-Money Laundering</h6>
            </a>
            <a href="">
              <h6>Terms and Conditions</h6>
            </a>
          </div>
        </div>
      </div>
      <h3 className="copyright">
        &copy; 2021 Tradexpress Technologies. All Right Reserved
      </h3>
    </div>
  );
};

export default Footer;

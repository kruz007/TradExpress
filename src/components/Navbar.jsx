import React from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";
import Logo from "../assets/TradExpress logo.svg";

const Navbar = () => {
  return (
    <div className="navbar">
      <nav className="container">
        <div>
          <Link to="/">
            <img src={Logo} alt="TradeExpress" />
          </Link>
        </div>
        <div className="pages">
          <Link to="/Misc" className="links">
            <p>Instant Buy/Sell</p>
          </Link>
          <Link to="/Misc" className="links">
            <p>Learn</p>
          </Link>
          <Link to="/Misc" className="links login">
            <p>Login</p>
          </Link>
          <Link to="/Misc" className="links get-started">
            <p>Get Started</p>
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;

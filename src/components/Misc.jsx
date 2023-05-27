import React from "react";
import "../styles/Misc.css"
import working from "../assets/work-progress-sign-image-clipping-path-61212011.jpg";

const Misc = () => {
  return (
    <div className="misc">
      <h1>DEVELOPERS AT WORK</h1>
      <img src={working} alt="Work in progress" />
    </div>
  );
};

export default Misc;

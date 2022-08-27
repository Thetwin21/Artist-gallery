import React from "react";
import Circles from "./Circles";

const Theartist = () => {
  return (
    <div className="theartist-container">
      <div className="content">
        <div className="text">
          <p>Hi, I'm Sylvester Detwins</p>
          <h2>
            An Artist Who Se<span className="border">es </span>
           the spirit in life.</h2>
          <button>More </button>
        </div>
      </div>
      <div className="img-box">
        <div className="img">
          <img src="../Images/img5.jpg" alt="" />
        </div>
        <Circles circle={"iCircle"} />
      </div>
      <Circles circle={"oCircle"} />
    </div>
  );
};

export default Theartist;

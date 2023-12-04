import React from "react";
import Tilt from "react-parallax-tilt";
import "./logo.css";
import brain from "./brain.png";

export default function Logo() {
  return (
    <div className="ma4 mt0">
      <Tilt
        className="tilt br3 shadow-3"
        options={{ max: 50 }}
        style={{ height: "120px", width: "120px" }}
      >
        <div className="tilt-inner">
          <img
            src={brain}
            className="pt3"
            alt="brain"
            style={{ height: "85px", width: "85px"}}
          />
        </div>
      </Tilt>
    </div>
  );
}

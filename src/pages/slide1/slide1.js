import React from "react";
import { Fade } from "react-awesome-reveal";
import "./slide1.css";

export function Slide1() {
  return (
    <>
      <Fade>
        <div className="slide-1-screen">
          <p className="slide-1-text">Slide 1</p>
        </div>
      </Fade>
    </>
  );
}

export default Slide1;

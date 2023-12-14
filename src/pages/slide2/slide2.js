import React from "react";
import { Fade } from "react-awesome-reveal";
import "./slide2.css";

export function Slide2() {
  return (
    <>
      <Fade>
        <div className="slide-2-screen">
          <p className="slide-2-text">Slide 2</p>
        </div>
      </Fade>
    </>
  );
}

export default Slide2;

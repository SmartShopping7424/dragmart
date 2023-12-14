import React from "react";
import { Zoom, Fade } from "react-awesome-reveal";
import "./logo.css";

export function Logo() {
  return (
    <>
      <Zoom>
        <div className="logo-screen">
          <img alt="logo" src="assets/img/logo.png" className="logo-image" />
          <p className="logo-text">Dragmart</p>
          <Fade delay={1000} cascade damping={0.1} className="logo-sub-text">
            Easy Shopping
          </Fade>
        </div>
      </Zoom>
    </>
  );
}

export default Logo;

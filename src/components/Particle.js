import React from "react";
import { useState } from "react";
import bg_top from '../assets/bg-top.png';
import "animate.css/animate.min.css";

function Particle() {
  const [isAnimated, setAnimated] = useState(false);

  return (
    <div
      onClick={() => setAnimated(!isAnimated)}
      className={`wave-animation ${isAnimated ? "animated" : ""}`}
    >
      <img src={bg_top} alt="Animated PNG" />
    </div>
  );
}

export default Particle;

import React, { useState } from "react";
import "./FlipCard.css";

function FlipCard() {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleMouseEnter = () => {
    setIsFlipped(true);
  };

  const handleMouseLeave = () => {
    setIsFlipped(false);
  };

  return (
    <div
      className="vignette"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className={`vignette-front ${isFlipped ? "flipped" : ""}`}>
        Front
      </div>
      <div className={`vignette-back ${isFlipped ? "flipped" : ""}`}>Back</div>
    </div>
  );
}

export default FlipCard;

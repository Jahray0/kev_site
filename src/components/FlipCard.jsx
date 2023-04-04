import { useState } from "react";
import "./FlipCard.css";

function FlipCard({ imageUrl, textOverlay }) {
  const [showText, setShowText] = useState(false);

  return (
    <div
      className="container_vign"
      onMouseEnter={() => setShowText(true)}
      onMouseLeave={() => setShowText(false)}
    >
      <img className="image_vign" src={imageUrl} alt="Bannière à propos" />
      <div className={`text_vign ${!showText && "hide"}`}>{textOverlay}</div>
    </div>
  );
}

export default FlipCard;

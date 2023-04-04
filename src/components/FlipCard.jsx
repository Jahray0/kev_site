import { useState } from "react";
import image1 from "../assets/image1.jpg";
import "./FlipCard.css";

function ImageWithText(imageUrl, texteOverlay) {
  const [showText, setShowText] = useState(false);

  return (
    <div
      className="container_vign"
      onMouseEnter={() => setShowText(true)}
      onMouseLeave={() => setShowText(false)}
    >
      <img className="image_vign" src={image1} alt="Bannière à propos" />
      <div className={`text_vign ${!showText && "hide"}`}>
        Your text overlay
      </div>
    </div>
  );
}

export default ImageWithText;

import "./Banner.css";
import banner from "../assets/banner.jpg";

function Banner({ titre }) {
  return (
    <div className="container">
      <div className="title">
        <h1>{titre}</h1>
      </div>
      <div className="img_content">
        <img src={banner} alt="Bannière à propos" />
      </div>
    </div>
  );
}

export default Banner;

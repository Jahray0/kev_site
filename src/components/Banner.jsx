import "./Banner.css";
import banner from "../assets/banner.jpg";

function Banner({ titre }) {
  return (
    <div className="container">
      <img src={banner} alt="Bannière à propos" />
      <div className="title_banner">
        <h1>{titre}</h1>
      </div>
    </div>
  );
}

export default Banner;

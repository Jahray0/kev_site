import "./Activitees.css";
import "../components/Banner.css";
import Banner from "../components/Banner";
import FlipCard from "../components/FlipCard";
import image1 from "../assets/image1.jpg";
import image2 from "../assets/image2.jpg";
import image3 from "../assets/image3.jpg";
import image4 from "../assets/image4.jpg";

function Activitees() {
  return (
    <div className="content_p2">
      <Banner titre="Activitées" />
      <FlipCard />
      <div className="act_content">
        <div className="act_title">
          <h2>Activitées</h2>
        </div>
        <div className="act_vignettes">
          <div className="cards">
            <div className="card_title">
              <h3>Randonnées</h3>
            </div>
            <div className="card_image">
              <img src={image1} alt="Bannière à propos" />
            </div>
          </div>

          <div className="cards">
            <div className="card_title">
              <h3>Raquettes</h3>
            </div>
            <div className="card_image">
              <img src={image2} alt="Bannière à propos" />
            </div>
          </div>

          <div className="cards">
            <div className="card_title">
              <h3>Faune et Flore</h3>
            </div>
            <div className="card_image">
              <img src={image3} alt="Bannière à propos" />
            </div>
          </div>

          <div className="cards">
            <div className="card_title">
              <h3>Orientation</h3>
            </div>
            <div className="card_image">
              <img src={image4} alt="Bannière à propos" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Activitees;

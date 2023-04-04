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

      <div className="act_content">
        <div className="act_title">
          <h2>
            Voici une sélection des activitées que je propose. Je vous invite a
            passer le curseur sur les vignettes pour en savoir plus.
          </h2>
        </div>
        <div className="act_vignettes">
          <div className="cards">
            <div className="card_title">
              <h3>Randonnées</h3>
            </div>
            <div className="card_image">
              <FlipCard
                imageUrl={image1}
                textOverlay={
                  <p>
                    La randonnée a pris une grande place dans notre magnifique
                    massif vosgien. Je vous invite à découvrir les différents
                    sentiers de randonnées qui vous permettront de découvrir les
                    paysages et la faune et flore de notre région.
                  </p>
                }
              />
            </div>
          </div>

          <div className="cards">
            <div className="card_title">
              <h3>Raquettes</h3>
            </div>
            <div className="card_image">
              <FlipCard
                imageUrl={image2}
                textOverlay={
                  <p>
                    En hiver plutôt que de rester au chaud dans votre canapé,
                    venez découvrir avec moi les paysages enneigés de notre
                    belle vallée. Venez découvrir nos circuits balisé accompagné
                    d'un guide diplômé.
                  </p>
                }
              />
            </div>
          </div>

          <div className="cards">
            <div className="card_title">
              <h3>Faune et Flore</h3>
            </div>
            <div className="card_image">
              <FlipCard
                imageUrl={image3}
                textOverlay={
                  <p>
                    Suivez les traces de nos animaux sauvages et découvrez les
                    plantes qui nous entourent. Découvrez la multitude de
                    plantes et d'animaux qui peuplent notre région.
                  </p>
                }
              />
            </div>
          </div>

          <div className="cards">
            <div className="card_title">
              <h3>Orientation</h3>
            </div>
            <div className="card_image">
              <FlipCard
                imageUrl={image4}
                textOverlay={
                  <p>
                    L'orientation est une activité qui permet de se repérer dans
                    l'espace et peut être pratiquée en toute saison. Venez
                    découvrir les techniques de base de l'orientation et
                    apprenez à vous repérer dans l'espace.
                  </p>
                }
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Activitees;

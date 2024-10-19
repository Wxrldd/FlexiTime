import { Link } from 'react-router-dom';
import presentation from '../assets/presentmain.jpg';
import stars from '../assets/stars.png';
import drapeaufr from '../assets/drapeaufr.png'

const PresentHome = () => {
  return (
    <>
      <container className="present-main">
        <div className="present-main-left">
          <p className="title-main-home">La solution française de gestion pour les TPE/PME</p>
          <p className="p-main-home">
            Avec FlexiTime, gérez vos ventes, votre facturation, votre marketing et votre trésorerie sur une seule et même interface.
          </p>
          <div className="btn-main-home">
            <Link to="/demo">
              <button className="btn-main-right">Demander une démo</button>
            </Link>
            <Link to="/try">
              <button className="btn-main-try">Essayer gratuitement</button>
            </Link>
          </div>
        </div>
        <div className="present-mainimg-right">
          <img src={presentation} alt="Image notifications" className="presentation-main" />
        </div>
      </container>  
      <container className="content-main-present">
  <div className="badge-review-container">
    <div className="icon-badges-present">
      <img src={stars} alt="Logo de FlexiTime" className="badges-present" />
    </div>
    <div className="content-badge-avis">
      <div className="notes-container">
        <span className="notes-google">4,3</span><span>/5</span>
      </div>
      <span className="avis-google">300+ avis Google et Appvizer</span>
    </div>
  </div>
  <div className="badge-review-container">
    <div className="icon-badges-present">
      <img src={drapeaufr} alt="Logo de FlexiTime" className="badges-present" />
    </div>
      <p class="content-badges">Données hébergées<br /> en France</p>
  </div>
  <div className="badge-review-container">
    <div className="icon-badges-present">
      <img src={stars} alt="Logo de FlexiTime" className="badges-present" />
    </div>
      <p class="content-badges">Format<br /> Factur-X</p>
  </div>
  <div className="badge-review-container">
    <div className="icon-badges-present">
      <img src={stars} alt="Logo de FlexiTime" className="badges-present" />
    </div>
      <p class="content-badges">Conforme<br /> RGPD</p>
  </div>
</container>

    </>
  );
};

export default PresentHome;

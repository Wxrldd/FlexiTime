import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import presentlogin from "../assets/presentlogin.png";
import googleicon from "../assets/google.png";
import microsofticon from "../assets/microsoft.png";
import twittericon from "../assets/twitter.png";
const PageLogin = () => {
  return (
    <div className="content-login">
      <div className="container-left">
        <div className="content-header-left">
          <img src={logo} alt="Logo de FlexiTime" className="logo-header-left" />
          <Link to="/"><p>Revenir sur la page d'accueil</p></Link>
        </div>
        <div className="content-main-left">
          <p className="title-main-left">Bienvenue sur Flexitime</p>
          <p className="content-left-p">Pilotez intelligemment votre entreprise avec Sellsy : Prospection & Vente, Facturation & Gestion, Gestion de trésorerie.</p>
          <img src={presentlogin} alt="Image de présentation" />
          <p className="bottom-left-p">+18,000 entreprises utilise notre application.</p>
        </div>
      </div>
      <div className="container-right">
        <div className="content-container-right">
          <div className="header-content-right">
            <p className="header-title-right">Se connecter</p>
          </div>
          <form method="post">
            <label>Email :
              <input type="email" name="email" />
            </label>
            <label>Mot de passe :
              <input type="password" name="password" />
            </label>
            <Link to="/" class="forgot-password">Mot de passe oublié ?</Link>
            <input type="submit" value="Se connecter" />
          </form>
          <div class="separator">
            <span>Ou se connecter avec</span>
          </div>
          <div className="auth-buttons">
            <Link to="/" className="auth-button google"><img src={googleicon} alt="Google" className="icon" /> Google</Link>
            <Link to="/" className="auth-button microsoft"><img src={microsofticon} alt="Microsoft" className="icon" /> Microsoft</Link>
            <Link to="/" className="auth-button twitter"><img src={twittericon} alt="Twitter" className="icon" /> Twitter</Link>
          </div>
          <div className="container-signin">
          <p>Vous n'avez pas encore de compte ?</p><Link to="/" class="lien-signin">S'inscrire</Link>
          </div>
          <div className="container-policy">
          <p>Regarder notre</p><Link to="/" class="lien-policy">Private policy</Link>
          </div>
          </div>
      </div>
    </div>
  );
};

export default PageLogin;

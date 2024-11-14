import logo from '../assets/logo.png';
import notifs from '../assets/notifs.png';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
  <div className="head">
    <div className="contact-buttons">
    <Link to="/login"><button className="btn-head-connect">Me connecter</button></Link>
    <Link to="/contact"><button className="btn-head-contact">Nous contacter</button></Link>
    </div>
    <header className="header-nav">
    <div className="nav-left">
    <img src={logo} alt="Logo de FlexiTime" className="logo-F" />
    <Link to="/products"><button className="btn-nav-left">Produits</button></Link>
    <Link to="/prices"><button className="btn-nav-left">Tarifs</button></Link>
    <Link to="/abouts"><button className="btn-nav-left">A propos</button></Link>
    <Link to="/dashboard"><button className="btn-nav-left">Mon Dashboard</button></Link>
    </div>
    <div className="nav-right">
    <img src={notifs} alt="Logo de FlexiTime" className="notifs-head" />
    <Link to="/demo"><button className="btn-nav-right">Demander une démo</button></Link>
    <Link to="/try"><button className="btn-nav-try">Essai gratuit</button></Link>
    </div>
    </header>
  </div>
  );
};

export default NavBar;

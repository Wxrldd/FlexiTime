import logo from '../assets/logo.png';

const Footer = () => {
  return (
    <div className="footer">
      <div className="content-footer">
        <img src={logo} alt="Logo de FlexiTime" className="logo-footer" />
        <div className="footer-middle">
          <div><p>Flexitime © 2024. Tous droits réservés.</p></div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

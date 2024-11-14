import { Link } from 'react-router-dom';
import imgcalculator from '../assets/calculator.png';
import img480 from '../assets/img480.jpg';


const MainHome = () => {
  return (
    <>
      <p className="main-home-title">Pourquoi choisir FlexiTime ?</p>
      <p className="main-home-p">En tant que responsable d'une PME, la gestion des congés
        et des plannings d'équipe peut rapidement devenir un casse-tête. FlexiTime vous offre
        une solution automatisée pour faciliter ce processus et vous permettre de vous concentrer
        sur ce qui compte vraiment : la croissance de votre entreprise !</p>
      <div class="content-main-home">
        <div class="feature-main-home">
          <img src={imgcalculator} alt="Logo de FlexiTime" className="notifs-head" />
          <p className="main-title">Optimisez la gestion des congés</p>
          <p className="main-p">Automatisez la gestion des demandes de congés avec un système simple et intuitif. Plus besoin de feuilles Excel ou de mails interminables. FlexiTime vous fait gagner du temps et évite les erreurs de planification.</p>
          <p className="main-p">Un gain de temps pour vous et votre comptable !</p>
        </div>
        <div class="feature-main-home">
          <img src={imgcalculator} alt="Logo de FlexiTime" className="notifs-head" />
          <p className="main-title">Maintenez un équilibre parfait dans les équipes</p>
          <p className="main-p">Grâce à la planification automatique, assurez-vous que chaque équipe dispose d’une couverture suffisante, même en période de vacances. FlexiTime garantit la présence minimale nécessaire pour chaque poste.</p>
          <p className="main-p">Un gain de temps pour vous et votre comptable !</p>
        </div>
        <div class="feature-main-home">
          <img src={imgcalculator} alt="Logo de FlexiTime" className="notifs-head" />
          <p className="main-title">Simplifiez la gestion des horaires</p>
          <p className="main-p">Générez des plannings optimisés en fonction des disponibilités des employés et des besoins de l’entreprise. FlexiTime s’adapte aux horaires variables et assure une organisation fluide, sans surcharge de travail.</p>
          <p className="main-p">Un gain de temps pour vous et votre comptable !</p>
        </div>
        <div class="feature-main-home">
          <img src={imgcalculator} alt="Logo de FlexiTime" className="notifs-head" />
          <p className="main-title">Des rapports détaillés pour un suivi optimal</p>
          <p className="main-p">Analysez les historiques de congés et les temps de travail pour chaque employé avec des rapports clairs et détaillés. FlexiTime vous aide à garder une vue d’ensemble pour améliorer la gestion de vos ressources humaines.</p>
          <p className="main-p">Un gain de temps pour vous et votre comptable !</p>
        </div>
      </div>

      <div className="features-ideas-content">
        <div className="ideas-main-img">
          <img src={img480} alt="Logo de FlexiTime" className="img-main" />
        </div>
        <div className="content-ideas-main">
          <div className="title-space">
            <img src={imgcalculator} alt="Logo de FlexiTime" className="icon" />
            <p className="title-ideas-main">PLANIFIER</p>
          </div>
          <p className="subtitle">Simplifier la planification de vos équipes</p>
          <p className="title-ideas">
            Optimisez la création des plannings avec FlexiTime. Générez des horaires automatiquement en fonction des absences, des disponibilités et des besoins spécifiques de votre entreprise. Simplifiez la gestion des plannings, gagnez du temps et assurez une couverture optimale pour chaque poste.
          </p>
          <ul className="ideas-list">
            <li>✅ Création de plannings automatiques</li>
            <li>✅ Suivi des absences et des congés en temps réel</li>
            <li>✅ Optimisation des ressources selon les besoins</li>
            <li>✅ Amélioration de la productivité</li>
          </ul>
          <Link to="/">
            <button className="btn-ideas-try">Découvrez FlexiTime Planifier</button>
          </Link>
        </div>
      </div>

      <div className="features-ideas-content inverse">
        <div className="ideas-main-img">
          <img src={img480} alt="Logo de FlexiTime" className="img-main" />
        </div>
        <div className="content-ideas-main">
          <div className="title-space">
            <img src={imgcalculator} alt="Logo de FlexiTime" className="icon" />
            <p className="title-ideas-main">PLANIFIER</p>
          </div>
          <p className="subtitle">Simplifier la planification de vos équipes</p>
          <p className="title-ideas">
            Optimisez la création des plannings avec FlexiTime. Générez des horaires automatiquement en fonction des absences, des disponibilités et des besoins spécifiques de votre entreprise. Simplifiez la gestion des plannings, gagnez du temps et assurez une couverture optimale pour chaque poste.
          </p>
          <ul className="ideas-list">
            <li>✅ Création de plannings automatiques</li>
            <li>✅ Suivi des absences et des congés en temps réel</li>
            <li>✅ Optimisation des ressources selon les besoins</li>
            <li>✅ Amélioration de la productivité</li>
          </ul>
          <Link to="/">
            <button className="btn-ideas-try">Découvrez FlexiTime Planifier</button>
          </Link>
        </div>
      </div>
      <div className="features-ideas-content">
        <div className="ideas-main-img">
          <img src={img480} alt="Logo de FlexiTime" className="img-main" />
        </div>
        <div className="content-ideas-main">
          <div className="title-space">
            <img src={imgcalculator} alt="Logo de FlexiTime" className="icon" />
            <p className="title-ideas-main">PLANIFIER</p>
          </div>
          <p className="subtitle">Simplifier la planification de vos équipes</p>
          <p className="title-ideas">
            Optimisez la création des plannings avec FlexiTime. Générez des horaires automatiquement en fonction des absences, des disponibilités et des besoins spécifiques de votre entreprise. Simplifiez la gestion des plannings, gagnez du temps et assurez une couverture optimale pour chaque poste.
          </p>
          <ul className="ideas-list">
            <li>✅ Création de plannings automatiques</li>
            <li>✅ Suivi des absences et des congés en temps réel</li>
            <li>✅ Optimisation des ressources selon les besoins</li>
            <li>✅ Amélioration de la productivité</li>
          </ul>
          <Link to="/">
            <button className="btn-ideas-try">Découvrez FlexiTime Planifier</button>
          </Link>
        </div>
      </div>

    </>
  );
};

export default MainHome;

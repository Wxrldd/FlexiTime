import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import userImg from '../assets/logo.png';

const SideBar = () => {
  // État pour contrôler si la sidebar est active ou non
  const [isSidebarActive, setIsSidebarActive] = useState(false);

  // Fonction pour basculer l'état de la sidebar
  const toggleSidebar = () => {
    setIsSidebarActive(!isSidebarActive);
  };

  return (
    <>
      <div className={`sidebar ${isSidebarActive ? 'active' : ''}`}>
        <div className="top">
          <div className="logo">
            <i className="bx bxl-codepen"></i>
            <span>Flexitime</span>
          </div>
          {/* Bouton pour basculer la sidebar */}
          <i className="bx bx-menu" id="btn" onClick={toggleSidebar}></i>
        </div>
        <div className="user">
          <img src={userImg} alt="votre profil" className="user-img" />
          <div>
          <p className="bold">Client B.</p>
          <p>Administrateur</p>
        </div>
        </div>
        <ul>
          <li>
            <Link to="/"><i className="bx bxs-dashboard"></i>
              <span className="nav-item">Dashboard</span>
            </Link>
            <span className="tooltip">Dashboard</span>
          </li>
          <li>
            <Link to="/"><i className="bx bxs-shopping-bag"></i>
              <span className="nav-item">Products</span>
            </Link>
            <span className="tooltip">Products</span>
          </li>
          <li>
            <Link to="/"><i className="bx bx-list-check"></i>
              <span className="nav-item">Categories</span>
            </Link>
            <span className="tooltip">Categories</span>
          </li>
          <li>
            <Link to="/"><i className="bx bxs-food-menu"></i>
              <span className="nav-item">Orders</span>
            </Link>
            <span className="tooltip">Orders</span>
          </li>
          <li>
            <Link to="/"><i className="bx bx-body"></i>
              <span className="nav-item">Customers</span>
            </Link>
            <span className="tooltip">Customers</span>
          </li>
          <li>
            <Link to="/"><i className="bx bx-location-plus"></i>
              <span className="nav-item">Shipping</span>
            </Link>
            <span className="tooltip">Shipping</span>
          </li>
          <li>
            <Link to="/"><i className="bx bx-cog"></i>
              <span className="nav-item">Settings</span>
            </Link>
            <span className="tooltip">Settings</span>
          </li>
          <li>
            <Link to="/"><i className="bx bx-log-out"></i>
              <span className="nav-item">Logout</span>
            </Link>
            <span className="tooltip">Logout</span>
          </li>
        </ul>
      </div>
      <div className="main-content">
        <div className="container">
          <h1>Flexitime</h1>
          <h1>Right Side</h1>
        </div>
      </div>
    </>
  );
};

export default SideBar;

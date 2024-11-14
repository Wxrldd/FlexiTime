import React from 'react';
import Viewnav from '../views/nav';
import Viewcontenthome from '../views/presenthome';
import Viewmainhome from '../views/mainhome';
import ViewFooter from '../views/footer';

const Home = () => {
  return (
    <div>
      <Viewnav />
      <Viewcontenthome />
      <Viewmainhome />
      <ViewFooter />
    </div>
  );
};

export default Home;

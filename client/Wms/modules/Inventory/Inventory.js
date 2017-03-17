import React from 'react';
import Helmet from 'react-helmet';

import ListView from './../../components/ListView/ListView';
import DocumentContainer from './../../components/DocumentContainer/DocumentContainer';
import Navigation from './../../components/Navigation/Navigation';

const Inventory = () => {
  return (
    <div>
      <Helmet title="Inventory" />
      <ListView />
      <DocumentContainer />
      <Navigation />
    </div>
  );
};

export default Inventory;

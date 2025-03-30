import React from 'react';
import NotFound from './components/NotFound';
import PageTitle from './utils/PageTitle';

const Home = () => {
  return (
    <div className="">
      <PageTitle mytext="404" />
      <NotFound/>
    </div>
  );
};

export default Home;
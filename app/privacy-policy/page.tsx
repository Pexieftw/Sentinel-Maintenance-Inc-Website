import React from 'react';

import PageTitle from '../utils/PageTitle';

import PrivacyPolicy from '../pages/PrivacyPolicy';
const PrivacyPolicyPage = () => {
  return (
    <div className="">
      <PageTitle mytext="Privacy & Policy" />
      <PrivacyPolicy/>
    </div>
  );
};

export default PrivacyPolicyPage;
"use client"

import { useEffect } from 'react';

const PageTitle = ({ mytext }) => {
  useEffect(() => {
    document.title = `Sentinel Maintenance Inc | ${mytext} | SMI.ca`;
  }, [mytext]);

  return null;
};

export default PageTitle;
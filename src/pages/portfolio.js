import React from 'react';
import Layout from '@common/Layout';
import resultsStyles from '../components/sections/results.module.css';
import Portfolio from '../components/sections/Portfolio';

const PortfolioPage = () => (
  <Layout>
    <Portfolio />
    <div className={resultsStyles.space}></div>
  </Layout>
);

export default PortfolioPage;
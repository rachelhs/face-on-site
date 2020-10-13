import React from 'react';
import Layout from '@common/Layout';
import SupportedBy from '@sections/SupportedBy';
import Results from '@sections/Results';
import resultsStyles from '../components/sections/results.module.css';

const ResultsPage = () => (
  <Layout>
    <Results />
    <SupportedBy />
    <div className={resultsStyles.space}></div>
  </Layout>
);

export default ResultsPage;
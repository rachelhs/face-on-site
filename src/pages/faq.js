import React from 'react';
import Layout from '@common/Layout';
import FAQ from '@sections/FAQ';
import resultsStyles from '../components/sections/results.module.css';

const FAQPage = () => (
  <Layout>
    <FAQ />
    <div className={resultsStyles.space}></div>
  </Layout>
);

export default FAQPage;
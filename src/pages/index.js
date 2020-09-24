import React from 'react';

import Layout from '@common/Layout';
import Navbar from '@common/Navbar';
import About from '@sections/About';
import HowTo from '@sections/HowTo';
import Disguises from '@sections/Disguises';
import FAQ from '@sections/FAQ';
import PrivacyStatement from '@sections/PrivacyStatement';
import SupportedBy from '@sections/SupportedBy';

const IndexPage = () => (
  <Layout>
    <Navbar />
    <About />
    <HowTo />
    <Disguises />
    <FAQ />
    <PrivacyStatement />
    <SupportedBy />
  </Layout>
);

export default IndexPage;

import React from 'react';

import Layout from '@common/Layout';
import Images from '@sections/Images';
import About from '@sections/About';
import HowTo from '@sections/HowTo';
import Disguises from '@sections/Disguises';
import FAQContainer from '@sections/FAQContainer';
import PrivacyStatement from '@sections/PrivacyStatement';
import SupportedBy from '@sections/SupportedBy';
import ResultsContainer from '@sections/ResultsContainer';
import Contact from '@sections/Contact';

const IndexPage = () => (
  <Layout>
    <Images />
    <HowTo />
    <Disguises />
    <About />
    <FAQContainer />
    <ResultsContainer />
    <PrivacyStatement />
    <Contact />
    <SupportedBy />
  </Layout>
);

export default IndexPage;

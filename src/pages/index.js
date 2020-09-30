import React from 'react';

import Layout from '@common/Layout';
import Images from '@sections/Images';
import About from '@sections/About';
import HowTo from '@sections/HowTo';
import Disguises from '@sections/Disguises';
import FAQ from '@sections/FAQ';
import PrivacyStatement from '@sections/PrivacyStatement';
import SupportedBy from '@sections/SupportedBy';

const IndexPage = () => (
  <Layout>
    <Images />
    <HowTo />
    <Disguises />
    <About />
    <FAQ />
    <PrivacyStatement />
    <SupportedBy />
  </Layout>
);

export default IndexPage;

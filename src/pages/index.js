import React from 'react';

import Layout from '@common/Layout';
import Navbar from '@common/Navbar';
import About from '@sections/About';
import HowTo from '@sections/HowTo';
import Disguises from '@sections/Disguises';

const IndexPage = () => (
  <Layout>
    <Navbar />
    <About />
    <HowTo />
    <Disguises />
  </Layout>
);

export default IndexPage;

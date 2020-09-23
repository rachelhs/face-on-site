import React from 'react';

import Layout from '@common/Layout';
import AltNavbar from '@common/Navbar/AltNavbar';
import NemoBot from '../components/chatbots/Nemo';

const NemoPage = () => (
  <Layout>
    <AltNavbar />
    <NemoBot />
</Layout>
);

export default NemoPage;

import React from 'react';
import Layout from '@common/Layout';
import AltNavbar from '@common/Navbar/AltNavbar';
import EcoBot from '../components/chatbots/Eco';

const EcoPage = () => (
  <Layout>
    <AltNavbar />
    <EcoBot />
</Layout>
);

export default EcoPage;

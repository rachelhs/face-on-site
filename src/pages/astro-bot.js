import React from 'react';
import Layout from '@common/Layout';
import AltNavbar from '@common/Navbar/AltNavbar';
import AstroBot from '../components/chatbots/Astro';

const AstroPage = () => (
  <Layout>
    <AltNavbar />
    <AstroBot />
</Layout>
);

export default AstroPage;

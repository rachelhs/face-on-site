import React from 'react';

import Layout from '@common/Layout';
import Navbar from '@common/Navbar';
import Header from '@sections/Header';
import Book from '@sections/Book';
import Project from '@sections/Project';
import Partners from '@sections/Partners';
import Team from '@sections/Team';
import Footer from '@sections/Footer';

const IndexPage = () => (
  <Layout>
    <Navbar />
    <Header />
    <Project />
    <Book />
    <Team />
    <Partners />
    <Footer />
  </Layout>
);

export default IndexPage;

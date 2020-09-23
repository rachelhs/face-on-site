import React from 'react';
import Layout from '@common/Layout';
import AltNavbar from '@common/Navbar/AltNavbar';
import PostieBot from '../components/chatbots/Postie';

const PostiePage = () => (
  <Layout>
    <AltNavbar />
    <PostieBot />
</Layout>
);

export default PostiePage;

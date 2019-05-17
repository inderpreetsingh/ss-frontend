import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';
import MainScreen from '../components/MainScreen';
import Features from '../components/Features';
import Footer from '../components/Footer';

import 'normalize.css';
import '../styles/main.scss';

// TODO: Make face of women visible.
// TODO: Animate sub-features rather than abrupt changes
// TODO: Line-height in fixed heading
// TODO: Fixed stuff takes a lot of space

const IndexPage = () => (
  <Layout>
    <SEO title="Skillshape Landing Page" />
    <MainScreen />
    <Features />
    <Footer />
  </Layout>
);

export default IndexPage;

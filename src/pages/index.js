import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';
import MainScreen from '../components/MainScreen';
import Features from '../components/Features';
import Footer from '../components/Footer';

import 'normalize.css';
import '../styles/main.scss';

// TODO: No parallax onblur.
// TODO: Svg.
// TODO: Adaptive work.
// TODO: Slider.


const IndexPage = () => (
  <Layout>
    <SEO title="Skillshape Landing Page" />
    <MainScreen />
    <Features />
    <Footer />
  </Layout>
);

export default IndexPage;

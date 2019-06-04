import React from 'react';
import smoothscroll from 'smoothscroll-polyfill';

import Layout from '../components/Layout';
import SEO from '../components/Seo';
import MainScreen from '../components/MainScreen';
import Features from '../components/Features';
import Footer from '../components/Footer';
import { TEXT } from '../locals';

import 'normalize.css';
import '../styles/main.scss';

const { MAIN } = TEXT;

// TODO: Make PropTypes everywhere.
// TODO: Enable smooth scroll for all pages, not only for this one.

// Make smooth scroll for Edge and Safari.
smoothscroll.polyfill();

const IndexPage = () => (
  <Layout>
    <SEO title={MAIN.SEO_TITLE} />
    <MainScreen />
    <Features />
    <Footer />
  </Layout>
);

export default IndexPage;

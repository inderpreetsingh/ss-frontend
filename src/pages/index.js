import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';

import 'normalize.css';
import '../styles/main.scss';

const IndexPage = () => (
  <Layout>
    <SEO title="Skillshape Landing Page" />
    <h1> Hello world! </h1>
  </Layout>
);

export default IndexPage;

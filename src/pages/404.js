import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';
import { TEXT } from '../locals';

const { NOT_FOUND } = TEXT;

const NotFoundPage = () => (
  <Layout>
    <SEO title={NOT_FOUND.SEO_TITLE} />
    <h1>{NOT_FOUND.TITLE}</h1>
    <p>{NOT_FOUND.BODY}</p>
  </Layout>
);

export default NotFoundPage;

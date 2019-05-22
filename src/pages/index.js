import React from 'react';

import Layout from '../components/Layout/Layout';
import SEO from '../components/Seo/Seo';
import Form from '../components/TheForm/TheForm';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <p id="description">Welcome! Please provide your information. Thanks!</p>
    <Form />
  </Layout>
);

export default IndexPage;

import * as React from 'react';
import type { HeadFC, PageProps } from 'gatsby';
import Layout from '../components/Layout';
import Header from '../components/Header';
import SubHeader from '../components/SubHeader';
import Social from '../components/Social';

const IndexPage: React.FC<PageProps> = () => {
  return (
    <Layout>
      <>
        <Header firstName={'Dylan'} lastName={'Davenport'} />
        <SubHeader text="Front-End Developer and UX Enthusiast" />
        <Social />
      </>
    </Layout>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;

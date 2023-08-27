import * as React from 'react';
import type { HeadFC, PageProps } from 'gatsby';
import Layout from '../components/Layout';
import Header from '../components/Header';
import SubHeader from '../components/SubHeader';
import Social from '../components/Social';
import IntroText from '../components/IntroText';

// hooks
import { useGetIcons } from '../hooks/use-get-icons';

const IndexPage: React.FC<PageProps> = () => {
  const { icons } = useGetIcons();

  return (
    <Layout>
      <>
        <Header firstName={'Dylan'} lastName={'Davenport'} />
        <SubHeader text="Front-End Developer and UX Enthusiast" />
        <Social icons={icons} />
        <IntroText
          text="I'm Dylan, a front-end developer with a passion for developing clean and intuitive user interface's with an
          emphasis on accessibility and user friendliness. I specialize in using semantic markup along with JavaScript to
          make dynamic data driven content."
        />
      </>
    </Layout>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;

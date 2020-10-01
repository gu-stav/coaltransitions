import { graphql } from 'gatsby';
import { Helmet } from 'react-helmet';
import React from 'react';

import Constraint from '../../components/constraint';
import NewsList from '../../components/NewsList';
import withLayout from '../../components/with-layout';

import style from './style';

const Page = ({ data: { allWpNewsEntry } }) => (
  <>
    <Helmet title="News" />

    <div className="container">
      <style jsx>{style}</style>

      <Constraint topLevel>
        <NewsList {...allWpNewsEntry} />
      </Constraint>
    </div>
  </>
);

export default withLayout(Page);

export const query = graphql`
  query {
    allWpNewsEntry {
      ...NewsList
    }
  }
`;

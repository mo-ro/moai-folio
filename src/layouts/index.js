import React from 'react'
import PropTypes from 'prop-types'
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import { ApolloProvider } from 'react-apollo';
import ApolloClient from "apollo-boost";
import Helmet from 'react-helmet'
import Header from '../components/header'
import FixedHeader from '../components/FixedHeader'

import '../style/index.scss'

const client = new ApolloClient({
  uri: 'https://api.github.com/graphql',
  request: operation => {
    operation.setContext({
      headers: {
        authorization: `Bearer ${
          process.env.GITHUB_PERSONAL_ACCESS_TOKEN
        }`
      }
    });
  }
});

        console.log(client)

const query = gql`
  {
  repository(owner: "mo-ro", name: "moai-folio") {
    name
    description
    issues(
      orderBy: { field: CREATED_AT, direction: DESC }
      first: 3
      states: [OPEN]
    ) {
      totalCount
      pageInfo {
        startCursor
        endCursor
        hasPreviousPage
        hasNextPage
      }
      nodes {
        author {
          avatarUrl
          login
          resourcePath
          url
        }
        id
        number
        title
        body
        createdAt
        updatedAt
        url
      }
    }
  }
}
`;

client
  .query({
    query
  })
  .then(result => console.log(result));

const Layout = ({ children, data, location }) => (
  <div className="grobal-wrapper">
    <Helmet
      title="moai"
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]}
    />
    {location.pathname === "/" ? <Header /> : <FixedHeader />}
    <ApolloProvider client={client}>
      <div className="grobal-container">
        {children()}
      </div>
    </ApolloProvider>
  </div>

)

Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout

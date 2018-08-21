import React from 'react'
import Link from 'gatsby-link'
import ApolloClient from "apollo-boost";
import gql from "graphql-tag";
import { ApolloProvider } from 'react-apollo';
import { Query } from 'react-apollo';
import PageHeading from '../components/PageHeading'
import WorkList from '../components/WorkList'
import Button from '../components/Button'

const query = gql`
  {
  repository(owner: "mo-ro", name: "moai-folio") {
    name
    description
    issues(
      orderBy: { field: CREATED_AT, direction: DESC }
      first: 20
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

class Works extends React.Component {
  render() {
    return (
      <Query query={query}>
        {({loading, data}) => {
          if (loading) return <p>Loading...</p>;
          const issues = data.repository.issues.nodes;
          return (
            <div className="works">
              <PageHeading mainHeading="Works" subHeading="秀逸な作品集" />
              <WorkList issues={issues} />
              <div className="about-buttons">
                <div className="button-wrapper">
                  <h3 className="about-button-heading">どんな人？</h3>
                  <Button text="About" to="/about/"/>
                </div>
                <div className="about-button-wrapper">
                  <h3 className="about-button-heading">れんらくをとってみる</h3>
                  <Button text="Contact" to="/contact/"/>
                </div>
              </div>
            </div>
          )
        }}
      </Query>
    )
  }
}

export default Works
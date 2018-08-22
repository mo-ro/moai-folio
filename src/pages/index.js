import React from 'react'
import Link from 'gatsby-link'
import ApolloClient from "apollo-boost";
import gql from "graphql-tag";
import { ApolloProvider } from 'react-apollo';
import { Query } from 'react-apollo';
import ScrollIcon from '../components/ScrollIcon';
import LinkButton from '../components/Button';
import WorkList from '../components/WorkList';
//img
import HeroImage from "../images/top-hero.png";

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

class IndexPage extends React.Component {
  render() {
    return (
      <Query query={query}>
        {({loading, data}) => {

          if (loading) return <p>Loading...</p>;
          const issues = data.repository.issues.nodes;

          return (
            <div className="contetn-wrapper">
              {/* // webgl化予定 */}
              <div className="top-hero">
                <div className="top-hero-text-area">
                <div id="bodymovin"></div>
                  <h1 className="top-title">Kotaro Morooka</h1>
                  <h3 className="top-sub-title">Frontend Engineer / Designer<span>(なりたい)</span></h3>
                </div>
                <div className="top-hero-scroll-area">
                  <ScrollIcon />
                </div>
              </div>
              <div className="top-about">
                <h2 className="top-heading">About</h2>
                <div className="top-about-text-area">
                  <span className="font36">どうも、</span><br/>
                  <span className="font12">電気通信大学3年の</span><span className="font48"> 師岡</span><span className="font24">(もろおか) </span><span className="font36">と申します。</span><br/>
                  普段はフロントエンド 、趣味程度にデザインや映像制作も行っています。<br/>
                  将来はwebにとどまることのないクリエイティブを行えるモアイになれたらいいなと思っています。
                </div>
                <div className="button-wrapper">
                  <h3 className="about-button-heading">もろおかを見てみる</h3>
                  <LinkButton text="About" to="/about/"/>
                </div>
              </div>
              <div className="top-works">
                <h2 className="top-heading">Works</h2>
                <h3 className="top-works-heading">秀逸なモアイたち</h3>
                <WorkList issues={issues} />
                <div className="button-wrapper">
                  <h3 className="about-button-heading">もあいの一覧</h3>
                  <LinkButton text="Works" to="/works/"/>
                </div>
              </div>
              <div className="top-contact">
                <h2 className="top-heading">Contact</h2>
                <p className="top-contact-text">
                  興味、<br/>
                  持っていただけましたか？<br/>
                  感想だけでもいただけると幸いです。
                </p>
                <div className="button-wrapper">
                  <h3 className="about-button-heading">かんそうを述べる</h3>
                  <LinkButton text="Contact" to="/contact/"/>
                </div>
              </div>
            </div>
          )
        }}
      </Query>
    )
  }
}

export default IndexPage

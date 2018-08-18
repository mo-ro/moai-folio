import React from 'react'
import Link from 'gatsby-link'
import ScrollIcon from '../components/ScrollIcon';

//img
import HeroImage from "../images/top-hero.png";

class IndexPage extends React.Component {
  render() {
    return (
      <div className="contetn-wrapper">
        {/* // webgl化予定 */}
        <div className="top-hero">
          <div className="top-hero-text-area">
            <h1 className="top-title">Kotaro Morooka</h1>
            <h3 className="top-sub-title">Frontend Engineer / Designer<span>(なりたい)</span></h3>
          </div>
          <div className="top-hero-scroll-area">
            <ScrollIcon />
          </div>
        </div>
        <div className="top-about"></div>
      </div>
      
    )
  }
}

export default IndexPage

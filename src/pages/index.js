import React from 'react'
import Link from 'gatsby-link'
import ScrollIcon from '../components/ScrollIcon';
import LinkButton from '../components/Button';
import WorkList from '../components/WorkList';

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
          <WorkList />
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
  }
}

export default IndexPage

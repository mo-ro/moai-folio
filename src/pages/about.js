import React from 'react'
import Link from 'gatsby-link'
import PageHeading from '../components/PageHeading'
import Button from '../components/Button'

import TwitterImage from '../images/twitter.svg';
import GithubImage from '../images/github.svg';
import FacebookImage from '../images/facebook.svg';

class About extends React.Component {
  render() {
    return (
      <div className="about">
        <PageHeading mainHeading="About" subHeading="どうも、師岡です。" />
        <div className="about-content">
          <div className="about-left">
            <img src="#" alt="" className="about-profile-img"/>
            <ul className="about-links">
              <li className="about-link-item">
                <Link to="about"><img src={TwitterImage} alt=""/></Link>
              </li>
              <li className="about-link-item">
                <Link to="about"><img src={GithubImage} alt=""/></Link>
              </li>
              <li className="about-link-item">
                <Link to="about"><img src={FacebookImage} alt=""/></Link>
              </li>
            </ul>
          </div>
          <div className="about-right">
            <h1 className="about-name">師岡 紘太郎<span>(もろおか こうたろう)</span></h1>
            <ul className="about-profile-list">
              <li className="about-profile-item">
                <h4 className="about-profile-left">University</h4>
                <div className="about-profile-right">電気通信大学 情報理工学域 社会情報学科</div>
              </li>
              <li className="about-profile-item">
                <h4 className="about-profile-left">Skills</h4>
                <div className="about-profile-right">HTML / CSS / JavaScript / React / illustrator / Photoshop / After Effects</div>
              </li>
              <li className="about-profile-item">
                <h4 className="about-profile-left">Hobbies</h4>
                <div className="about-profile-right">ダンス / 映画 / CSS / Tシャツ / モアイ / モーショングラフィクス</div>
              </li>
              <li className="about-profile-item">
                <h4 className="about-profile-left">Career</h4>
                <div className="about-profile-right">
                  <ul className="about-career">
                    <li className="about-career-item">
                      <span>2016年4月</span>電気通信大学入学
                    </li>
                    <li className="about-career-item">
                      <span>2017年6月</span>フロントエンドと運命的な出会いを果たす
                    </li>
                    <li className="about-career-item">
                      <span>2018年2月</span>退学を決意
                    </li>
                    <li className="about-career-item">
                      <span>2018年2月</span>退学を決意
                    </li>
                    <li className="about-career-item">
                      <span>2018年3月</span>カナダへ留学
                    </li>
                    <li className="about-career-item">
                      <span>2018年5月</span>帰国
                    </li>
                    <li className="about-career-item">
                      <span>以下予定</span>—————————————————————————————————
                    </li>
                    <li className="about-career-item">
                      <span>2018年10月</span>カナダへ再度留学
                    </li>
                    <li className="about-career-item">
                      <span>2019年3月</span>帰国
                    </li>
                    <li className="about-career-item">
                      <span>2019年9月</span>BC州BCITに入学
                    </li>
                    <li className="about-career-item">
                      <span>2020年8月</span>BCIT卒業
                    </li>
                    <li className="about-career-item">
                      <span>2021年8月</span>カナダ人になる
                    </li>
                  </ul>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className="about-buttons">
          <div className="button-wrapper">
            <h3 className="about-button-heading">さくひんを見てみる</h3>
            <Button text="Works" to="/works/"/>
          </div>
          <div className="about-button-wrapper">
            <h3 className="about-button-heading">れんらくをとってみる</h3>
            <Button text="Contact" to="/contact/"/>
          </div>
        </div>
      </div>
    )
  }
}

export default About
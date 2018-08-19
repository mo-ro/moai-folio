import React from 'react'
import Link from 'gatsby-link'

//img
import TwitterImage from '../images/twitter.svg';
import GithubImage from '../images/github.svg';
import FacebookImage from '../images/facebook.svg';

class Header extends React.Component {
  render() {
    return (
      <header className="grobal-header grobal-header-fixed">
        <nav className="grobal-header-navigation grobal-header-navigation-fixed">
          <ul className="grobal-header-link-list">
            <li className="grobal-header-link-item">
              <Link to="about">About</Link>
            </li>
            <li className="grobal-header-link-item">
              <Link to="Works">Works</Link>
            </li>
            <li className="grobal-header-link-item">
              <Link to="Contact">Contact</Link>
            </li>
          </ul>
          <ul className="grobal-header-icons">
            <li className="grobal-header-link-item">
              <Link to="about"><img src={TwitterImage} alt=""/></Link>
            </li>
            <li className="grobal-header-link-item">
              <Link to="about"><img src={GithubImage} alt=""/></Link>
            </li>
            <li className="grobal-header-link-item">
              <Link to="about"><img src={FacebookImage} alt=""/></Link>
            </li>
          </ul>
        </nav>
      </header>
    )
  }
}

export default Header

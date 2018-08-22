import React from 'react'
import Link from 'gatsby-link'
import ClassNames from 'classnames';

//img
import TwitterImage from '../images/twitter.svg';
import GithubImage from '../images/github.svg';
import FacebookImage from '../images/facebook.svg';

import bodymovin from '../libs/bodymoovin';
import animationData from '../libs/data.json';

// var animData = {
//     container: document.getElementById('bodymovin'),
//         renderer: 'svg',
//         loop: true,
//         autoplay: true,
//         animationData: animationData
// };
// var anim = bodymovin.loadAnimation(animData);

class Header extends React.Component {

  constructor() {
    super();
    this.scroll;
    this.state = {
      headerFixed: false,
      navigationFixed: false,
    }
  }

  componentDidMount() {
    window.addEventListener('scroll', this.scrollTop);
  }

  scrollTop = (): number => {
    this.scroll = Math.max(
      window.pageYOffset,
      document.documentElement.scrollTop,
      document.body.scrollTop);

    if(this.scroll > 672 && !this.state.headerFixed) {
      this.setState({headerFixed: true})
    }else if(this.scroll < 672 && this.state.headerFixed) {
      this.setState({headerFixed: false})
    }
    
    if(this.scroll > 450 && !this.state.navigationFixed) {
      this.setState({navigationFixed: true})
    }else if(this.scroll < 450 && this.state.navigationFixed) {
      this.setState({navigationFixed: false})
    }
  };


  render() {
    const headerClass = ClassNames({
      "grobal-header": true,
      "grobal-header-fixed": this.state.headerFixed
    });
    const navigationClass = ClassNames({
      "grobal-header-navigation": true,
      "grobal-header-navigation-fixed": this.state.navigationFixed
    });
    return (
      <header className={headerClass}>
        <nav className={navigationClass}>
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

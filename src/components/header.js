import React from 'react'
import Link from 'gatsby-link'
import ClassNames from 'classnames';

class Header extends React.Component {

  constructor() {
    super();
    this.scroll;
    this.state = {
      headerFixed: false,
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
  };


  render() {
    const headerClass = ClassNames({
      "grobal-header": true,
      "grobal-header-fixed": this.state.headerFixed
    })
    return (
      <div className={headerClass}></div>
    )
  }
}

export default Header

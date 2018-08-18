import React from 'react'
import Link from 'gatsby-link'

class Header extends React.Component {
  render() {
    return (
      <div>{this.props.siteTitle}</div>
    )
  }
}

export default Header

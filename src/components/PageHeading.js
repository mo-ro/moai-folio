import React from 'react'
import Link from 'gatsby-link'

class PageHeading extends React.Component {
  render() {
    return (
      <Link to="/">
        <div className="page-heading">
          <h2 className="page-heading-main">{this.props.mainHeading}</h2>
          <h3 className="page-heading-sub">{this.props.subHeading}</h3>
        </div>
      </Link>
    )
  }
}

export default PageHeading
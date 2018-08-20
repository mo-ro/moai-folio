import React from 'react'

class PageHeading extends React.Component {
  render() {
    return (
      <div className="page-heading">
        <h2 className="page-heading-main">{this.props.mainHeading}</h2>
        <h3 className="page-heading-sub">{this.props.subHeading}</h3>
      </div>
    )
  }
}

export default PageHeading
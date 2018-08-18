import React from 'react'
import Link from 'gatsby-link'


class Button extends React.Component {
  render() {
    return (
      <div className="link-button">
        <Link to={this.props.to}>
          {this.props.text}
        </Link>
      </div>
    )
  }
}

export default Button
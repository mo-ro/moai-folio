import React from 'react'
import Link from 'gatsby-link'
import PageHeading from '../components/PageHeading'
import WorkList from '../components/WorkList'
import Button from '../components/Button'

class Works extends React.Component {
  render() {
    return (
      <div className="works">
        <PageHeading mainHeading="Works" subHeading="秀逸な作品集" />
        <WorkList type="all"/>
        <div className="about-buttons">
          <div className="button-wrapper">
            <h3 className="about-button-heading">どんな人？</h3>
            <Button text="About" to="/about/"/>
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

export default Works
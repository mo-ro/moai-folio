import React from 'react';
import Markdown from 'react-markdown';

class WorkCard extends React.Component {
  render() {
    console.log(this.props)
    return (
      <li className="work-card">
        <div className="work-card-img">
          <Markdown source={this.props.issue.body} />
        </div>
        <div className="work-card-text">{this.props.issue.title}</div>
      </li>
    )
  }
}

export default WorkCard
import React from 'react';
import WorkCard from './WorkCard';

class WorkList extends React.Component {
  render() {
    console.log(this.props, 888)

    return (
      <ul className="work-list">
        {this.props.issues.map((issue, i) => {
          return(
            <WorkCard issue={issue} key={i}/>
          )
        })}
      </ul>
    )
  }
}

export default WorkList
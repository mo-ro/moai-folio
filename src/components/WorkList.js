import React from 'react';
import WorkCard from './WorkCard';

class WorkList extends React.Component {
  render() {
    const items = [];
    const num = this.props.type === "all" ? 10 : 3;
    for (let i = 0; i < num; i++) {
      items.push(
        <WorkCard />
      )
    }
    return (
      <ul className="work-list">
        {items}
      </ul>
    )
  }
}

export default WorkList
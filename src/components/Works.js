import React from 'react';
import WorkCard from './WorkCard';

class Works extends React.Component {
  render() {
    const items = [];
    for (let i = 0; i < 3; i++) {
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

export default Works
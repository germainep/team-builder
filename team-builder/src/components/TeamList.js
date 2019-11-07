import React from 'react';


const TeamList = props => {
  return (
    <div>
      <ul>
      {props.members.map(member => (
        <li>{member.name}</li>
      ))}

      </ul>
    </div>
  )

}

export default TeamList
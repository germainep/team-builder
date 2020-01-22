import React from 'react';
import './TeamList.css';


const TeamList = props => {
  return (
    <div>
      <div className="container">
      {props.members.map(member => (
        <div className='card'>
          <p><span>Name:</span> {member.name}</p>
          <p><span>Email:</span> {member.email}</p>
          <p><span>Title:</span> {member.title}</p>
        </div>

      ))}

      </div>
    </div>
  )

}

export default TeamList
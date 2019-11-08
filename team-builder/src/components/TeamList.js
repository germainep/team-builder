import React from 'react';


const TeamList = props => {
  return (
    <div>
      <div>
      {props.members.map(member => (
        <div>
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
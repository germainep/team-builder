import React, {useState} from 'react';
import './App.css';
import TeamList from './components/TeamList'
import MemberForm from './components/MemberForm'

function App() {
  const [members, setMembers] = useState([
    {
      id: 1,
      name: 'Jimmy',
      email: 'jimmy@devjob.com',
      title: 'Backend Dev'
    }
  ])

  const addNewMember = member => {
    const newMember = setMembers([...members, member])
  }
  return (
    <div className="App">
      <TeamList members={members}/>
      <MemberForm addNewMember={addNewMember}/>
    </div>
  );
}

export default App;

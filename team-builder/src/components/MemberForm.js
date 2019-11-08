import React, {useState} from 'react';

const MemberForm = props => {
  const [member, setMember] = useState({
    name: '',
    title: ''
  });
  const handleChanges = event => setMember({...member, [event.target.name]: event.target.value})

  const submitHandler = (event) => {
    event.preventDefault()
    const newMember = {
      ...member,
      id: Date.now()
    }
    props.addNewMember(newMember)
    setMember({name: '', title: '', email: ''})
  }
  
  return (
    <form onSubmit={submitHandler}>
      <label htmlFor='name'>Name</label>
      <input onChange={handleChanges} id='name' type='text' name='name'/>

      <label htmlFor='email'>Email</label>
      <input onChange={handleChanges} id='email' type='email' name='email'/>

      <label htmlFor='title'>Title</label>
      <input onChange={handleChanges} id='title' type='text' name='title'/>
      <button type='submit'>Add</button>
    </form>
  )
}

export default MemberForm
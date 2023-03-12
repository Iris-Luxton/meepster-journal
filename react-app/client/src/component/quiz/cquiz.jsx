import React, {useState, useEffect} from 'react';
import './quiz.css';

const getUsers = async () => {
  const resp = await fetch('http://localhost:5000/api/quiz/users')
  const users = await resp.json();
  return users
}

function Cquiz() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUsers().then((users) => setUsers(users))
  }, [])

  const submitVocab = (event) => {
    try {
      event.preventDefault();
      const vocab = event.target.vocab.value
      console.log(`submitting vocab ${vocab}`)
    
      const submitVocab = async () => {
        const resp = await fetch('http://localhost:5000/api/quiz/users', {
          method: 'POST',
          body: JSON.stringify({
            username: vocab
          }),
          headers: {
            "content-type": "application/json"
          }
        })
        return await resp.json()
      }
    
      submitVocab()
      window.location.reload()
    } catch (e) {
      console.log(e)
    }
   
  }

  return (
    <div>
      <div>
        <h3>Chinese Quiz</h3>
        <ul className="content">
          <li>你好 (nǐ hǎo) - Hello</li>
          <li>再见 (zàijiàn) - Goodbye</li>
          <li>谢谢 (xièxie) - Thank you</li>
          {users && users.map((user) => {
            return <li key={user._id}>{user.username}</li>
          })}
        </ul>
      </div>
      <div style={{margin: '5px'}}>
        <form onSubmit={submitVocab}>
          <h2>Add new Vocab</h2>
          <input name='vocab' id='vocab' placeholder='New Vocab'/>
          <button type='submit'>Submit</button>
        </form>
      </div>
    </div>
  );
}

export default Cquiz;
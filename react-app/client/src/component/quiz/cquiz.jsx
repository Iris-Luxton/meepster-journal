import React, {useState, useEffect} from 'react';
import './quiz.css';
import photo1 from '../../image/photo1.jpg';
import photo2 from '../../image/photo2.jpg';
const getItems = async () => {
  const resp = await fetch('http://localhost:5000/api/quiz/items')
  const items = await resp.json();
  return items
}

function Cquiz() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    getItems().then((items) => setItems(items))
  }, [])

  const submitVocab = (event) => {
    try {
      event.preventDefault();
      const vocab = event.target.vocab.value
      console.log(`submitting vocab ${vocab}`)
    
      const submitVocab = async () => {
        const resp = await fetch('http://localhost:5000/api/quiz/items', {
          method: 'POST',
          body: JSON.stringify({
            itemname: vocab
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
        <h3>Chinese</h3>
        <ul className="content">
          <li>你好 (nǐ hǎo) - Hello</li>
          {items && items.map((item) => {
            return <li key={item._id}>{item.itemname}</li>
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
      <div className="bottom-wrapper">
      <div className="bottom-left">
        <img src={photo1} alt="Cat 1" />
      </div>
      <div className="bottom-right">
        <img src={photo2} alt="Cat 2" />
      </div>
      </div>
    </div>
  );
}

export default Cquiz;
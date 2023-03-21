import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './quiz.css';

const tango = [
  {word: "こんにちは", romaji: "konnichiwa", meaning: "Hello"},
  {word: "さようなら", romaji: "sayounara", meaning: "Goodbye"},
  {word: "ありがとう", romaji: "arigatou", meaning: "Thank you"}
]

const Row = (props) => {
  
  const {word, romaji, meaning, _id} = props
  const dropTango = () => {
    axios.post('http://localhost:5000/api/quiz/jquiz/:id',{ _id })
      .then(res => {
        console.log(res);
        console.log(res.data);
        // update the state to remove the deleted tango from the rows
      })
      .catch(err => console.log(err));
  }
  
  return (<tr>
    <td style={{border: '1px solid black', padding: '8px'}}>{word}</td>
    <td style={{border: '1px solid black', padding: '8px'}}>{romaji}</td>
    <td style={{border: '1px solid black', padding: '8px'}}>{meaning}</td>
    <td style={{border: '1px solid black', padding: '8px'}}>
      <button>Edit</button>
      <button onClick={dropTango}>Delete</button>
    </td>
  </tr>
  )
}

const Table = (props) => {
  const [inputarr] = useState([]);
  const {data} = props

  return (
  <table>
    <thead> 
    <tr>
        {/* <td>Sr.No</td> */}
        <th>Word </th>
        <th>Romaji</th>
        <th>Meaning</th>
        <th>Action</th> 
        {/* <th>Options</th> */}
    </tr>
    </thead> 
    <tbody key="tbody" style={{border: '1px solid black'}}>
      {data.map(row => 
        <Row word = {row.word}
        romaji = {row.romaji}
        meaning = {row.meaning}
        action = {row.action} />
      )}
    
    {inputarr.length < 1 ?
        <tr>    
        </tr>:
    inputarr.map((info, ind) => {
        return (
            <tr key={ind}>
                {/* <td>{ind + 1}</td> */}
                <td>{info.word}</td>
                <td>{info.romaji}</td>
                <td>{info.meaning}</td>
                <td>
                  <button>Delete</button>
                </td>
                {/* <td><button onClick={()=>delethandle(ind)}>Delete</button></td> */}
               
            </tr>
        )
    })
}
    </tbody>
  </table>)
}
function Jquiz() {
 
  const [inputdata, SetInputdata] = useState({
    _id: "",
    word:"",
    romaji:"",
    meaning:""
    
  })
  const [rows, setRows] = useState([])

  useEffect(() => {
    axios.get('http://localhost:5000/api/quiz/jquiz')
      .then(res => {
        setRows(res.data);
      })
      .catch(err => console.log(err));
  }, []);

  function changehandle(e) {
    SetInputdata({...inputdata, [e.target.name]:e.target.value})
  }
  
  let { word, romaji, meaning } = inputdata
  
  function changhandle() {
    const newRow = { word, romaji, meaning }
    axios.post('http://localhost:5000/api/quiz/jquiz', newRow)
    
    .then(res => {
      const updatedRows = [...rows, newRow];
      setRows(updatedRows);
      console.log(inputdata, "input data what we Enter")
      SetInputdata({word:"", romaji:"", meaning:""});
    })
    .catch(err => console.log(err));
  }

  
  
  return (
  <div className="Jquiz">
      <div>
        <h3>Japanese to be quized </h3>
        <h3>Attempt to use Axios to handle request</h3>
        <Table data = {rows} />
      </div>
      <div>
        <input type="text" name='word' value={inputdata.word} onChange={changehandle} placeholder="Enter word"></input>
        <input type="text" name='romaji' value={inputdata.romaji} onChange={changehandle} placeholder="Enter romaji"></input>
        <input type="text" name='meaning' value={inputdata.meaning} onChange={changehandle} placeholder="Enter meaning"></input>
        <br />
        <button onClick={changhandle}>Add It </button>
      </div>
   </div>
  );
}
export default Jquiz;
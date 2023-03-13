import React, { useState } from 'react';
import './quiz.css';

const tango = [
  {word: "こんにちは", romaji: "konnichiwa", meaning: "Hello"},
  {word: "さようなら", romaji: "sayounara", meaning: "Goodbye"},
  {word: "ありがとう", romaji: "arigatou", meaning: "Thank you"}
]

const Row = (props) => {
  const {word, romaji, meaning} = props
  return (<tr>
    <td style={{border: '1px solid black', padding: '8px'}}>{word}</td>
    <td style={{border: '1px solid black', padding: '8px'}}>{romaji}</td>
    <td style={{border: '1px solid black', padding: '8px'}}>{meaning}</td>
  </tr>
  )
}

const Table = (props) => {
  const [inputarr] = useState([]);
  const {data} = props

  
  return (
  <table>
    <tbody key="tbody" style={{border: '1px solid black'}}>
      {data.map(row => 
        <Row word = {row.word}
        romaji = {row.romaji}
        meaning = {row.meaning} />
      )}
    <tr>
        {/* <td>Sr.No</td> */}
        <th>Word </th>
        <th>Romaji</th>
        <th>Meaning</th>
        {/* <th>Options</th> */}
    </tr>
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
                {/* <td><button onClick={()=>delethandle(ind)}>Delete</button></td> */}
            </tr>
        )
    })
}
    </tbody>
  </table>)
}
function Jquiz() {
  const [inputarr] = useState([])
  const [inputdata, SetInputdata] = useState({
    word:"",
    romaji:"",
    meaning:""
  })
  
  function changehandle(e) {
    SetInputdata({...inputdata, [e.target.name]:e.target.value})
  }
  
  let { word, romaji, meaning } = inputdata
  
  function changhandle() {
    const newRow = { word, romaji, meaning }
    const updatedRows = [...rows, newRow]
    setRows(updatedRows)
    
    console.log(inputdata, "input data what we Enter")
    SetInputdata({word:"", romaji:"", meaning:""})
  }


function changhandle2() {
  console.log("Object store in array", inputarr);
}

  const [rows, setRows] = useState(tango)
  return (
  <div className="Jquiz">
      <div>
        <h3>Japanese to be quized </h3>
        <h3>Note: data add using front end only</h3>
        <Table data = {rows} />
      </div>
      <div>
        <input type="text" name='word' value={inputdata.word} onChange={changehandle} placeholder="Enter word"></input>
        <input type="text" name='romaji' value={inputdata.romaji} onChange={changehandle} placeholder="Enter romaji"></input>
        <input type="text" name='meaning' value={inputdata.meaning} onChange={changehandle} placeholder="Enter meaning"></input>
        <button onClick={changhandle}>Add It </button>
        <button onClick={changhandle2}>Check</button> 
      </div>
   </div>
    
  );
}




export default Jquiz;
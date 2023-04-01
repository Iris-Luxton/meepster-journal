import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './quiz.css';

const Table = (props) => {
  const { data } = props;
  const [rows, setRows] = useState(data);

  useEffect(() => {
    setRows(data);
  }, [data]);

  const handleDeleteRow = (id) => {
    console.log("Delete row running, id is " + id); // check if id is passed correctly
    axios
      .post('http://localhost:5000/api/quiz/delete', { 
        id: id, 
      })
      .then((res) => {
        console.log(res);
        console.log(res.data);
        setRows(rows.filter((row) => row._id !== id));
      })
      .catch((err) => console.log(err));
  };

  const handleEditRow = (id, updatedRow) => {
    axios
    .post('http://localhost:5000/api/quiz/update', { 
      id: id,
      updatedRow })
      .then((res) => {
        console.log(res);
        console.log(res.data);
        setRows(
          rows.map((row) =>
            row._id === id ? { ...row, ...updatedRow } : row
          )
        );
      })
      .catch((err) => console.log(err));
  };

  return (
    <table>
      <thead>
        <tr>
          <th>Word </th>
          <th>Romaji</th>
          <th>Meaning</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody key="tbody" style={{ border: "1px solid black" }}>
        {rows.map((row) => (
          <Row
            key={row._id}
            word={row.word}
            romaji={row.romaji}
            meaning={row.meaning}
            onDelete={() => handleDeleteRow(row._id)}
            onEdit={(updatedRow) => handleEditRow(row._id, updatedRow)}
          />
        ))}
      </tbody>
    </table>
  );
};
const Row = (props) => {
  const { word, romaji, meaning, onDelete, onEdit } = props;

  const [isEditing, setIsEditing] = useState(false);
  const [editData, setEditData] = useState({ word, romaji, meaning });

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleCancelClick = () => {
    setIsEditing(false);
    setEditData({ word, romaji, meaning });
  };

  const handleSaveClick = () => {
    onEdit(editData);
    setIsEditing(false);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditData({ ...editData, [name]: value });
  };

  return (
    <tr>
      <td style={{ border: "1px solid black", padding: "8px" }}>
        {isEditing ? (
          <input name="word" value={editData.word} onChange={handleInputChange} />
        ) : (
          word
        )}
      </td>
      <td style={{ border: "1px solid black", padding: "8px" }}>
        {isEditing ? (
          <input name="romaji" value={editData.romaji} onChange={handleInputChange} />
        ) : (
          romaji
        )}
      </td>
      <td style={{ border: "1px solid black", padding: "8px" }}>
        {isEditing ? (
          <input name="meaning" value={editData.meaning} onChange={handleInputChange} />
        ) : (
          meaning
        )}
      </td>
      <td style={{ border: "1px solid black", padding: "8px" }}>
        {isEditing ? (
          <>
            <button onClick={handleSaveClick}>Save</button>
            <button onClick={handleCancelClick}>Cancel</button>
          </>
        ) : (
          <>
            <button onClick={handleEditClick}>Edit</button>
            <button onClick={onDelete}>Delete</button>
          </>
        )}
      </td>
    </tr>
  );
};

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
      window.location.reload()
    })
    .catch(err => console.log(err));
  }
  return (
  <div className="Jquiz">
      <div>
        <h3>Japanese to be quized </h3>
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
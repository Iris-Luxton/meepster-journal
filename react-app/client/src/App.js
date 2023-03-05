import React from 'react';
import NavBar from './component/navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import StaticResource from './component/static-resource.jsx';
import Home from './component/home.jsx';
import Quiz from './component/quiz.jsx';
import './App.css';
function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Routes>
          <Route exact path="/" element={<Home />} />    
          <Route path="/static" element={<StaticResource />} />
          <Route path="/quiz" element={<Quiz />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
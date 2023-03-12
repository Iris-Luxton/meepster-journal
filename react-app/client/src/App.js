import React from 'react';
import NavBar from './component/navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import StaticResource from './component/static-resource.jsx';
import Home from './component/home.jsx';
import Quizs from './component/quizs.jsx';
import Jvocab from './component/resources/japanese-vocab.jsx';
import Cvocab from './component/resources/chinese-vocab.jsx';
import './App.css';
import Cquiz from './component/quiz/cquiz';
import Jquiz from './component/quiz/jquiz';

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Routes>
          <Route exact path="/" element={<Home />} />    
          <Route path="/static/*" element={<StaticResource />} />
          <Route path="/static/jvocab" element={<Jvocab />} />
          <Route path="/static/cvocab" element={<Cvocab />} />
          <Route path="/quiz/*" element={<Quizs />} />
          <Route path="/quiz/cquiz" element={<Cquiz />} />
          <Route path="/quiz/jquiz" element={<Jquiz />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
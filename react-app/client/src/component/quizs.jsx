import React from 'react';
import Jquiz from './quiz/jquiz.jsx';
import Cquiz from './quiz/cquiz.jsx';
import Quizlink from './quiz-link';
import './styles/static-resource.css';
import { Route, Routes } from 'react-router-dom';

function Quizs () {
  return (
    <div>
      <h2>Quiz Page</h2>
      <Quizlink />
        <Routes> 
          <Route path="/quiz/jquiz" element={<Jquiz />} />
          <Route path="/quiz/cquiz" element={<Cquiz />} />
        </Routes>
    </div>
  );
}

export default Quizs;
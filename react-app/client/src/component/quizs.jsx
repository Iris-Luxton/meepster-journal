import React from 'react';
import Jquiz from './quiz/jquiz.jsx';
import Cquiz from './quiz/cquiz.jsx';
import Quizlink from './quiz-link';
import './styles/static-resource.css';
import { Route, Routes } from 'react-router-dom';
import photo1 from '../image/photo1.jpg';
import photo2 from '../image/photo2.jpg';
function Quizs () {
  return (
    <div>
      <h2>Notes to be quizzed</h2>
      <Quizlink />
        <Routes> 
          <Route path="/quiz/jquiz" element={<Jquiz />} />
          <Route path="/quiz/cquiz" element={<Cquiz />} />
        </Routes>
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

export default Quizs;
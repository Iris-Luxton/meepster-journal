import React from 'react';
import Jvocab from './resources/japanese-vocab.jsx';
import Cvocab from './resources/chinese-vocab.jsx';
import Resources from './resources';
import './styles/static-resource.css';
import { Route, Routes } from 'react-router-dom';

function StaticResource () {
  return (
    <div>
      <h2>Static Resource Page</h2>
      <Resources />
        <Routes> 
          <Route path="/static/jvocab" element={<Jvocab />} />
          <Route path="/static/cvocab" element={<Cvocab />} />
        </Routes>
    </div>
  );
}

export default StaticResource;
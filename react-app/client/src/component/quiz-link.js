import React from 'react';
import './styles/static-resource.css';
import { Link } from 'react-router-dom';
function Quizlink() {
  return (
      <div>
      <ul className="content-link">
      <li>
          <Link className="content-link" to="/quiz/jquiz">Japanese</Link>
        </li>
        <li>
          <Link className="content-link" to="/quiz/cquiz">Chinese</Link>
        </li>
      </ul>
      </div>
  );
}
export default Quizlink;
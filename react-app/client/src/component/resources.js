import React from 'react';
import './static-resource.css';
import { Link } from 'react-router-dom';
function Resources() {
  return (
      <div>
        <p>Resources</p>
      <ul className="content-link">
      <li>
          <Link className="content-link" to="/static/jvocab">Japanese Vocab</Link>
        </li>
        <li>
          <Link className="content-link" to="/static/cvocab">Chinese Vocab</Link>
        </li>
      </ul>
      </div>
  );
}
export default Resources;
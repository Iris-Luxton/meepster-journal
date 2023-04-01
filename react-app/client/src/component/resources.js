import React from 'react';
import './styles/static-resource.css';
import { Link } from 'react-router-dom';
import photo1 from '../image/photo1.jpg';
import photo2 from '../image/photo2.jpg';
function Resources() {
  return (
      <div>
        <p>Resources</p>
      <ul className="content-link">
      <li>
          <Link className="content-link" to="/static/jvocab">Japanese</Link>
        </li>
        <li>
          <Link className="content-link" to="/static/cvocab">Chinese</Link>
        </li>
        <li><a href="https://www.japanese.io/">Japanese JLTPN5</a></li>
        <li><a href="https://www.japanese.io/">Japanese JLTPN4</a></li>
        <li><a href="https://www.japanese.io/">Japanese JLTPN3</a></li>
        <li><a href="https://www.japanese.io/">Japanese JLTPN2</a></li>
        <li><a href="https://www.japanese.io/">Japanese JLTPN1</a></li>
        <li><a href="https://www.japanese.io/">Chinese HSK1</a></li>
        <li><a href="https://www.japanese.io/">Chinese HSK2</a></li>
        <li><a href="https://www.japanese.io/">Chinese HSK3</a></li>
        <li><a href="https://www.japanese.io/">Chinese HSK4</a></li>
        <li><a href="https://www.japanese.io/">Chinese HSK5</a></li>
        <li><a href="https://www.japanese.io/">Chinese HSK6</a></li>

      </ul>
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
export default Resources;
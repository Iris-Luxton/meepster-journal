import React from 'react';
import './content.css';
import photo1 from '../../image/photo1.jpg';
import photo2 from '../../image/photo2.jpg';
function Cvocab() {
  return (
    <div>
      <h3>Chinese</h3>
      <ul className="content">
        <li>你好 (nǐ hǎo) - Hello</li>
        <li>再见 (zàijiàn) - Goodbye</li>
        <li>谢谢 (xièxie) - Thank you</li>
      </ul>
      <div className="bottom-wrapper">
      <div className="bottom-left">
        <img src={photo2} alt="Cat 2" />
      </div>
      <div className="bottom-right">
        <img src={photo1} alt="Cat 1" />
      </div>
      </div>
    </div>
  );
}

export default Cvocab;
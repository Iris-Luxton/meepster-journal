import React from 'react';
import './content.css';
import photo1 from '../../image/photo1.jpg';
import photo2 from '../../image/photo2.jpg';
function Jvocab() {
  return (
    <div>
      <h2>Japanese</h2>
      <div className="content">
        <ul>
          <li><a href="https://www.erin.jpf.go.jp/">Erin</a></li>
          <li><a href="http://www.kanjidamage.com/">Kanji Damage</a></li>
          <li><a href="https://kanji.koohii.com/">Kanji koohii</a></li>
          <li><a href="https://www.memrise.com/">Memrise</a></li>
          <li><a href="https://www.nihongoshark.com/post/learn-kanji">NihongoShark</a></li>
          <li><a href="https://www.nhk.or.jp/kokokoza/">NHK</a></li>
          <li><a href="https://www.japanese.io/">Japanese IO</a></li>
          <li><a href="https://www.youtube.com/channel/UCVx6RFaEAg46xfAsD2zz16w">Nihongonomori</a></li>
          <li><a href="https://www.youtube.com/@GameGrammar">Game grammar</a></li>
          <li><a href="https://maggiesensei.com/">Maggie Sensei</a></li>
          <li><a href="https://anime-manga.jp/en/">JP in anime and manga</a></li>
          <li><a href="https://quizlet.com/latest">Quizlet</a></li>
          <li><a href="https://www.aozora.gr.jp/">Aozora</a></li>
        </ul>
      </div>
      
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

export default Jvocab;
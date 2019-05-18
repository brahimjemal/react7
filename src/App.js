import React from 'react';
import logo from './logo.svg';
import './App.css';
import Carte from './Carte.js';

function App() {
  return (
    <div>
      <Carte imgurl="https://robohash.org/ibrahim/?set=set3" name="ibrahim" gender="male" />
      <Carte imgurl="https://robohash.org/zeineb" name="zeineb" gender="female" />
      <Carte imgurl="https://robohash.org/saif/?set=set3" name="saif" gender="male" />
      <Carte imgurl="https://robohash.org/maram" name="maram" gender="female" />
      
    </div>
  );
}

export default App;

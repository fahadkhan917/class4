import React, { useState } from 'react';
import Mess from './Mess'
import './App.css';

function App() {
let [count,Setcount]=useState(1);
let [ismor,setmor]=useState(true);

  return (
    <div className={`box ${ismor ? 'daylight' : ''}`}>
      <h1>Day time={ismor ? 'Morning' : 'Night'}</h1>
  <Mess counter={count} />
  <br/>
  <button onClick={()=>Setcount(count+1)}>Updated</button>
  <br/>
  <button onClick={()=>setmor(!ismor) }>background color change</button>

      </div>

      
  );
}

export default App;

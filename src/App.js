import React, {useState} from 'react';
import Message from './message.js';
import Daytime from './daytime.js';
import './App.css';

function App() {

  let [count, setCount] = useState(0);
  let[daytime, setDaytime] = useState(true);
  return (
    <div>
       <h4>==============Counter================</h4>
      <button onClick= {()=> {setCount(++count)
        document.getElementById('dis').disabled = false; 
      }}>Add</button>
      <Message counter={count}/>
      <button id = 'dis' onClick={()=> {setCount(--count);
      if(count <= 0) {
        setCount(0);
        document.getElementById('dis').disabled = true;
      }
      }}>Subtract</button>

     
    <Daytime status = {daytime}/>
    <button onClick={()=>setDaytime(!daytime)}>Change</button>
    </div>
  );
}

export default App;

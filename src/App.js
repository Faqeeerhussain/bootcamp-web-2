import React, {useState} from 'react';
import Message from './Message';
import './costomStyle.css';

function App(props) {
  let [count, setcount] = useState(0);
  let [changecolor, setchangecolor] = useState(true);
  // let [morningcolor, morningcolor] = useState('morning');
  return (
      <div className={changecolor? 'night' :'morning'} >
        
        <Message num={count}/>     
        <button onClick={()=>setcount(count+1)}> click to change count state </button>
        <button onClick={()=>setcount(0)}>reset count</button>
        <button onClick={()=>setchangecolor(changecolor? false : true )}>change the background color</button>
        
        
       </div>

  );
}


export default App;

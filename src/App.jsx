import { useState } from 'react';
import Square from './component/square'
import Start from './component/start'
import './App.css';


function App() {
  const [start, setStart] = useState({a:0,b:0})
  const handleStart = (time) =>{
    if (time){
      setStart({...start,[time]:(start[time]+1)})
    }else{
      setStart({a:0,b:0})
    }
  }

  return (
    <div className="App">
      <Square start={start.a} time="a" handleStart={handleStart}/>
      <Square start={start.b} time="b"handleStart={handleStart} />
      <Start handleStart={handleStart}/>
    </div>
  );
}

export default App;

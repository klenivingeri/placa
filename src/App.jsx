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
  const handleRemove = (time) =>{
    if (time){
      const ponto = start[time] === 0 ? 0 : (start[time]-1)
      setStart({...start,[time]:ponto})
    }
  }

  return (
    <div className="App">
      <Square start={start.a} time="a" handleStart={handleStart} handleRemove={handleRemove} />
      <Square start={start.b} time="b"handleStart={handleStart} handleRemove={handleRemove} />
      <Start handleStart={handleStart}/>
    </div>
  );
}

export default App;

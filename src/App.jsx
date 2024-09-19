import React from 'react'
import { useState } from 'react'

function App() {

  const [number, setNumber] = useState(0);

  function increase(){
    setNumber(number+1);
  }
  
  function decrease(){
    setNumber(number-1);
  }

  return (
    <div>
      <div>{number}</div>
      <button onClick={increase}>increase</button>
      <button onClick={decrease}>decrease</button>
    </div>
  )
}

export default App
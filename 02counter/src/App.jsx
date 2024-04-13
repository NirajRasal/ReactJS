import { useState } from 'react'

import './App.css'

function App() {
  const [Counter,setCounter] = useState(15)
  
  const addValue = () => {
    setCounter((prevCounter) => prevCounter + 1)
    setCounter((prevCounter) => prevCounter + 1)
    setCounter((prevCounter) => prevCounter + 1)
    setCounter((prevCounter) => prevCounter + 1)

  }

  const removeValue =()=>{
    setCounter(Counter - 1)
  }

  return (
    <>
   <h1>Hello Vite</h1>
   <h2>Counter value:{Counter}</h2>
   <button onClick={addValue}>Add value</button> {" "}
   <button  onClick={removeValue}>Remove value</button>
   <p>Footer:{Counter}</p>
    </>
  )
}

export default App

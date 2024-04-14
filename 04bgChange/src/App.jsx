import { useState } from 'react'
import './App.css'

function App() {
  const [colour,setColor] = useState('lightpink')

  // function setColour(colour){
  //   setColor(colour)
  // }
  return (
    <div className='w-full h-screen duration-200' style={{backgroundColor:colour}}>
      <div className='fixed flex flex-wrap justify-center
    bottom-12 inset-x-0 px-2'>
        <div className='flex flex-wrap justify-center gap-3
    shadow-lg bg-white px-3 py-2 rounded-3x1'>
          <button onClick={() => setColor('Red')} className='outline-none px-4 py-1 rounded-full
    text-black shadow-lg'>Red</button>
    <button onClick={() => setColor('Blue')} className='outline-none px-4 py-1 rounded-full
    text-black shadow-lg'>Blue</button>
    <button onClick={() => setColor('Orange')}className='outline-none px-4 py-1 rounded-full
    text-black shadow-lg'>Orange</button>
        </div>
      </div>
    </div>
  )
}

export default App

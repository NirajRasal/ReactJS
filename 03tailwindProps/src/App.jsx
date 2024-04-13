import { useState } from 'react'
import './App.css'
import Card from './Card'
function App() {
  

  return (
    <>
     <Card productName="Viking Jacket" productPrice="$200"/><br/>
     <Card productName="Viking Shoes" productPrice="$250"/><br/>
     <Card productName="Viking Axe" productPrice="$400"/>

    </>
  )
}

export default App

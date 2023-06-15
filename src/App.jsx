import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='inicio'>
        <h1>Olá react</h1>
        <p>Meu primeiro app</p> 
      </div>  
    </>
  )
}

export default App

import  Navbar from './app/component/navbar.tsx'
import { useState } from 'react'
import './App.css'
import Contas from './app/component/contas.tsx'

function App():JSX.Element {
  const [count, setCount] = useState(0)
  return (
    <>
      <Navbar />
      <Contas />
    </>
  )
}

export default App

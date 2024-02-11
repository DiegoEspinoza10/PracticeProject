import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Box from './ComponentsJS/Box'
import Counter from './ComponentsJS/Counter'
import Real from './ComponentsJS/RealInput'
import Fetch from './ComponentsJS/Fetch'
import Timer from './ComponentsJS/Timer'

function App() {
  const [count, setCount] = useState(0)

  return (
      
      <div>
      <Box></Box>
      <Counter></Counter>
      <Real></Real>
      <Timer></Timer>
      <Fetch/>
      </div>
  )
}

export default App

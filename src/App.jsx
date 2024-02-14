import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Box from './ComponentsJS/Box'
import Counter from './ComponentsJS/Counter'
import Real from './ComponentsJS/RealInput'
import Fetch from './ComponentsJS/Fetch'
import Timer from './ComponentsJS/Timer'
import RandomQuote from './ComponentsJS/RandomQuote'
import PropsName from './ComponentsJS/PropsName'

function App() {
  const [name, setName] = useState('');
  const [submittedName, setSubmittedName] = useState('');

  const handleInputChange = (event) => {
    setName(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault(); 
    setSubmittedName(name);
    setName(''); 
  };

  return (
    <div>
      <Box></Box>
      <Counter></Counter>
      <Real></Real>
      <Timer></Timer>
      <RandomQuote></RandomQuote>
      <Fetch />
      <form onSubmit={handleSubmit}>
        <input type="text" value={name} onChange={handleInputChange} />
        <button type="submit">Submit</button>
      </form>
      <PropsName name={submittedName}></PropsName>
    </div>
  );
}
export default App

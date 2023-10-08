import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter,setcounter] = useState(15);

  // let counter = 15;
  const  addValue = () => {
    // counter = counter + 1;
    if(counter == 20) return;
    setcounter(counter + 1);
    setcounter(counter + 1);
    setcounter(counter + 1);
    setcounter(counter + 1);
  }
  const removeValue = () => {
    if(counter == 0) return;
    setcounter(counter - 1);
  }
  return (
    <>
      <h1>chai aur react: {counter}</h1>
      <h3>counter value: {counter}</h3>

      <button
      onClick = {addValue}
      >Add Value: {counter}</button>
      <br/>
      <button
      onClick={removeValue}
      >Remove Value: {counter}</button>
    </>
  )
}

export default App

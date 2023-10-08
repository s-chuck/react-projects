import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='p-4  bg-blue-500 mb-4 rounded-xl'>Tailwind</h1>
      <Card username="sumit" btnText="click me->"/>
      <Card username="rohit" btnText="visit me->"/>
    </>
  )
}

export default App

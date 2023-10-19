import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <img src="./images.jpg" alt="mine" className='h-56 w-56 rounded-full shadow-lg shadow-black'/>
      <p className='text-2xl text-left my-8 font-bold'>XYZ</p>
      <p className='text-left my-8 font-mono text-2xl'>Full Stack developer</p>
      <p className='text-left font-bold text-2xl'>SKILLS</p>
      <div className='flex space-x-3 my-4'>
        <p className='border bg-blue-500 text-white text-2xl rounded-md p-1'>html</p>
        <p className='border bg-blue-500 text-white text-2xl rounded-md p-1'>css</p>
        <p className='border bg-blue-500 text-white text-2xl rounded-md p-1'>javascript</p>
        <p className='border bg-blue-500 text-white text-2xl rounded-md p-1'>React</p>
        <p className='border bg-blue-500 text-white text-2xl rounded-md p-1'>c++</p>
      </div>
    </>
  )
}

export default App

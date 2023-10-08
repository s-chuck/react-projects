import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [color, setcolor] = useState("yellow");

  return (
    <>
      <div className='w-full h-screen duration-200' style={{ backgroundColor: color }}> </div>
      <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
        <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white  rounded-xl px-3 py-2'>
          <button onClick={() => setcolor("red")} className='outline-none px-4 rounded-xl py-1 text-white shadow-lg' style={{backgroundColor: "red"}}>
            Red
          </button>
          <button onClick={() => setcolor("Green")} className='outline-none px-4 rounded-xl py-1 text-white shadow-lg' style={{backgroundColor: "Green"}}>
            Green
          </button>
          <button onClick={() => setcolor("Blue")} className='outline-none px-4 rounded-xl py-1 text-white shadow-lg' style={{backgroundColor: "blue"}}>
            Blue
          </button>
        <button onClick={() => setcolor("Pink")} className='outline-none px-4 rounded-xl py-1 text-white shadow-lg' style={{backgroundColor: "pink"}}>
            Pink
          </button>
          <button onClick={() => setcolor("Black")} className='outline-none px-4 rounded-xl py-1 text-white shadow-lg' style={{backgroundColor: "Black"}}>
            Black
          </button>
          <button onClick={() => setcolor("Gray")} className='outline-none px-4 rounded-xl py-1 text-white shadow-lg' style={{backgroundColor: "Gray"}}>
            Gray
          </button>
        </div> 
      </div>
    </>
  )
}

export default App

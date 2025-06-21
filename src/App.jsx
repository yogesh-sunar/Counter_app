import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
        <div className=" flex h-screen items-center justify-center m-auto ">
          <div className='flex flex-col h-[200px] w-[200px] rounded-3xl border-2 border-blue-400 items-center justify-center gap-4  '>
            <h1 className='text-2xl font-bold text-blue-800' >Count : {count}</h1>
            <button  className='border-2 rounded-md h-[30px] w-[80px]'onClick={()=>setCount(count+1)} >Increase</button>
            <button  className='border-2 rounded-md h-[30px] w-[80px] ' onClick={()=>setCount(count-1)} >Decrease</button>
            <button  className='border-2 rounded-md h-[30px] w-[80px] ' onClick={()=>setCount(0)} >Reset</button>
          </div>
          
        </div>
    </div>
  )
}

export default App

import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Router from './Router/Router'
import Layout from './layout/Layout'
import { ToastContainer } from 'react-toastify'

function App() {
  // const [count, setCount] = useState(0)
  // const [name, setname] = useState("yogesh")
  //   useEffect(()=>{
  //   console.log("Render on every refresh")
  // },[count]); //dependency array []

  return (
    
    // <div>
    //     <div className=" flex flex-col h-screen items-center justify-center m-auto ">
    //       <div className='flex flex-col h-[200px] w-[200px] rounded-3xl border-2 border-blue-400 items-center justify-center gap-4  '>
    //         <h1 className='text-2xl font-bold text-blue-800' >Count : {count}</h1>
    //         <button  className='border-2 rounded-md h-[30px] w-[80px]'onClick={()=>setCount("hari")} >Increase</button>
    //         <button  className='border-2 rounded-md h-[30px] w-[80px] ' onClick={()=>setCount("yogesh")} >Decrease</button>
    //         <button  className='border-2 rounded-md h-[30px] w-[80px] ' onClick={()=>setCount("Ram")} >Reset</button>
    //       </div>
    //       {/* <h2>{count}</h2>
    //       <button className='bg-green-300 px-4 py-2 cursor-pointer' onClick={()=>setCount(count+2)} >click</button>
    //       <h2 className='mt-10'>{name}</h2>
    //       <button className='bg-red-300 px-4 py-2 cursor-pointer' onClick={()=>setname("sita")} >Change name to sita</button>
    //       <button className='bg-red-300 px-4 py-2 cursor-pointer' onClick={()=>setname("ram")} >Change name to sita</button> */}
          
    //     </div>

       // </div>
       <>
         {/* <Navbar/>
         <Footer/> */}
          {/* <Router/> */}
                <ToastContainer
                position="top-right"
                autoClose={1000}
                hideProgressBar={false}
              
                closeOnClick={false}
              
               
                pauseOnHover={false}
               
                />

          <Layout/>
          
       
       </>
  )
}

export default App

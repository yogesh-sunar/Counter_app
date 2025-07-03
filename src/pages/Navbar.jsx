import React, { useState } from 'react'
import logo from "../assets/logosm.jpg"
import { GiHamburgerMenu } from 'react-icons/gi'
import { RxCross2 } from 'react-icons/rx';



const Navbar = () => {
  const [isMenueopen,setIsMenuOpen]=useState(false);
  return (
    <div className=' top-0 left-0 w-full shadow-md bg to-blue-400 z-50 px-10 md:px-4 ' >
      <div className='flex max-w-7xl  mx-auto items-center justify-between  '>
        <div className='' >
          <img className='w-[110px] h-[100px]' src={logo} alt="" />
        </div>
        <div className='md:hidden ' >
          <button onClick={()=>setIsMenuOpen(!isMenueopen)} >

            {
              isMenueopen ? (
                <RxCross2 size={30} />
              ) : (
                <GiHamburgerMenu size={30} />
              )
            }

            {/* {isMenueopen}(
              <RxCross2 />
            ):(
              <GiHamburgerMenu />
            ) */}
            
          </button>
        </div>
        <ul className=' gap-10 hidden md:flex '>
          <li>Home</li>
          <li>About</li>
          <li>Services</li>
          <li>Contact</li>
        </ul>

      
      
      </div>
      {
        isMenueopen && (
          <ul className=' items-center justify-center flex flex-col md:hidden'>
            <li>Home</li>
            <li>About</li>
            <li>Services</li>
            <li>Contact</li>
          </ul>
        )
      }
    </div>
  )
}

export default Navbar
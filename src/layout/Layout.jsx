import React from 'react'
import Navbar from '../pages/Navbar'
import Footer from '../pages/Footer'

import { RouterProvider } from 'react-router'
import Router from '../Router/Router'

const Layout = () => {
  return (
    <>
    <Navbar/>
    <Router/>
    <Footer/>
    </>
  )
}

export default Layout
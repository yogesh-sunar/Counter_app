import React from 'react'
import {  Route, Routes } from 'react-router-dom'
import AboutPage from '../pages/AboutPage'
import HomePage from '../pages/HomePage'
import ServicesPage from '../pages/ServicesPage'
import PostDetails from '../pages/PostDetails'
import AddForm from '../pages/Form'

const Router = () => {
  return (
    <div>

        <Routes>

            <Route path='/' element={<HomePage/>} />
            <Route path='/about' element={<AboutPage/>} />
            <Route path='/Services' element={<ServicesPage/>} />
            <Route path='/post/:id' element={<PostDetails/>} />
            <Route path='/form' element={<AddForm/>} />
        </Routes>
    </div>
  )
}

export default Router
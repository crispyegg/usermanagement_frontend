

import React from 'react'
import { Route, Routes } from 'react-router-dom'
import AddUsers from './src/pages/AddUsers'
import ViewUsers from './src/pages/ViewUsers'
import ManageUsers from './src/pages/ManageUsers'

const Routing = () => {
  return (
    <Routes>
        <Route path='/adduser' element={<AddUsers/>} />
        <Route path='/viewusers' element={<ViewUsers/>} />
        <Route path='/manageusers' element={<ManageUsers/>} />

    </Routes>
  )
}

export default Routing;
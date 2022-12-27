import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Hub from '../Pages/Hub/Hub'
import Layout from '../Pages/LayoutPage/Layout'
import Sales from '../Pages/SalesChannel/Sales'
import Error from './FoF/Error';

const AllRoutes = () => {
  return (
    <Routes>
        <Route path="/" element={<Layout/>} />
        <Route path="/sales" element={<Sales/>} />
        <Route path='/hubs' element={<Hub/>} />
        <Route path='*' element={<Error/>} />
    </Routes>
  )
}

export default AllRoutes;
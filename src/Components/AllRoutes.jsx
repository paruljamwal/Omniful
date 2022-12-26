import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Hub from '../Pages/Hub/Hub'
import Layout from '../Pages/LayoutPage.jsx/Layout'
import Sales from '../Pages/SalesChannel.jsx/Sales'

const AllRoutes = () => {
  return (
    <Routes>
        <Route path="/" element={<Layout/>} />
        <Route path="/sales" element={<Sales/>} />
        <Route path='/hubs' element={<Hub/>} />
    </Routes>
  )
}

export default AllRoutes;
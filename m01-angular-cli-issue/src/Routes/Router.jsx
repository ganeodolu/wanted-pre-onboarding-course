import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Layout from '../Components/Layouts'

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />

      </Route>
    </Routes>
  )
}

export default Router
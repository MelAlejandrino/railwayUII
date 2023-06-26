import React from 'react'
import Landing from './Landing'
import { Route, Routes } from 'react-router-dom'
import BookTicket from './paths/BookTicket'
import AdminLogin from './paths/AdminLogin'
import AdminPage from './paths/AdminPage'

function Dashboard() {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Landing />} />
            <Route path="/BookTicket" element={<BookTicket />} />
            <Route path='/AdminLogin' element={<AdminLogin />} />
            <Route path='/AdminPage' element={<AdminPage />} />
        </Routes>
    </div>
  )
}

export default Dashboard
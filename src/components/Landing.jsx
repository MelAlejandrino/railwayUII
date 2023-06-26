import React from 'react'
import { Link } from 'react-router-dom'

function Landing() {
  return (
    <main className="container mx-auto px-4 py-8">
    <section className="text-center">
      <h2 className="text-3xl font-bold mb-4">Welcome to our Railway Booking Ticket System</h2>
      <p className="text-gray-700 mb-8">
        Book your train tickets with ease and convenience.
      </p>
      <Link to="/BookTicket" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
      Get Started
      </Link>

    </section>

    <section className="mt-12">
      <h2 className="text-2xl font-bold mb-4">Featured Destinations</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white rounded shadow p-4">
          <h3 className="text-lg font-bold">Malaybalay City</h3>
          <p className="text-gray-700">Description of destination 1.</p>
        </div>
        <div className="bg-white rounded shadow p-4">
          <h3 className="text-lg font-bold">Valencia City</h3>
          <p className="text-gray-700">Description of destination 2.</p>
        </div>
        <div className="bg-white rounded shadow p-4">
          <h3 className="text-lg font-bold">Quezon</h3>
          <p className="text-gray-700">Description of destination 3.</p>
        </div>
        <div className="bg-white rounded shadow p-4">
          <h3 className="text-lg font-bold">Cagayan de Oro City</h3>
          <p className="text-gray-700">Description of destination 4.</p>
        </div>
      </div>
    </section>
  </main>
  )
}

export default Landing
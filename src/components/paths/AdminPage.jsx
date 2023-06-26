import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';

function AdminPage() {
    const [tickets, setTickets] = useState([]);

    useEffect(() => {
      getTickets();
    }, []);
  
    function getTickets() {
      axios
        .get("http://localhost/railway/src/components/paths/php/passengers.php")
        .then(function (response) {
          console.log(response.data);
          setTickets(response.data);
        });
    }
  return (
    <div className="container mx-auto mt-8">
            <h1 className="text-3xl font-bold mb-4">Welcome to the Admin Page!</h1>
      <p className="text-lg">Here are the passengers</p>
      <table className="min-w-full divide-y divide-gray-200">
      <thead>
        <tr>
          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            Ticket ID
          </th>
          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            User ID
          </th>
          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            Ticket String
          </th>
          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            Date Schedule
          </th>
          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            Category
          </th>
          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            Status
          </th>
        </tr>
      </thead>
      <tbody className="bg-white divide-y divide-gray-200">
        {tickets.map((ticket) => (
          <tr key={ticket.id}>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{ticket.ticket_id}</td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{ticket.user_id}</td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{ticket.ticket_string}</td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{ticket.date_schedule}</td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{ticket.category}</td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{ticket.status}</td>
          </tr>
        ))}
      </tbody>
    </table>
    </div>
  );
}

export default AdminPage;

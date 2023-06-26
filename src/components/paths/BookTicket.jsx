import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function BookTicket() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({});
  
    const handleChange = (event) => {
      const name = event.target.name;
      const value = event.target.value;
      setFormData((values) => ({ ...values, [name]: value }));
    };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post('http://localhost/railway/src/components/paths/php/bookticket.php', formData)
      .then((response) => {
        console.log(response.data);
        navigate('/');
      })
      .catch((error) => {
        console.error(error);
      });

  };

  return (
    <div className="container mx-auto px-4">
      <h1 className="text-2xl font-bold">Book Ticket</h1>
      <form onSubmit={handleSubmit} className="mt-4">
        <div className="mb-4">
          <label htmlFor="ticketId" className="block font-medium mb-1">
            Ticket ID
          </label>
          <input
            type="text"
            name="ticketId"
            onChange={handleChange}
            className="border border-gray-300 rounded-md py-2 px-3 w-full"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="trainId" className="block font-medium mb-1">
            Train ID
          </label>
          <input
            type="text"
            name="trainId"
            onChange={handleChange}
            className="border border-gray-300 rounded-md py-2 px-3 w-full"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="userId" className="block font-medium mb-1">
            User ID
          </label>
          <input
            type="text"
            name="userId"
            onChange={handleChange}
            className="border border-gray-300 rounded-md py-2 px-3 w-full"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="ticketString" className="block font-medium mb-1">
            Ticket String
          </label>
          <input
            type="text"
            name="ticketString"
            onChange={handleChange}
            className="border border-gray-300 rounded-md py-2 px-3 w-full"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="schedule" className="block font-medium mb-1">
            Schedule
          </label>
          <input
            type="text"
            name="schedule"
            onChange={handleChange}
            className="border border-gray-300 rounded-md py-2 px-3 w-full"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="category" className="block font-medium mb-1">
            Category
          </label>
          <input
            type="text"
            name="category"
            onChange={handleChange}
            className="border border-gray-300 rounded-md py-2 px-3 w-full"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="status" className="block font-medium mb-1">
            Status
          </label>
          <input
            type="text"
            name="status"
            onChange={handleChange}
            className="border border-gray-300 rounded-md py-2 px-3 w-full"
          />
        </div>

        <div className="mt-4">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default BookTicket;

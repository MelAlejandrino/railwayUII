import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function AdminLogin() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    axios
      .get('http://localhost/railway/src/components/paths/php/admin.php')
      .then(function (response) {
        const admins = response.data;
        const matchedAdmin = admins.find(
          (admin) => admin.email === email && admin.userpassword === password
        );

        if (matchedAdmin) {
          console.log('Login successful');
          navigate('/AdminPage'); // Redirect to the admin page
        } else {
          console.log('Login failed');
          // Perform any desired actions for failed login, such as showing an error message
        }
      })
      .catch(function (error) {
        console.error('Error fetching admin accounts:', error);
        // Perform any desired error handling
      });
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="max-w-md w-full bg-white p-6 rounded-md shadow-md">
        <h2 className="text-2xl font-bold mb-4">Admin Login</h2>
        <form onSubmit={handleSubmit}>
          {/* Email field */}
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 font-bold mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={handleEmailChange}
              className="border border-gray-300 rounded-md py-2 px-3 w-full"
              required
            />
          </div>

          {/* Password field */}
          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-700 font-bold mb-2">
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={handlePasswordChange}
              className="border border-gray-300 rounded-md py-2 px-3 w-full"
              required
            />
          </div>

          {/* Submit button */}
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
          >
            Log In
          </button>
        </form>
      </div>
    </div>
  );
}

export default AdminLogin;

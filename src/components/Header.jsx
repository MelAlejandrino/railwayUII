import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="bg-blue-500 text-white py-4 flex">
      <div className="container mx-auto px-4">
        <h1 className="text-2xl font-bold">Railway Booking Ticket System</h1>
      </div>
      <div className="flex justify-center gap-4">
      <Link to="/" className="text-black">Home</Link>
      <Link to="/AdminLogin" className="text-black">Admin Login</Link>
    </div>

    </header>
  );
}

export default Header;

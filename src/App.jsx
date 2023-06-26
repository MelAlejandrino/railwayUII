import React from "react";
import Header from "./components/Header";
import { Link } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="bg-gray-100">
      <Header />
      <Dashboard />
      <Footer />
    </div>
  );
}

export default App;

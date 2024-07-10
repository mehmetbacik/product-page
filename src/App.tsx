import React from "react";
import HomePage from "./pages/HomePage";
import Navbar from "./components/Navbar";

const App: React.FC = () => {
  return (
    <div className="app">
      <Navbar />
      <HomePage />
    </div>
  );
};

export default App;

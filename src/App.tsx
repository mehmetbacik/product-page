import React from "react";
import ProductPage from "./pages/ProductPage";
import Navbar from "./components/Navbar/Navbar";

const App: React.FC = () => {
  return (
    <div className="app">
      <Navbar />
      <ProductPage />
    </div>
  );
};

export default App;

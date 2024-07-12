import React from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ProductPage from "./pages/ProductPage";
import Navbar from "./components/Navbar/Navbar";

const App: React.FC = () => {
  return (
    <div className="app">
      <Navbar />
      <ProductPage />
      <ToastContainer position="top-right" autoClose={3000} hideProgressBar />
    </div>
  );
};

export default App;

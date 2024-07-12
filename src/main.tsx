import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { CartProvider } from './context/CartContext.tsx';
import "./index.css";
import "./styles/styles.scss";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <CartProvider>
      <App />
    </CartProvider>
  </React.StrictMode>
);

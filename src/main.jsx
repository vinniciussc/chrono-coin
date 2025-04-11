// src/main.jsx
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import LandingA from "./pages/LandingA.jsx";
import LandingB from "./pages/LandingB.jsx";
import "./index.css";

// Função para obter o valor de uma query string
const getQueryVariant = () => {
  const params = new URLSearchParams(window.location.search);
  return params.get("variant");
};

const variant = getQueryVariant();

const App = () => {
  return (
    <BrowserRouter>
      {variant === "B" ? <LandingB /> : <LandingA />}
    </BrowserRouter>
  );
};

ReactDOM.createRoot(document.getElementById("root")).render(<App />);

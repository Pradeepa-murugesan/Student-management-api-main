import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
import AppRouter from "./assets/router/AppRouter";
import Loader from "./assets/components/Loader";
import "./styles/globals.css";

function Main() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fake delay for demo (1.5 sec)
    const timer = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  // Show Loader while loading
  if (loading) return <Loader />;

  // After loading, show router
  return <AppRouter />;
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Main />
  </React.StrictMode>
);

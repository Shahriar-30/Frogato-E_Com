import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Navbar from "./components/Navbar";
import Register from "./pages/Register";
import Footer from "./components/Footer";
import Products from "./pages/Products";
import Cart from "./pages/Cart";

const App = () => {
  const location = useLocation();

  // List of paths where Navbar should NOT appear
  const hideNavbarPaths = ["/login", "/register"];

  const showNavbar = !hideNavbarPaths.includes(location.pathname);

  return (
    <>
      {/* Navbar only shows if current path is not login/register */}
      {showNavbar && <Navbar />}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/products" element={<Products />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
      {showNavbar && <Footer />}
    </>
  );
};

export default App;

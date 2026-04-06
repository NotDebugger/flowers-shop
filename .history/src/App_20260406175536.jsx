import "./App.css";
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Shop from "./pages/Shop";
import ProductPage from "./pages/ProductPage";
import Cart from "./pages/Cart";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Login from "./pages/Login";
import PasswordForgot from "./pages/PasswordForgot";
import Signup from "./pages/Signup";
import Footer from "./components/Footer";
import { ProductsContext } from "./contexts/productsContext";
import { CartProvider } from "./contexts/CartContext.jsx";
import Loading from "./components/Loading.jsx";

export default function App() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://69d3c81f336103955f8fa2e3.mockapi.io/api/v1/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
      });
  }, []);

  if (loading) return <Loading />;

  return (
    <ProductsContext.Provider value={products}>
      <CartProvider>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<Shop products={products} />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
            <Route path="/login" element={<Login />} />
            <Route path="/password-forgot" element={<PasswordForgot />} />
            <Route path="/sign-up" element={<Signup />} />
            <Route
              path="/product/:id"
              element={<ProductPage products={products} />}
            />
            <Route path="/cart" element={<Cart />} />
          </Routes>
          <Footer />
        </Router>
      </CartProvider>
    </ProductsContext.Provider>
  );
}

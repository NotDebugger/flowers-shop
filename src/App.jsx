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
import { ProductsContext } from "./contexts/productsContext.jsx";
import { CartProvider } from "./contexts/CartContext.jsx";
import Loading from "./components/Loading.jsx";
import NotFound from "./pages/NotFound.jsx";
import ScrollToTop from "./components/ScrollToTop.jsx";
import { SearchQueryContext } from "./contexts/searchQueryContext.jsx";
import SearchingResults from "./pages/SearchingResults.jsx";

export default function App() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [query, setQuery] = useState("");
  const [refreshKey, setRefreshKey] = useState(0);

  useEffect(() => {
    const controller = new AbortController();

    async function loadProducts() {
      try {
        setLoading(true);
        setError("");

        const response = await fetch(
          "https://69d3c81f336103955f8fa2e3.mockapi.io/api/v1/products",
          { signal: controller.signal },
        );

        if (!response.ok) {
          throw new Error("Unable to load products right now.");
        }

        const data = await response.json();
        setProducts(data);
      } catch (loadError) {
        if (loadError.name !== "AbortError") {
          setError("We could not load the flower collection. Please try again.");
        }
      } finally {
        setLoading(false);
      }
    }

    loadProducts();

    return () => controller.abort();
  }, [refreshKey]);

  if (loading) return <Loading />;

  if (error) {
    return (
      <div className="flex min-h-screen items-center justify-center px-4 py-12">
        <div className="soft-card fade-up w-full max-w-xl rounded-[2rem] p-8 text-center md:p-10">
          <span className="section-kicker">Storefront Status</span>
          <h1 className="h1-title mt-6 text-4xl text-slate-900">
            The bouquet list is taking a moment.
          </h1>
          <p className="mt-4 text-lg leading-8 text-slate-600">{error}</p>
          <button
            className="flower-button mt-8"
            onClick={() => setRefreshKey((value) => value + 1)}
          >
            Try again
          </button>
        </div>
      </div>
    );
  }

  return (
    <ProductsContext.Provider value={products}>
      <CartProvider>
        <SearchQueryContext.Provider value={{ query, setQuery }}>
          <Router>
            <ScrollToTop />
            <div className="min-h-screen">
              <Navbar />
              <main className="pt-24 md:pt-28">
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/shop" element={<Shop />} />
                  <Route path="/contact" element={<Contact />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/login" element={<Login />} />
                  <Route path="/password-forgot" element={<PasswordForgot />} />
                  <Route path="/sign-up" element={<Signup />} />
                  <Route path="/products/:id" element={<ProductPage />} />
                  <Route path="/cart" element={<Cart />} />
                  <Route path="/search" element={<SearchingResults />} />
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </main>
              <Footer />
            </div>
          </Router>
        </SearchQueryContext.Provider>
      </CartProvider>
    </ProductsContext.Provider>
  );
}

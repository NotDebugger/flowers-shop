import { Link } from "react-router-dom";
import { useContext } from "react";
import { ProductsContext } from "../contexts/ProductsContext";
import ProductCard from "./ProductCard";
import { useCart } from "../hooks/useCart";

export default function FeaturedProducts() {
  const products = useContext(ProductsContext);
  const { addToCart } = useCart();
  const featured = products.slice(0, 6);

  return (
    <section className="section-wrap py-18">
      <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div className="max-w-2xl">
          <span className="section-kicker">Featured Collection</span>
          <h2 className="h1-title mt-5 text-4xl text-slate-900 md:text-5xl">
            Best-selling blooms chosen for gifting moments that feel special.
          </h2>
          <p className="mt-4 text-lg leading-8 text-slate-600">
            Explore our most-loved arrangements, styled for birthdays,
            celebrations, apologies, and the kind of ordinary day that deserves
            flowers anyway.
          </p>
        </div>

        <Link to="/shop" className="flower-button whitespace-nowrap">
          Browse all flowers
        </Link>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3">
        {featured.map((p) => (
          <ProductCard key={p.id} p={p} onAdd={addToCart} />
        ))}
      </div>
    </section>
  );
}

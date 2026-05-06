import { Link } from "react-router-dom";
import { useCart } from "../hooks/useCart";
import { useContext } from "react";
import { ProductsContext } from "../contexts/ProductsContext";
import ProductCard from "../components/ProductCard";

export default function Shop() {
  const products = useContext(ProductsContext);
  const { addToCart } = useCart();

  return (
    <>
      <section className="section-wrap py-8">
        <div className="page-banner rounded-[2.3rem] px-6 py-10 text-center md:px-10 md:py-14">
          <div className="mb-4 text-sm text-slate-500">
            <Link to="/" className="transition hover:text-(--accent)">
              Home
            </Link>
            <span className="mx-2 text-xs">&gt;</span>
            <span>Shop</span>
          </div>
          <h1 className="h1-title text-5xl text-slate-900 md:text-6xl">
            Shop fresh flowers
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-600">
            Browse elegant bouquets, warm gifting picks, and statement florals
            made to feel premium from product page to doorstep.
          </p>
          <div className="mt-6 inline-flex rounded-full bg-white/82 px-4 py-2 text-sm font-semibold text-(--accent)">
            {products.length} arrangements available
          </div>
        </div>
      </section>

      <section className="section-wrap pb-20">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {products.map((p) => (
            <ProductCard key={p.id} p={p} onAdd={addToCart} />
          ))}
        </div>
      </section>
    </>
  );
}

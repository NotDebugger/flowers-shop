import { useContext, useMemo } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { ProductsContext } from "../contexts/ProductsContext";
import ProductCard from "../components/ProductCard";
import { useCart } from "../hooks/useCart";

export default function SearchingResults() {
  const products = useContext(ProductsContext);
  const [searchParams] = useSearchParams();
  const query = searchParams.get("q") || "";
  const { addToCart } = useCart();
  const resultProducts = useMemo(() => {
    return products.filter((p) =>
      p.name.toLowerCase().includes(query.toLowerCase()),
    );
  }, [products, query]);

  if (!query.trim()) {
    return (
      <section className="section-wrap py-12">
        <div className="soft-card mx-auto max-w-2xl rounded-[2.3rem] p-8 text-center md:p-12">
          <span className="section-kicker">Search the shop</span>
          <h1 className="h1-title mt-6 text-4xl text-slate-900">
            Start typing to explore the collection.
          </h1>
          <p className="mt-4 text-lg leading-8 text-slate-600">
            Use the search bar in the header to find a bouquet by name and jump
            straight to matching arrangements.
          </p>
        </div>
      </section>
    );
  }

  return (
    <>
      <section className="section-wrap py-8">
        <div className="page-banner rounded-[2.3rem] px-6 py-10 md:px-10">
          <span className="section-kicker">Search Results</span>
          <h1 className="h1-title mt-5 text-4xl text-slate-900 md:text-5xl">
            Results for "{query}"
          </h1>
          <p className="mt-4 text-lg leading-8 text-slate-600">
            {resultProducts.length} arrangement
            {resultProducts.length === 1 ? "" : "s"} matched your search.
          </p>
        </div>
      </section>

      <section className="section-wrap pb-20">
        {resultProducts.length === 0 ? (
          <div className="soft-card mx-auto max-w-2xl rounded-[2.3rem] p-8 text-center md:p-12">
            <h2 className="text-3xl font-semibold text-slate-900">
              No bouquets matched that search.
            </h2>
            <p className="mt-4 text-lg leading-8 text-slate-600">
              Try a simpler name, or head back to the shop to browse the full
              collection.
            </p>
            <Link to="/shop" className="flower-button mt-8">
              Browse all flowers
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3">
            {resultProducts.map((p) => (
              <ProductCard key={p.id} p={p} onAdd={addToCart} />
            ))}
          </div>
        )}
      </section>
    </>
  );
}

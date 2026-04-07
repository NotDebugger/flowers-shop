import { useContext } from "react";
import { ProductsContext } from "../contexts/productsContext";
import ProductCard from "../components/ProductCard";
import { useSearchParams } from "react-router-dom";

export default function SearchingResults() {
  const products = useContext(ProductsContext);
  const [searchParams] = useSearchParams();
  const query = searchParams.get("q") || "";
  const resultProducts = products.filter((p) =>
    p.name.toLowerCase().includes(query.toLowerCase()),
  );

  if (!query.trim()) {
    return (
      <p className="text-center my-40 text-2xl">
        Please start typing to search...
      </p>
    );
  }

  return (
    <>
      <h1 className="mt-32 text-left text-3xl">Search: {query}</h1>;
      <div className="p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 lg:mx-28 mb-20">
        {resultProducts.map((p) => (
          <ProductCard key={p.id} p={p} />
        ))}
      </div>
    </>
  );
}

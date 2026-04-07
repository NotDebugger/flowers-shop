import { useContext } from "react";
import { ProductsContext } from "../contexts/productsContext";
import ProductCard from "../components/ProductCard";
import { SearchQueryContext } from "../contexts/SearchQueryContext";

export default function SearchingResults() {
  const products = useContext(ProductsContext);
  const { query } = useContext(SearchQueryContext);
  const resultProducts = products.filter((p) =>
    p.name.toLowerCase().includes(query.toLowerCase()),
  );

  // if (query.trim() == "") return;
  if (!query.trim()) {
    return <p className="text-center mt-10">Start typing to search...</p>;
  }

  return (
    <div className="p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 lg:mx-28 my-20">
      {resultProducts.map((p) => (
        <ProductCard key={p.id} p={p} />
      ))}
    </div>
  );
}

import { useContext } from "react";
import { ProductsContext } from "../contexts/productsContext";
import ProductCard from "./ProductCard";

export default function SearchingResults({ query }) {
  const products = useContext(ProductsContext);
  const resultProducts = products.filter((p) =>
    p.name.toLowerCase().includes(query.toLowerCase()),
  );

  if (query.trim() == "") return;

  return (
    <div className="p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 lg:mx-28 my-20">
      {resultProducts.map((p) => (
        <ProductCard key={p.id} p={p} />
      ))}
    </div>
  );
}

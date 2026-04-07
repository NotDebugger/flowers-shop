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
      <div className="mt-32 ml-36">
        <svg
          className={`p-1.5 fill-amber-50! cursor-pointer bg-amber-700`}
          xmlns="http://www.w3.org/2000/svg"
          height="36px"
          viewBox="0 -960 960 960"
          width="36px"
          fill="#000"
        ></svg>
        <h1 className=" font-bold text-3xl outfit">Search: {query}</h1>
      </div>
      <div className="p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 lg:mx-28 mb-20">
        {resultProducts.map((p) => (
          <ProductCard key={p.id} p={p} />
        ))}
      </div>
    </>
  );
}

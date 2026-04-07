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
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          viewBox="0 -960 960 960"
          width="24px"
          fill="#101828"
        >
          <path d="M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z" />
        </svg>
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

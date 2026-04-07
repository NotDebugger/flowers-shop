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
      <div className="my-36 flex justify-center gap-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="40px"
          viewBox="0 -960 960 960"
          width="40px"
          fill="#101828"
        >
          <path d="M138.5-138.5Q80-197 80-280t58.5-141.5Q197-480 280-480t141.5 58.5Q480-363 480-280t-58.5 141.5Q363-80 280-80t-141.5-58.5ZM824-120 568-376q-12-13-25.5-26.5T516-428q38-24 61-64t23-88q0-75-52.5-127.5T420-760q-75 0-127.5 52.5T240-580q0 6 .5 11.5T242-557q-18 2-39.5 8T164-535q-2-11-3-22t-1-23q0-109 75.5-184.5T420-840q109 0 184.5 75.5T680-580q0 43-13.5 81.5T629-428l251 252-56 56Zm-615-61 71-71 70 71 29-28-71-71 71-71-28-28-71 71-71-71-28 28 71 71-71 71 28 28Z" />
        </svg>
        <p className="text-3xl self-end">Please start typing to search...</p>
      </div>
    );
  }

  return (
    <>
      <div className="mt-32 ml-36 flex items-center gap-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="40px"
          viewBox="0 -960 960 960"
          width="40px"
          fill="#101828"
        >
          <path d="M570-390q70-70 70-170t-70-170q-70-70-170-70t-170 70q-70 70-70 170t70 170q70 70 170 70t170-70Zm-212-28 226-227-57-57-169 170-85-84-57 56 142 142Zm42 178q-134 0-227-93T80-560q0-134 93-227t227-93q134 0 227 93t93 227q0 56-17.5 105.5T653-364l227 228-56 56-228-227q-41 32-90.5 49.5T400-240Zm0-320Z" />
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

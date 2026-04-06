import ProductCard from "../components/ProductCard";
import { Link } from "react-router-dom";
import { useCart } from "../hooks/useCart";

export default function Shop({ products }) {
  const { addToCart } = useCart();

  return (
    <>
      <div className="mt-20 p-12 text-center bg-gray-100">
        <div className="mb-3 text-sm">
          <Link to="/" className="hover:text-gray-500 duration-300">
            Home
          </Link>
          <span className="text-xs mx-2"> &gt; </span>
          <span>Shop</span>
        </div>
        <h1 className="text-gray-500 text-5xl font-bold outfit">Shop</h1>
      </div>
      <div className="p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 lg:mx-28 my-20">
        {products.map((p) => (
          <ProductCard key={p.id} p={p} onAdd={addToCart} />
        ))}
      </div>
    </>
  );
}

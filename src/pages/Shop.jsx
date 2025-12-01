import ProductCard from "../components/ProductCard";
import { products } from "../data/products";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

export default function Shop({ cart, setCart }) {
  const handleAdd = (product) => {
    if (!cart.find((item) => item.id === product.id)) {
      setCart([...cart, product]);
    }
  };
  return (
    <>
      <div className="mt-20 p-12 text-center bg-gray-100">
        <div className="mb-3 text-sm">
          <Link to="/" className="hover:text-gray-500 duration-300">Home</Link>
          <span className="text-xs mx-2"> &gt; </span>
          <span>Shop</span>
        </div>
        <h1 className="text-gray-500 text-5xl font-bold outfit">Shop</h1>
      </div>
      <div className="p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 lg:mx-28 my-20">
        {products.map((p) => (
          <ProductCard key={p.id} p={p} cart={cart} onAdd={handleAdd} />
        ))}
      </div>
      <Footer />
    </>
  );
}

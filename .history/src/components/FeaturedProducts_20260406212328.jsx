import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { ProductsContext } from "../contexts/productsContext";

export default function FeaturedProducts() {
  const products = useContext(ProductsContext);
  const navigate = useNavigate();

  const featured = products.slice(0, 6);

  return (
    <div className="px-6 py-12 max-w-5xl mx-auto">
      <h2 className="text-4xl font-bold text-center mb-10 text-gray-500 outfit">
        Featured Flowers
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-10">
        {featured.map((p) => (
          <div
            key={p.id}
            className="bg-white shadow-lg rounded-xl cursor-pointer overflow-hidden hover:scale-105 transition"
            onClick={() => navigate(`/product/${p.id}`)}
          >
            <img src={p.image} className="w-full h-56 object-cover" />
            <div className="p-4 text-center">
              <h3 className="text-2xl font-semibold mb-2">{p.name}</h3>
              <p className="text-gray-600 mb-4">EGP {p.price}</p>
              <Link
                to={`/product/${p.id}`}
                className="text-lg bg-gray-500 text-white px-5 py-2 rounded-lg hover:bg-gray-200 hover:text-gray-500 transition duration-200"
              >
                View
              </Link>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center">
        <Link
          to="/shop"
          className="text-lg bg-gray-500 text-white px-6 py-2 rounded-lg hover:bg-gray-100 hover:text-gray-500 transition duration-200"
        >
          View All
        </Link>
      </div>
    </div>
  );
}

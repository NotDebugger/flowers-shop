import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useCart } from "../hooks/useCart";

export default function ProductCard({ p, onAdd }) {
  const navigate = useNavigate();
  const { isInCart } = useCart();
  const added = isInCart(p.id);

  return (
    <div className="bg-white rounded-2xl shadow p-4 flex flex-col hover:scale-105 duration-300 text-lg">
      <img
        src={p.image}
        className="rounded-xl cursor-pointer mb-4"
        onClick={() => navigate(`/product/${p.id}`)}
      />
      <h2 className="text-xl font-semibold">{p.name}</h2>
      <p className="text-gray-600 mb-4">{p.price} EGP</p>

      <div className="mt-auto flex flex-col justify-between items-center">
        <div className="">
          {p.description.slice(0, 100)}...
          <Link to={`/product/${p.id}`} className="text-gray-500 underline">
            Details
          </Link>
        </div>

        <button
          onClick={() => !added && onAdd(p)}
          className="text-lg mt-4 mb-2 bg-gray-900 text-white px-28 py-2 rounded-full hover:bg-gray-500 transition duration-300"
        >
          {added ? <Link to="/cart">View Cart</Link> : "Add to Cart"}
        </button>
      </div>
    </div>
  );
}

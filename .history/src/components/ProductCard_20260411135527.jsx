import { Link, useNavigate } from "react-router-dom";
import { useCart } from "../hooks/useCart";
import AddToCartButton from "./AddToCartButton";

export default function ProductCard({ p, onAdd }) {
  const navigate = useNavigate();
  const { isInCart } = useCart();
  const added = isInCart(p.id);

  return (
    <div className="bg-gray-50 rounded-2xl p-4 flex flex-col hover:scale-105 duration-300 text-lg">
      <img
        src={p.image}
        className="rounded-xl cursor-pointer mb-4"
        onClick={() => navigate(`/products/${p.id}`)}
      />
      <h2 className="text-xl font-semibold">{p.name}</h2>
      <p className="text-gray-600 mb-4">{p.price} EGP</p>

      <div className="mt-auto flex flex-col justify-between items-center">
        <div className="">
          {p.description.slice(0, 100)}...
          <Link to={`/products/${p.id}`} className="text-gray-500 underline">
            Details
          </Link>
        </div>

        <AddToCartButton added={added} onAdd={onAdd} product={p} />
      </div>
    </div>
  );
}

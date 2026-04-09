import { Link, useNavigate, useLocation } from "react-router-dom";
import { useCart } from "../hooks/useCart";

export default function ProductCard({ p, onAdd }) {
  const navigate = useNavigate();
  const { isInCart } = useCart();
  const added = isInCart(p.id);
  const location = useLocation();

  return (
    <div className="bg-white rounded-2xl shadow p-4 flex flex-col hover:scale-105 duration-300 text-lg">
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

        <button
          onClick={() => !added && onAdd(p)}
          className={`text-lg mt-4 mb-2 bg-gray-900 ${added && "bg-gray-50 text-gray-900"} text-white ${location.pathname === "/search" ? "px-36 sm:px-16 md:px-10 lg-px-11" : "px-36 sm:px-16 md:px-10 lg-px-16"} py-2 rounded-full hover:bg-gray-500 transition duration-300`}
        >
          {added ? (
            <div className="flex items-center gap-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="22px"
                viewBox="0 -960 960 960"
                width="22px"
                fill="#fff"
              >
                <path d="M223.5-103.5Q200-127 200-160t23.5-56.5Q247-240 280-240t56.5 23.5Q360-193 360-160t-23.5 56.5Q313-80 280-80t-56.5-23.5Zm400 0Q600-127 600-160t23.5-56.5Q647-240 680-240t56.5 23.5Q760-193 760-160t-23.5 56.5Q713-80 680-80t-56.5-23.5ZM246-720l96 200h280l110-200H246Zm-38-80h590q23 0 35 20.5t1 41.5L692-482q-11 20-29.5 31T622-440H324l-44 80h480v80H280q-45 0-68-39.5t-2-78.5l54-98-144-304H40v-80h130l38 80Zm134 280h280-280Z" />
              </svg>
              <Link to="/cart">View Cart</Link>
            </div>
          ) : (
            <div className="flex items-center gap-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="22px"
                viewBox="0 -960 960 960"
                width="22px"
                fill="#fff"
              >
                <path d="M440-600v-120H320v-80h120v-120h80v120h120v80H520v120h-80ZM223.5-103.5Q200-127 200-160t23.5-56.5Q247-240 280-240t56.5 23.5Q360-193 360-160t-23.5 56.5Q313-80 280-80t-56.5-23.5Zm400 0Q600-127 600-160t23.5-56.5Q647-240 680-240t56.5 23.5Q760-193 760-160t-23.5 56.5Q713-80 680-80t-56.5-23.5ZM40-800v-80h131l170 360h280l156-280h91L692-482q-11 20-29.5 31T622-440H324l-44 80h480v80H280q-45 0-68.5-39t-1.5-79l54-98-144-304H40Z" />
              </svg>
              Add to Cart
            </div>
          )}
        </button>
      </div>
    </div>
  );
}

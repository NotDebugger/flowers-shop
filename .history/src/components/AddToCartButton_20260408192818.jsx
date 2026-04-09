import { Link } from "react-router-dom";

export default function AddToCartButton({
  added,
  onAdd,
  product,
  count = 1,
  // variant = "card",
}) {
  const baseClass =
    "text-lg flex justify-center items-center gap-1 rounded-full transition active:scale-90";

  const addedClass =
    "bg-gray-100 text-gray-500 hover:bg-gray-500 hover:text-white";

  const defaultClass = "bg-gray-900 text-white hover:bg-gray-500";

  return added ? (
    <Link to="/cart" className={`${baseClass} ${addedClass} px-6 py-2 w-full`}>
      🛒 View Cart
    </Link>
  ) : (
    <button
      onClick={() => onAdd(product, count)}
      className={`${baseClass} ${defaultClass} px-6 py-2 w-full`}
    >
      ➕ Add to Cart
    </button>
  );
}

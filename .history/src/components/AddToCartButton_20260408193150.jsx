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
      <svg
        className={`${added && "fill-gray-500"}`}
        xmlns="http://www.w3.org/2000/svg"
        height="22px"
        viewBox="0 -960 960 960"
        width="22px"
        fill="#fff"
      >
        <path d="M223.5-103.5Q200-127 200-160t23.5-56.5Q247-240 280-240t56.5 23.5Q360-193 360-160t-23.5 56.5Q313-80 280-80t-56.5-23.5Zm400 0Q600-127 600-160t23.5-56.5Q647-240 680-240t56.5 23.5Q760-193 760-160t-23.5 56.5Q713-80 680-80t-56.5-23.5ZM246-720l96 200h280l110-200H246Zm-38-80h590q23 0 35 20.5t1 41.5L692-482q-11 20-29.5 31T622-440H324l-44 80h480v80H280q-45 0-68-39.5t-2-78.5l54-98-144-304H40v-80h130l38 80Zm134 280h280-280Z" />
      </svg>{" "}
      View Cart
    </Link>
  ) : (
    <button
      onClick={() => onAdd(product, count)}
      className={`${baseClass} ${defaultClass} px-6 py-2 w-full`}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="22px"
        viewBox="0 -960 960 960"
        width="22px"
        fill="#fff"
      >
        <path d="M440-600v-120H320v-80h120v-120h80v120h120v80H520v120h-80ZM223.5-103.5Q200-127 200-160t23.5-56.5Q247-240 280-240t56.5 23.5Q360-193 360-160t-23.5 56.5Q313-80 280-80t-56.5-23.5Zm400 0Q600-127 600-160t23.5-56.5Q647-240 680-240t56.5 23.5Q760-193 760-160t-23.5 56.5Q713-80 680-80t-56.5-23.5ZM40-800v-80h131l170 360h280l156-280h91L692-482q-11 20-29.5 31T622-440H324l-44 80h480v80H280q-45 0-68.5-39t-1.5-79l54-98-144-304H40Z" />
      </svg>{" "}
      Add to Cart
    </button>
  );
}

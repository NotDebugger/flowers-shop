import { useParams, Link } from "react-router-dom";
import React from "react";
import Footer from "../components/Footer";

export default function ProductPage({ cart, setCart, products }) {
  const { id } = useParams();
  const product = products.find((p) => p.id === Number(id));
  const added = cart.find((item) => item.id === product.id);
  const [count, setCount] = React.useState(1);
  console.log(products);

  const increase = () => setCount(count + 1);
  const decrease = () => count > 1 && setCount(count - 1);

  return (
    <>
      <div className="flex flex-col-reverse md:flex-row justify-center md:justify-between px-4 py-12 md:px-20 bg-gray-50 mt-10 md:py-32 gap-10">
        <div className="text-black w-full md:w-1/3">
          <h1 className="text-2xl md:text-3xl font-bold mb-6 md:mb-8 outfit text-gray-500">
            {product.name}
          </h1>

          <p className="text-base md:text-xl mb-6 md:mb-16">
            {product.description}
          </p>

          <p className="text-gray-600 mb-4 text-xl md:text-2xl">
            {product.price} EGP
          </p>

          <div className="flex items-center gap-4 mb-4">
            <button
              onClick={decrease}
              className="px-3 md:px-4 py-2 bg-gray-100 rounded-xl text-lg md:text-xl"
            >
              -
            </button>
            <span className="text-xl md:text-2xl font-bold w-8 text-center">
              {count}
            </span>
            <button
              onClick={increase}
              className="px-3 md:px-4 py-2 bg-gray-100 rounded-xl text-lg md:text-xl"
            >
              +
            </button>
          </div>

          <button
            onClick={() => !added && setCart([...cart, { ...product, count }])}
            className="text-lg md:text-lg bg-gray-900 text-white px-6 py-2 rounded-full w-full text-center hover:bg-gray-500 transition mb-4"
          >
            {added ? <Link to="/cart">View Cart</Link> : "Add to Cart"}
          </button>

          <Link
            to="/shop"
            className="underline text-gray-500 hover:text-gray-400 block text-center"
          >
            Back
          </Link>
        </div>

        <div className="w-full md:w-2/5 p-6 flex justify-center items-center">
          <img
            src={`../../${product.image}`}
            className="rounded-xl w-full max-w-md"
            alt={product.name}
          />
        </div>
      </div>

      <Footer />
    </>
  );
}

import { Link } from "react-router-dom";
import FeaturedProducts from "../components/FeaturedProducts";

export default function Home() {
  return (
    <>
      <div className="bg-[url(imgs/flower4.jpg)] h-screen bg-cover bg-top bg-no-repeat relative">
        <div className="absolute inset-0 bg-linear-to-l from-gray-600/40 via-transparent"></div>
        <div className="ml-20 lg:ml-0 absolute right-16 top-2/5 lg:top-2/6 z-10">
          <h4 className="text-xl mb-4 text-gray-500">Same Day Delivery</h4>
          <h1 className="h1-title text-5xl font-bold">Flower Shop</h1>
          <p className="mt-12 text-2xl max-w-md mb-10">
            A Sensory Journey Awaits With Remarkable Gifts.
          </p>
          <Link
            to="/shop"
            className="bg-gray-600 text-white px-8 py-4 hover:bg-gray-100 hover:text-gray-500 duration-400 outfit"
          >
            SHOP NOW
          </Link>
        </div>
      </div>
      <FeaturedProducts />
    </>
  );
}

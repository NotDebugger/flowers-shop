import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <>
      <div className="bg-gray-100 py-16 px-10 md:p-24 flex flex-col md:flex-row gap-10 justify-between text-gray-500">
        <div className="w-full md:w-1/2">
          <h2 className="text-2xl md:text-3xl mb-5 outfit">
            Join our newsletter and get…
          </h2>

          <p className="mb-5">
            Join our email subscription now to get updates on promotions and
            coupons.
          </p>

          <form className="flex w-full">
            <input
              type="email"
              placeholder="Your email here..."
              className="bg-white px-5 py-2 outline-0 w-full rounded-l-full"
            />
            <button className="bg-white px-3 rounded-r-full">
              <svg
                className="inline hover:fill-gray-500 hover:-rotate-45 duration-300"
                xmlns="http://www.w3.org/2000/svg"
                height="30px"
                viewBox="0 -960 960 960"
                width="30px"
                fill="#000"
              >
                <path d="M120-160v-640l760 320-760 320Zm80-120 474-200-474-200v140l240 60-240 60v140Zm0 0v-400 400Z" />
              </svg>
            </button>
          </form>
        </div>

        {/* Social Icons */}
        <div className="grid grid-cols-2 gap-5 justify-center items-center w-1/4 md:w-auto">
          <a href="https://www.facebook.com" className="flex justify-center">
            <img
              src="/src/imgs/facebook.png"
              alt=""
              className="w-10 hover:w-8 duration-200 hover:opacity-70"
            />
          </a>

          <a href="https://www.instagram.com" className="flex justify-center">
            <img
              src="/src/imgs/instagram.png"
              alt=""
              className="w-10 hover:w-8 duration-200 hover:opacity-70"
            />
          </a>
        </div>
      </div>

      <div className="flex flex-col md:flex-row justify-between mx-5 md:mx-30 py-10 md:py-16 border-t border-b border-dashed border-gray-300 gap-10">
        <div className="flex flex-col md:flex-row md:items-center">
          <h1 className="family text-3xl text-gray-500 text-center md:text-left">
            Flower Shop
          </h1>

          <div className="md:ml-10 mt-5 md:mt-0 text-center md:text-left">
            <p className="font-bold mb-4 outfit">
              Need help? Call us: (+20) 01007705000
            </p>
            <p className="text-gray-500">
              Opening Hours: Daily, from 10am to 10pm
            </p>
          </div>
        </div>

        {/* Payment Icons */}
        <div className="flex justify-center md:justify-end gap-6 items-center">
          <img src="/src/imgs/visa.png" alt="" className="w-16 h-16" />
          <img src="/src/imgs/card.png" alt="" className="w-20 h-12" />
          <img
            src="/src/imgs/american-express.png"
            alt=""
            className="w-16 h-16"
          />
        </div>
      </div>

      <footer className="p-6 mx-5 md:mx-30 flex flex-col md:flex-row justify-between text-center md:text-left gap-5">
        <p>© 2025 Flower Shop — All Rights Reserved</p>

        <div className="flex gap-5 justify-center md:justify-end">
          <Link to="/about" className="hover:text-gray-500 duration-300">
            About Us
          </Link>
          <Link to="/contact" className="hover:text-gray-500 duration-300">
            Contact Us
          </Link>
        </div>
      </footer>
    </>
  );
}

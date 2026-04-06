import { Link } from "react-router-dom";

export default function Contact() {
  return (
    <>
      <div className="h-lvh flex justify-center items-center bg-gray-50">
        <div className="p-16 w-3xl mt-16 shadow bg-white rounded-4xl">
          <h1 className="text-3xl font-bold mb-4 text-gray-500 outfit">
            Contact Us
          </h1>
          <p className="mb-4 text-gray-500">
            Feel free to reach out for any inquiries.
          </p>
          <form className="flex flex-col gap-4">
            <input
              type="text"
              placeholder="Your Name"
              className="p-3 border rounded-xl outline-0"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="p-3 border rounded-xl outline-0"
            />
            <textarea
              placeholder="Your Message"
              className="p-3 border rounded-xl h-32 outline-0"
            ></textarea>
            <button className="text-lg bg-gray-500 hover:bg-gray-600 duration-200 text-white p-3 rounded-xl">
              Send
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

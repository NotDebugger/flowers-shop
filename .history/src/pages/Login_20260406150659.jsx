import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  // Handle input changes
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Submit Handler
  const handleSubmit = async (e) => {
    e.preventDefault();
    navigate("/");
  };

  return (
    <>
      <div className="min-h-screen mt-16 lg:mt-5 flex justify-center items-center bg-gray-50 px-4">
        <div
          className="
            p-6 
            w-full 
            max-w-md 
            bg-white 
            border 
            border-gray-100 
            shadow 
            rounded-2xl
          "
        >
          <h1 className="text-2xl md:text-3xl font-bold mb-6 text-center text-gray-500 outfit">
            Log in
          </h1>

          <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
            <label className="ml-1 text-base md:text-lg">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
              className="p-3 border rounded-xl outline-0"
              required
            />

            <label className="ml-1 text-base md:text-lg">Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Password"
              className="p-3 border rounded-xl outline-0"
              required
            />

            <Link
              to="/password-forgot"
              className="underline text-end hover:text-gray-400 text-sm md:text-base"
            >
              Forgot your password?
            </Link>

            <button className="bg-gray-500 hover:bg-gray-600 text-white p-3 rounded-xl text-lg">
              Log In
            </button>

            <Link
              to="/sign-up"
              className="underline text-center hover:text-gray-400 text-sm md:text-base"
            >
              Don't have an account?
            </Link>
          </form>
        </div>
      </div>
    </>
  );
}

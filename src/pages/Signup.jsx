import Footer from "../components/Footer";

export default function Signup() {
  return (
    <>
      <div className="min-h-screen mt-6 lg:mt-5 p-10 flex justify-center items-center bg-gray-50 px-4">
        <div
          className="
            p-6 
            w-full 
            max-w-2xl 
            mt-10 
            bg-white 
            border border-gray-100 
            shadow 
            rounded-2xl
          "
        >
          <h1 className="text-2xl md:text-3xl font-bold mb-6 text-center text-gray-500 outfit">
            Sign Up
          </h1>

          <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="ml-1 text-base md:text-lg block">
                First Name
              </label>
              <input
                type="text"
                placeholder="e.g Mohamed"
                className="p-3 border rounded-xl outline-0 w-full"
                required
              />
            </div>

            <div>
              <label className="ml-1 text-base md:text-lg block">
                Last Name
              </label>
              <input
                type="text"
                placeholder="e.g Elsabagh"
                className="p-3 border rounded-xl outline-0 w-full"
                required
              />
            </div>

            <div>
              <label className="ml-1 text-base md:text-lg block">
                Enter Your Email
              </label>
              <input
                type="email"
                placeholder="Email"
                className="p-3 border rounded-xl outline-0 w-full"
                required
              />
            </div>

            <div>
              <label className="ml-1 text-base md:text-lg block">
                Your Phone Number
              </label>
              <input
                type="text"
                placeholder="Your phone number (optional)"
                className="p-3 border rounded-xl outline-0 w-full"
              />
            </div>

            <div>
              <label className="ml-1 text-base md:text-lg block">
                New Password
              </label>
              <input
                type="password"
                placeholder="New Password"
                className="p-3 border rounded-xl outline-0 w-full"
                required
              />
            </div>

            <div>
              <label className="ml-1 text-base md:text-lg block">
                Confirm Password
              </label>
              <input
                type="password"
                placeholder="Confirm Password"
                className="p-3 border rounded-xl outline-0 w-full"
                required
              />
            </div>

            <button className="text-lg bg-gray-500 hover:bg-gray-600 text-white p-3 rounded-xl col-span-full mt-6">
              Sign Up
            </button>
          </form>
        </div>
      </div>

      <Footer />
    </>
  );
}

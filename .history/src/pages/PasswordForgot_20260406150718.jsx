export default function PasswordForgot() {
  return (
    <>
      <div className="min-h-screen mt-16 lg:mt-5 flex justify-center items-center bg-gray-50 px-4">
        <div
          className="
            px-8 py-8 
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
            Forgot Your Password?
          </h1>

          <form className="flex flex-col gap-4">
            <label className="ml-1 text-base md:text-lg">
              Enter Your Email
            </label>
            <input
              type="email"
              placeholder="Email"
              className="p-3 border rounded-xl outline-0"
              required
            />

            <label className="ml-1 text-base md:text-lg">New Password</label>
            <input
              type="password"
              placeholder="Password"
              className="p-3 border rounded-xl outline-0"
              required
            />

            <label className="ml-1 text-base md:text-lg">
              Confirm Password
            </label>
            <input
              type="password"
              placeholder="Password"
              className="p-3 border rounded-xl outline-0"
              required
            />

            <button className="bg-gray-500 hover:bg-gray-600 text-white p-3 rounded-xl text-lg">
              Send Reset
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

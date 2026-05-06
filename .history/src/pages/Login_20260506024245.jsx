import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    navigate("/");
  };

  return (
    <section className="section-wrap py-8">
      <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="page-banner rounded-[2.4rem] p-8 md:p-10">
          <span className="section-kicker">Welcome back</span>
          <h1 className="h1-title mt-6 text-5xl text-slate-900">
            Sign in and pick up where the gifting mood left off.
          </h1>
          <p className="mt-5 text-lg leading-8 text-slate-600">
            Save time at checkout, track the arrangements you love, and come
            back for your next thoughtful surprise.
          </p>
        </div>

        <div className="soft-card rounded-[2.4rem] p-8 md:p-10">
          <h2 className="text-3xl font-semibold text-slate-900">Log in</h2>

          <form className="mt-8 flex flex-col gap-4" onSubmit={handleSubmit}>
            <label className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
              className="field"
              required
            />

            <label className="mt-2 text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">
              Password
            </label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Password"
              className="field"
              required
            />

            <Link
              to="/password-forgot"
              className="text-end text-sm font-semibold text-(--accent) transition hover:text-(--accent-dark)"
            >
              Forgot your password?
            </Link>

            <button className="flower-button mt-2 w-full">Log in</button>

            <Link
              to="/sign-up"
              className="text-center text-sm text-slate-600 transition hover:text-(--accent)"
            >
              Do not have an account yet?
            </Link>
          </form>
        </div>
      </div>
    </section>
  );
}

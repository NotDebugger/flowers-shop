import { Link } from "react-router-dom";
import { useState } from "react";

export default function Signup() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <section className="section-wrap py-8">
      <div className="soft-card mx-auto max-w-4xl rounded-[2.4rem] p-8 md:p-10">
        <div className="mb-8 max-w-2xl">
          <span className="section-kicker">Create account</span>
          <h1 className="h1-title mt-6 text-5xl text-slate-900">
            Join the flower list.
          </h1>
          <p className="mt-4 text-lg leading-8 text-slate-600">
            Create an account for faster checkout, saved details, and a smoother
            gifting experience each time you visit.
          </p>
        </div>

        <form
          className="grid grid-cols-1 gap-4 md:grid-cols-2"
          onSubmit={handleSubmit}
        >
          <div>
            <label className="mb-2 block text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">
              First Name
            </label>
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              placeholder="e.g Mohamed"
              className="field"
              required
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">
              Last Name
            </label>
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              placeholder="e.g Elsabagh"
              className="field"
              required
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">
              Enter Your Email
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
          </div>

          <div>
            <label className="mb-2 block text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">
              Your Phone Number
            </label>
            <input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Your phone number (optional)"
              className="field"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">
              New Password
            </label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="New Password"
              className="field"
              required
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">
              Confirm Password
            </label>
            <input
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              placeholder="Confirm Password"
              className="field"
              required
            />
          </div>

          <button
            className="flower-button col-span-full mt-4 w-full md:w-fit"
            type="submit"
          >
            Sign Up
          </button>
        </form>

        <Link
          to="/login"
          className="mt-6 inline-flex text-sm text-slate-600 transition hover:text-(--accent)"
        >
          Already have an account? Log in.
        </Link>
      </div>
    </section>
  );
}
